import type { ImageSourcePropType } from 'react-native';
import type { SvgProps } from 'react-native-svg';
import type React from 'react';

export type AssetType = 'icons' | 'images';

const getAssetsContext = (type: AssetType) =>
  type === 'images'
    ? require.context<ImageSourcePropType>('./images', true, /\.(png|jpg|jpeg|gif|webp)$/)
    : require.context<React.FC<SvgProps>>('./icons', true, /\.svg$/);

export default getAssetsContext;