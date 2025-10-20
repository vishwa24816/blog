'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type Theme = {
  hue: number;
  setHue: (hue: number) => void;
};

const ThemeContext = createContext<Theme | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [hue, setHue] = useState(231); 

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-hue', hue.toString());
  }, [hue]);

  return (
    <ThemeContext.Provider value={{ hue, setHue }}>
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
