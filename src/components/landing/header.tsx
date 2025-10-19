'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Logo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 100 100"
    className="h-8 w-8"
  >
    <g>
      <path
        fill="#f5b316"
        d="M50,0 C63.8,0 75,11.2 75,25 L50,25 Z"
        transform="rotate(18, 50, 50)"
      />
      <path
        fill="#e54325"
        d="M50,0 C63.8,0 75,11.2 75,25 L50,25 Z"
        transform="rotate(54, 50, 50)"
      />
      <path
        fill="#d71e6a"
        d="M50,0 C63.8,0 75,11.2 75,25 L50,25 Z"
        transform="rotate(90, 50, 50)"
      />
      <path
        fill="#3e4a9c"
        d="M50,0 C63.8,0 75,11.2 75,25 L50,25 Z"
        transform="rotate(126, 50, 50)"
      />
      <path
        fill="#26348a"
        d="M50,0 C63.8,0 75,11.2 75,25 L50,25 Z"
        transform="rotate(162, 50, 50)"
      />
      <path
        fill="#724832"
        d="M50,0 C63.8,0 75,11.2 75,25 L50,25 Z"
        transform="rotate(198, 50, 50)"
      />
      <path
        fill="#000000"
        d="M50,0 C63.8,0 75,11.2 75,25 L50,25 Z"
        transform="rotate(234, 50, 50)"
      />
      <path
        fill="#236f3d"
        d="M50,0 C63.8,0 75,11.2 75,25 L50,25 Z"
        transform="rotate(270, 50, 50)"
      />
      <path
        fill="#329249"
        d="M50,0 C63.8,0 75,11.2 75,25 L50,25 Z"
        transform="rotate(306, 50, 50)"
      />
      <path
        fill="#f9d41c"
        d="M50,0 C63.8,0 75,11.2 75,25 L50,25 Z"
        transform="rotate(342, 50, 50)"
      />
    </g>
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
