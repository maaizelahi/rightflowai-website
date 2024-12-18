import { colors } from './colors';

// Semantic color tokens that map to specific use cases
export const semanticTokens = {
  light: {
    background: {
      primary: colors.light.gray[50],
      secondary: colors.light.gray[100],
      tertiary: colors.light.gray[200],
    },
    foreground: {
      primary: colors.light.gray[900],
      secondary: colors.light.gray[700],
      tertiary: colors.light.gray[500],
    },
    border: {
      default: colors.light.gray[200],
      hover: colors.light.gray[300],
      focus: colors.light.primary[500],
    },
    action: {
      primary: colors.light.primary[500],
      primaryHover: colors.light.primary[600],
      secondary: colors.light.accent[500],
      secondaryHover: colors.light.accent[600],
    },
  },
  dark: {
    background: {
      primary: colors.dark.gray[50],
      secondary: colors.dark.gray[100],
      tertiary: colors.dark.gray[200],
    },
    foreground: {
      primary: colors.dark.gray[900],
      secondary: colors.dark.gray[700],
      tertiary: colors.dark.gray[500],
    },
    border: {
      default: colors.dark.gray[200],
      hover: colors.dark.gray[300],
      focus: colors.dark.primary[500],
    },
    action: {
      primary: colors.dark.primary[500],
      primaryHover: colors.dark.primary[600],
      secondary: colors.dark.accent[500],
      secondaryHover: colors.dark.accent[600],
    },
  },
};