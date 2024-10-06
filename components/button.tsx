import type React from 'react';
import type { TouchableOpacityProps } from 'react-native';
import { Text, TouchableOpacity } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  text: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'success';
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
}

const getVariantStyle = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'secondary':
      return 'bg-secondary-500 border-transparent';
    case 'danger':
      return 'bg-danger-500 border-transparent';
    case 'success':
      return 'bg-success-500 border-transparent';
    case 'outline':
      return 'bg-transparent border-gray-400';
    default:
      return 'bg-primary-500 border-transparent';
  }
};

const getTextVariantStyle = (variant: ButtonProps['variant']) => {
  switch (variant) {
    case 'primary':
      return 'text-primary-100';
    case 'secondary':
      return 'text-black';
    case 'danger':
      return 'text-red-100';
    case 'success':
      return 'text-green-100';
    default:
      return 'text-gray-600';
  }
};

const Button = ({
  onPress,
  text,
  variant = 'primary',
  IconLeft,
  IconRight,
  className,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`flex w-full flex-row items-center justify-center rounded-full border px-4 py-2 shadow-md shadow-neutral-400/70 ${getVariantStyle(variant)} ${className}`}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text className={`text-base ${getTextVariantStyle(variant)}`}>
        {text}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};
export default Button;
