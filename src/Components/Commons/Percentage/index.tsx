import React from 'react';
import {Text, View} from 'react-native';
import IconsUI from '../IconsUI';

const Percentage = ({percentage}: {percentage: string}) => {
  return (
    <View className="flex flex-row items-center gap-x-1">
      <IconsUI
        icon={+percentage > 0 ? 'caret-up' : 'caret-down'}
        collection="FontAwesome5"
        size="12"
        color={+percentage > 0 ? '#22c55e' : '#ef4444'}
      />
      <Text
        className={`text-base font-bold ${
          +percentage > 0 ? 'text-green-500' : 'text-red-500'
        }`}>
        {percentage.replace('-', '')}%
      </Text>
    </View>
  );
};

export default Percentage;
