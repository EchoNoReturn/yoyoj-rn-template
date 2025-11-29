export const palette = {
  white: '#FFFFFF',
  black: '#000000',
  gray100: '#f5f5f5',
  gray200: '#eeeeee',
  gray300: '#e0e0e0',
  gray400: '#bdbdbd',
  gray500: '#9e9e9e',
  gray600: '#757575',
  gray700: '#616161',
  gray800: '#424242',
  gray900: '#212121',
  primary: '#007AFF',
  secondary: '#5856D6',
  success: '#34C759',
  warning: '#FF9500',
  error: '#FF3B30',
} as const;

export const lightColors = {
  background: palette.white,
  surface: palette.gray100,
  text: palette.black,
  textSecondary: palette.gray600,
  border: palette.gray300,
  ...palette,
} as const;

export const darkColors = {
  background: palette.black,
  surface: palette.gray900,
  text: palette.white,
  textSecondary: palette.gray400,
  border: palette.gray700,
  ...palette,
} as const;

export type Colors = Record<keyof typeof lightColors, string>;
