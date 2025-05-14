import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

import IconsUI from '../IconsUI';

const FilterBadge = (props: any) => {
  const {item, onPress} = props;

  return (
    <TouchableOpacity
      className="flex flex-row gap-x-2 h-[30px] px-3 bg-gray-400 rounded-3xl mr-3 items-center justify-center"
      onPress={onPress}>
      <Text className="font-bold text-white">{item}</Text>
      <IconsUI
        collection="FontAwesome"
        icon="times"
        color="#4d4d4d"
        size={12}
      />
    </TouchableOpacity>
  );
};

export default FilterBadge;
