'use client';

import { createContext, useContext, useState, useEffect } from 'react';

type ThemeMode = 'light' | 'dark';

type Theme = {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  hue: number;
  setHue: (hue: number) => void;
  saturation: number;
  setSaturation: (saturation: number) => void;
  lightness: number;
  setLightness: (lightness: number) => void;
};

const ThemeContext = createContext<Theme | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [hue, setHue] = useState(231);
  const [saturation, setSaturation] = useState(48);
  const [lightness, setLightness] = useState(55);

  useEffect(() => {
    document.documentElement.style.setProperty('--primary-hue', hue.toString());
    document.documentElement.style.setProperty('--primary-saturation', `${saturation}%`);
    document.documentElement.style.setProperty('--primary-lightness', `${lightness}%`);
  }, [hue, saturation, lightness]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, hue, setHue, saturation, setSaturation, lightness, setLightness }}>
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
