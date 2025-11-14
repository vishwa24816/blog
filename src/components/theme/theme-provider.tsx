
'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type ThemeMode = 'light' | 'dark';

type Theme = {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
};

const ThemeContext = createContext<Theme | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>('dark');

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
    const handleThemeChange = () => {
      setTheme(prefersDark.matches ? 'dark' : 'light');
    };

    handleThemeChange(); // Set initial theme
    prefersDark.addEventListener('change', handleThemeChange);

    return () => {
      prefersDark.removeEventListener('change', handleThemeChange);
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
