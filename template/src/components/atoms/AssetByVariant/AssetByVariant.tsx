import { useMemo } from 'react';
import { Image } from 'react-native';
import type { ImageProps, ImageSourcePropType } from 'react-native';

import * as z from 'zod';
import getAssetsContext from '@/themes/assests/getAssetsContext';
import { useTheme } from '@/themes';

const images = getAssetsContext('images');
const SIZE = 24;

type Properties = {
  readonly extension?: string;
  readonly path: string;
  readonly width?: number;
  readonly height?: number;
} & Omit<ImageProps, 'source'>;

function AssetByVariant({
  extension = 'png',
  path,
  width = SIZE,
  height = SIZE,
  style,
  ...props
}: Properties) {
  const { isDark } = useTheme();

  const image = useMemo(() => {
    try {
      const fixPath = isDark
        ? `./dark/${path}.${extension}`
        : `./${path}.${extension}`;

      return z.custom<ImageSourcePropType>().parse(images(fixPath));
    } catch (error) {
      console.warn(`Asset not found: ${path}.${extension}. Error: ${error}`);
      return undefined;
    }
  }, [isDark, path, extension]);

  return image ? (
    <Image resizeMode="contain" source={image} style={[{ width, height }, style]} {...props} />
  ) : null;
}

export default AssetByVariant;
