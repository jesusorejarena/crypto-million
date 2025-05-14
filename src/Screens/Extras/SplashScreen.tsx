/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import DeviceInfo from 'react-native-device-info';
import LottieView from 'lottie-react-native';

import {images} from '../../Constants';

const SplashScreen = () => {
  return (
    <View className="flex-1">
      <ImageBackground
        source={images.Background}
        alt="Background"
        className="h-full items-center justify-center">
        <View className="flex flex-col items-center justify-center">
          <Text className="font-poppins absolute w-full text-center text-2xl text-white mb-24">
            Welcome to <Text className="font-bold text-3xl">CryptoMillion</Text>
          </Text>

          <View className="top-[110px]">
            <LottieView
              source={require('../../Assets/Animation/animation.json')}
              autoPlay
              loop
              style={{width: 250, height: 250}}
            />
          </View>
        </View>

        <View className="flex absolute bottom-4 justify-center items-center p-5 w-full">
          <Text className="text-base font-bold text-white">
            v{DeviceInfo.getVersion()}
          </Text>
        </View>
      </ImageBackground>
    </View>
  );
};

export default SplashScreen;
