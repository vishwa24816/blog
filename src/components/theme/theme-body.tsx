'use client';

import { useTheme } from '@/components/theme/theme-provider';

type ThemeBodyProps = {
  children: React.ReactNode;
  className?: string;
};

export function ThemeBody({ children, className }: ThemeBodyProps) {
  const { theme } = useTheme();

  return (
    <html lang="en" className={theme} suppressHydrationWarning>
      <body className={className}>{children}</body>
    </html>
  );
}
