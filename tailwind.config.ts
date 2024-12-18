import type { Config } from 'tailwindcss';
import { colors } from './lib/themes/colors';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enable class-based dark mode
  theme: {
    extend: {
      colors: {
        // Map semantic color tokens to Tailwind classes
        'background-primary': 'var(--background-primary)',
        'background-secondary': 'var(--background-secondary)',
        'background-tertiary': 'var(--background-tertiary)',
        
        'foreground-primary': 'var(--foreground-primary)',
        'foreground-secondary': 'var(--foreground-secondary)',
        'foreground-tertiary': 'var(--foreground-tertiary)',
        
        'border-default': 'var(--border-default)',
        'border-hover': 'var(--border-hover)',
        'border-focus': 'var(--border-focus)',
        
        'action-primary': 'var(--action-primary)',
        'action-primary-hover': 'var(--action-primary-hover)',
        'action-secondary': 'var(--action-secondary)',
        'action-secondary-hover': 'var(--action-secondary-hover)',
        
        // Original color palette
        primary: colors.light.primary,
        accent: colors.light.accent,
        gray: colors.light.gray,
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;