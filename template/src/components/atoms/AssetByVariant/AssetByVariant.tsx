import { useMemo } from 'react';
import { Image } from 'react-native';
import type { ImageProps, ImageSourcePropType } from 'react-native';

import * as z from 'zod';
import getAssetsContext from '@/themes/assests/getAssetsContext';

const images = getAssetsContext('images');

type Properties = {
  readonly extension?: string;
  readonly path: string;
} & Omit<ImageProps, 'source'>;

function AssetByVariant({ extension = 'png', path, ...props }: Properties) {
  const image = useMemo(() => {
    try {
      return z
        .custom<ImageSourcePropType>()
        .parse(images(`./${path}.${extension}`));
    } catch (error) {
      console.warn(`Asset not found: ${path}.${extension}. Error: ${error}`);
      return undefined;
    }
  }, [path, extension]);

  return image ? <Image source={image} {...props} /> : null;
}

export default AssetByVariant;
