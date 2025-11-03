'use client';

import { useState, useEffect } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { useAuth, useFirestore } from '@/firebase';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { useToast } from '@/hooks/use-toast';
import { Loader2, PartyPopper } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/landing/header';
import { Footer } from '@/components/landing/footer';
import { doc } from 'firebase/firestore';
import { setDocumentNonBlocking } from '@/firebase/non-blocking-updates';
import { signInAnonymously } from 'firebase/auth';
import Confetti from 'react-confetti';

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isCongratsDialogOpen, setIsCongratsDialogOpen] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const auth = useAuth();
  const firestore = useFirestore();
  const { toast } = useToast();
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    
    if (typeof window !== 'undefined') {
      handleResize();
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const showSuccessDialog = () => {
    setIsCongratsDialogOpen(true);
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      if (user) {
        const userRef = doc(firestore, 'users', user.uid);
        const [firstName, ...lastNameParts] =
          (user.displayName || ' ').split(' ');
        const lastName = lastNameParts.join(' ');

        const userData = {
          id: user.uid,
          email: user.email,
          firstName: firstName,
          lastName: lastName,
          createdAt: new Date().toISOString(),
        };

        setDocumentNonBlocking(userRef, userData, { merge: true });

        toast({
          title: 'Login Successful',
          description: "You've been successfully logged in.",
        });
        showSuccessDialog();
      }
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Login Failed',
        description:
          error.code === 'auth/popup-closed-by-user'
            ? 'The sign-in window was closed. Please try again.'
            : error.message || 'An error occurred. Please try again.',
      });
    }
    setIsLoading(false);
  };

  const handleAnonymousLogin = async () => {
    setIsLoading(true);
    try {
      await signInAnonymously(auth);
      toast({
        title: 'Logged in as Guest',
        description: 'You are now browsing as a guest.',
      });
      showSuccessDialog();
    } catch (error: any) {
      toast({
        variant: 'destructive',
        title: 'Anonymous Login Failed',
        description: error.message || 'An error occurred. Please try again.',
      });
    }
    setIsLoading(false);
  };

  return (
    <>
      {isCongratsDialogOpen && (
        <Confetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={true}
          style={{ zIndex: 100 }}
          gravity={0.3}
        />
      )}
      <div className="flex flex-col min-h-screen bg-background">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <Card className="mx-auto max-w-sm w-full">
            <CardHeader>
              <CardTitle className="text-2xl">Sign In</CardTitle>
              <CardDescription>
                Sign in with your Google account to continue
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4">
              <Button
                onClick={handleGoogleLogin}
                className="w-full"
                disabled={isLoading}
              >
                {isLoading ? (
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                ) : (
                  <svg
                    className="mr-2 h-4 w-4"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 381.5 512 244 512 109.8 512 0 402.2 0 261.8S109.8 11.8 244 11.8c70.3 0 129.5 28.2 174.9 73.1l-63.1 61.9C324.7 112.5 288.2 96.5 244 96.5c-88.6 0-160.1 71.8-160.1 160.1s71.4 160.1 160.1 160.1c98.2 0 135-70.2 140.8-106.9H244V261.8h244z"
                    ></path>
                  </svg>
                )}
                Sign in with Google
              </Button>
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-background px-2 text-muted-foreground">
                    Or
                  </span>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full"
                onClick={handleAnonymousLogin}
                disabled={isLoading}
              >
                {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Sign in as Guest
              </Button>
            </CardContent>
          </Card>
        </main>
        <Footer />
      </div>

      <Dialog open={isCongratsDialogOpen} onOpenChange={setIsCongratsDialogOpen}>
        <DialogContent className="sm:max-w-md text-center">
          <DialogHeader className="space-y-4">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
              <PartyPopper className="h-6 w-6 text-green-600 dark:text-green-400" />
            </div>
            <DialogTitle className="text-2xl font-bold text-center">
              Congratulations!
            </DialogTitle>
            <DialogDescription className="text-base text-muted-foreground">
              You are now eligible for the Lucky Draw of Rs 100.
            </DialogDescription>
          </DialogHeader>
          <div className="py-4">
            <p className="text-sm text-muted-foreground">
              You can wait enjoying your November and December and New year.
              Because next year on the 2nd of January, be ready to get a mail
              from us to enjoy more because you could be one of the 10 lucky winners!
            </p>
          </div>
          <Button onClick={() => router.push('/dashboard')}>Go to Dashboard</Button>
        </DialogContent>
      </Dialog>
    </>
  );
}
