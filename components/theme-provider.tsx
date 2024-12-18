"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import { useSystemTheme, useThemeTransition } from "@/lib/themes/hooks";
import { THEME_ATTRIBUTE, DEFAULT_THEME } from "@/lib/themes/constants";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Initialize system theme tracking and theme transitions
  const mounted = useSystemTheme();
  useThemeTransition();
  
  if (!mounted) {
    return null;
  }
  
  return (
    <NextThemesProvider 
      attribute={THEME_ATTRIBUTE}
      defaultTheme={DEFAULT_THEME}
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}