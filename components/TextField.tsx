import { clsx } from 'clsx';
import type { TextInputProps } from 'react-native';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import type { IconName } from './Icon';
import Icon from './Icon';

interface TextFieldProps extends TextInputProps {
  label?: string;
  icon?: IconName;
  secureTextEntry?: boolean;
  labelClassName?: string;
  containerClassName?: string;
  inputClassName?: string;
  iconClassName?: string;
  className?: string;
}

const TextField = ({
  label,
  icon,
  secureTextEntry = false,
  labelClassName,
  containerClassName,
  inputClassName,
  iconClassName,
  style: className,
  ...props
}: TextFieldProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={className}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          {label && (
            <Text
              className={clsx(
                'mb-2 font-JakartaSemiBold text-[15px] text-slate-900',
                labelClassName,
              )}
            >
              {label}
            </Text>
          )}
          <View
            className={clsx(
              'relative flex flex-row items-center justify-start rounded-md border border-slate-300 bg-slate-50 focus:border-primary-500',
              containerClassName,
            )}
          >
            {icon && (
              <Icon
                name={icon}
                resizeMode="contain"
                size="md"
                className={clsx('ml-4', iconClassName)}
              />
            )}
            <TextInput
              secureTextEntry={secureTextEntry}
              className={clsx(
                'flex-1 rounded-md p-4 text-left font-JakartaMedium text-slate-900',
                inputClassName,
              )}
              {...props}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default TextField;
