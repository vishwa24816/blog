'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ThemeSwitcher } from '../theme/theme-switcher';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const Logo = () => (
  <Image
    src="https://img.notionusercontent.com/s3/prod-files-secure%2F7526fb47-9c52-81ef-9df9-00033e87bb4d%2F44533ca6-21d9-4c13-919e-f6d332ea4fc4%2FScreenshot_20250505-214836-643_(1)_(1).png/size/w=770?exp=1760969487&sig=BTHYrfBoQPR0x1w2KKZcHkZRpXIcBSLnHmNhVhzQf7Y&id=2916fb47-9c52-80cf-8195-fcb3959ede09&table=block"
    alt="SIM Logo"
    width={32}
    height={32}
    className="h-8 w-8"
  />
);

export function Header() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
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
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 focus:outline-none">
              <Logo />
              <span className="text-xl font-bold font-headline">SIM</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem asChild>
              <Link href="#">Features</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#">About</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="#">Contact</Link>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="flex items-center gap-4">
          <ThemeSwitcher />
          <Button variant="outline" size="sm">
            Sign In
          </Button>
        </div>
      </div>
    </motion.header>
  );
}
