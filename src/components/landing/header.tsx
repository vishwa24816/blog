
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import {
  motion,
  useScroll,
  useMotionValueEvent,
  AnimatePresence,
} from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { ThemeToggle } from '../theme/theme-toggle';

const Logo = () => (
  <Image
    src="https://lh3.googleusercontent.com/d/1gj8YdNVg59HEvsF9_2qZ7OXPIL4ayTNi"
    alt="Coin Veda Logo"
    width={32}
    height={32}
    unoptimized
    className="h-8 w-8"
  />
);

export function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <>
      <motion.header
        variants={{
          visible: { y: 0 },
          hidden: { y: '-100%' },
        }}
        animate={hidden ? 'hidden' : 'visible'}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={cn(
          'sticky top-0 z-50 border-b border-white/20 bg-background/50 backdrop-blur-lg'
        )}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 focus:outline-none"
          >
            <Logo />
            <span className="text-xl font-bold font-headline hidden sm:inline">Coin Veda</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              About
            </Link>
            <Link
              href="/business"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Business
            </Link>
            <Link
              href="/product"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Product
            </Link>
          </nav>

          <div className="flex items-center gap-2">
            <div className="relative hidden md:block">
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="https://simulationexchange.vercel.app/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sign In
                </Link>
              </Button>
            </div>
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-border/50 md:hidden"
            >
              <nav className="container mx-auto flex flex-col items-start gap-4 px-4 py-4 md:px-6">
                <Link
                  href="/"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsExpanded(false)}
                >
                  Home
                </Link>
                <Link
                  href="/about"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsExpanded(false)}
                >
                  About
                </Link>
                <Link
                  href="/business"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsExpanded(false)}
                >
                  Business
                </Link>
                <Link
                  href="/product"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                  onClick={() => setIsExpanded(false)}
                >
                  Product
                </Link>
                 <Button variant="outline" size="sm" asChild className="w-full">
                  <Link
                    href="https://simulationexchange.vercel.app/login"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Sign In
                  </Link>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      <div className="fixed top-20 right-4 z-50">
        <Link
          href="https://simulationexchange.vercel.app/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="bg-primary/90 text-primary-foreground text-sm font-semibold shadow-lg py-2 px-4 rounded-lg">
            Sign In for the Lucky Draw
          </div>
        </Link>
      </div>
    </>
  );
}
