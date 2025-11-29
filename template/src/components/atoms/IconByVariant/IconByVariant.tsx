import getAssetsContext from '@/themes/assests/getAssetsContext'
import { ReactElement, useMemo } from 'react'
import { SvgProps } from 'react-native-svg'

import * as z from 'zod'

type Properties = {
  readonly path: string
} & SvgProps

const icons = getAssetsContext('icons')
const EXTENSION = 'svg'
const SIZE = 24

function IconByVariant({ height = SIZE, width = SIZE, path, ...props }: Properties) {
  const iconProperties = { ...props, height, width }

  const Icon = useMemo(() => {
    try {
      
      return z
          .object({
            default: z.custom<React.FC<SvgProps>>(() => z.custom<ReactElement<SvgProps>>()),
          })
          .parse(icons(`./${path}.${EXTENSION}`)).default;
    } catch (error) {
      console.warn(`Icon not found: ${path}.${EXTENSION}. Error: ${error}`)
      return null
    }
  }, [path])

  return Icon ? <Icon {...iconProperties} /> : null
}

export default IconByVariant
