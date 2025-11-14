
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
import { ThemeSwitcher } from '../theme/theme-switcher';

const Logo = () => (
  <Image
    src="https://lh3.googleusercontent.com/d/1kNohQtEjQUqeezcw18bwiR-OXrCP1zzy"
    alt="SIM Logo"
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
          'sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-sm'
        )}
      >
        <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="flex items-center gap-2 focus:outline-none"
          >
            <Logo />
            <span className="text-xl font-bold font-headline">SIM</span>
          </button>

          <div className="flex items-center gap-4">
            <ThemeSwitcher />
            <div className="relative">
              <Button variant="outline" size="sm" asChild>
                <Link
                  href="/login"
                >
                  Sign In
                </Link>
              </Button>
            </div>
          </div>
        </div>
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="overflow-hidden border-t border-border/50"
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
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
      <div className="sticky top-16 z-40 flex justify-center py-1 bg-primary/90 text-primary-foreground text-sm font-semibold shadow-lg">
        Sign In for the Lucky Draw
      </div>
    </>
  );
}
