"use client";

import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { DARK_MODE_QUERY, THEME_TRANSITION_DURATION } from './constants';

export function useSystemTheme() {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const mediaQuery = window.matchMedia(DARK_MODE_QUERY);
    
    const handleChange = (e: MediaQueryListEvent) => {
      setTheme(e.matches ? 'dark' : 'light');
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [setTheme]);

  return mounted;
}

export function useThemeTransition() {
  useEffect(() => {
    document.documentElement.style.setProperty(
      '--theme-transition-duration',
      `${THEME_TRANSITION_DURATION}ms`
    );
  }, []);
}