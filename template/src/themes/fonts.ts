import { Platform } from 'react-native';

export const fonts = {
  size: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  weight: {
    regular: '400',
    medium: '500',
    bold: '700',
  } as const,
  family: {
    // 预留给自定义字体，后续可以替换为具体的字体名称
    regular: Platform.select({ ios: 'System', android: 'Roboto' }),
    medium: Platform.select({ ios: 'System', android: 'Roboto' }),
    bold: Platform.select({ ios: 'System', android: 'Roboto' }),
  },
};

export type Fonts = typeof fonts;
