import type {TextInputProps, TouchableOpacityProps} from 'react-native';

export interface IconsUIProps {
  collection: string;
  icon: string;
  color?: string;
  size?: any;
}

export interface InputUIProps extends TextInputProps {
  label: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
}

export interface ButtonSelectUIProps extends TouchableOpacityProps {
  label: string;
  isSelected: boolean;
  onPress: () => void;
}
