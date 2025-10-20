
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Space_Grotesk } from 'next/font/google';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { cn } from '@/lib/utils';
import { ThemeProvider } from '@/components/theme/theme-provider';
import { ThemeBody } from '@/components/theme/theme-body';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-headline',
});

export const metadata: Metadata = {
  title: 'SIM - Your AI-Powered Path to Smarter Investing',
  description:
    'Simulate investment strategies, track portfolios, and get AI-powered insights.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <ThemeBody
        className={cn(
          'min-h-screen font-body antialiased',
          inter.variable,
          spaceGrotesk.variable
        )}
      >
        {children}
        <Toaster />
      </ThemeBody>
    </ThemeProvider>
  );
}
