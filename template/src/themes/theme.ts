import { lightColors, darkColors, Colors } from './colors';
import { fonts, Fonts } from './fonts';
import layout from './layout';
import gutter from './gutter';
import borders from './borders';

export interface Theme {
  colors: Colors;
  fonts: Fonts;
  borders: typeof borders;
  layout: typeof layout;
  gutter: typeof gutter;
  isDark: boolean;
}

export const lightTheme: Theme = {
  colors: lightColors,
  fonts,
  borders,
  layout,
  gutter,
  isDark: false,
};

export const darkTheme: Theme = {
  colors: darkColors,
  fonts,
  borders,
  layout,
  gutter,
  isDark: true,
};
