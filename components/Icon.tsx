import type { ImageProps, ImageResizeMode } from 'react-native';
import { Image } from 'react-native';

import { icons } from '@/constants';

const iconSizes = {
  xs: 'w-4 h-4',
  sm: 'w-5 h-5',
  md: 'w-6 h-6',
  lg: 'w-8 h-8',
  xl: 'w-10 h-10',
} as const;

type IconSize = keyof typeof iconSizes;
export type IconName = keyof typeof icons;

interface IconProps extends Pick<ImageProps, 'style' | 'className'> {
  name: IconName;
  size?: IconSize;
  resizeMode?: ImageResizeMode;
}

const Icon = ({
  name,
  size = 'xs',
  resizeMode = 'contain',
  style: className,
}: IconProps) => {
  return (
    <Image
      source={icons[name]}
      resizeMode={resizeMode}
      style={className}
      className={iconSizes[size]}
    />
  );
};

export default Icon;
