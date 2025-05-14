/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import type {ButtonSelectUIProps} from '../../../../Types/components';

const ButtonSelectUI: React.FC<ButtonSelectUIProps> = ({
  label,
  isSelected,
  onPress,
  ...props
}) => {
  return (
    <TouchableOpacity
      className="border border-gray-300 rounded-lg p-2 flex-1 justify-center items-center h-[45px]"
      style={{
        backgroundColor: isSelected ? '#3B82F6' : '#1F2937',
      }}
      onPress={onPress}
      {...props}>
      <Text className="text-center text-gray-100 font-semibold">{label}</Text>
    </TouchableOpacity>
  );
};

export default ButtonSelectUI;
