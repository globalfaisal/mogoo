import clsx from 'clsx';
import type React from 'react';
import type { TouchableOpacityProps } from 'react-native';
import { Text, TouchableOpacity } from 'react-native';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: 'primary' | 'secondary' | 'danger' | 'outline' | 'success';
  IconLeft?: React.ComponentType<any>;
  IconRight?: React.ComponentType<any>;
  className?: string;
}

const Button = ({
  onPress,
  title,
  variant = 'primary',
  IconLeft,
  IconRight,
  style: className,
  ...props
}: ButtonProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={className}
      className={clsx(
        'flex w-full flex-row items-center justify-center rounded-md border border-transparent px-4 py-2 shadow-md shadow-neutral-400/70',
        {
          'bg-primary-500': variant === 'primary',
          'bg-secondary-900': variant === 'secondary',
          'bg-danger-500': variant === 'danger',
          'bg-success-500': variant === 'success',
          'bg-transparent border-primary-500': variant === 'outline',
        },
      )}
      {...props}
    >
      {IconLeft && <IconLeft />}
      <Text
        className={clsx('text-lg font-medium text-white', {
          'text-primary-500': variant === 'outline',
        })}
      >
        {title}
      </Text>
      {IconRight && <IconRight />}
    </TouchableOpacity>
  );
};

export default Button;
