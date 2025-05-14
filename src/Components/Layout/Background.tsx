import React, {type ReactNode} from 'react';
import {View, Image} from 'react-native';
import {images} from '../../Constants';

const Background = ({children}: {children: ReactNode}) => {
  return (
    <View className="flex-1 pt-10 bg-[#01288C]">
      <Image
        source={images.Background}
        alt="Background"
        className="flex-1 w-full absolute"
        blurRadius={15}
      />

      {children}
    </View>
  );
};

export default Background;
