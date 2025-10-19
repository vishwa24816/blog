'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Logo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 100 100"
    className="h-8 w-8 text-white"
  >
    <defs>
      <radialGradient id="instagram-gradient" cx="0.3" cy="1.2" r="1.5">
        <stop offset="0.2" stopColor="#fEDA75" />
        <stop offset="0.4" stopColor="#fa7e1e" />
        <stop offset="0.6" stopColor="#d62976" />
        <stop offset="0.9" stopColor="#962fbf" />
      </radialGradient>
    </defs>
    <rect
      width="100"
      height="100"
      rx="30"
      ry="30"
      fill="url(#instagram-gradient)"
    />
    <rect
      width="84"
      height="84"
      x="8"
      y="8"
      rx="22"
      ry="22"
      fill="none"
      stroke="white"
      strokeWidth="9"
    />
    <circle cx="50" cy="50" r="21" fill="none" stroke="white" strokeWidth="9" />
    <circle cx="78" cy="22" r="5" fill="white" />
  </svg>
);

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="text-lg font-bold">SIM</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="sm">
            Sign In
          </Button>
          <Button size="sm">Get Started</Button>
        </div>
      </div>
    </header>
  );
}
