import { ViewStyle } from 'react-native';

export type BorderSides = 'top' | 'right' | 'bottom' | 'left' | 'all' | 'horizontal' | 'vertical'
/**
 * 生成边框样式。
 * ***注意，这个方法目前只支持一些通用的边框样式，过于复杂和特殊的请使用自定义样式***
 * @param width 边框宽度
 * @param radius 圆角
 * @param color 边框颜色
 * @param side 边 选择
 * @returns ViewStyle
 */
function borders(width: number = 1, radius: number = 0, color: string = 'black', side: BorderSides = 'all'): ViewStyle {
  const defaultStyle: ViewStyle = {
    borderWidth: width,
    borderRadius: radius,
    borderColor: color,
  };
  switch (side) {
    case 'top':
      return {
        ...defaultStyle,
        borderRightWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
      } as const satisfies ViewStyle;
    case 'right':
      return {
        ...defaultStyle,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderLeftWidth: 0,
      } as const satisfies ViewStyle;
    case 'bottom':
      return {
        ...defaultStyle,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
      } as const satisfies ViewStyle;
    case 'left':
      return {
        ...defaultStyle,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 0,
      } as const satisfies ViewStyle;
    case 'horizontal':
      return {
        ...defaultStyle,
        borderTopWidth: 0,
        borderBottomWidth: 0,
      } as const satisfies ViewStyle;
    case 'vertical':
      return {
        ...defaultStyle,
        borderRightWidth: 0,
        borderLeftWidth: 0,
      } as const satisfies ViewStyle;
    default:
      return { ...defaultStyle } as const satisfies ViewStyle;
  }
}

export type Borders = ReturnType<typeof borders>;

export default borders;