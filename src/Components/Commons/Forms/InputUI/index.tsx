import React from 'react';
import {Text, TextInput, View} from 'react-native';

import type {InputUIProps} from '../../../../Types/components';

const InputUI: React.FC<InputUIProps> = ({
  label = '',
  placeholder = '',
  onChangeText,
  ...props
}) => {
  return (
    <View className="flex flex-col w-full p-2">
      <Text className="text-base font-semibold text-white">{label}</Text>

      <TextInput
        className="bg-[#1F2937] border border-gray-300 rounded-lg px-2 mt-2 h-[45px] text-gray-100 font-semibold"
        placeholder={placeholder}
        onChangeText={onChangeText}
        placeholderTextColor="#A0AEC0"
        {...props}
      />
    </View>
  );
};

export default InputUI;
