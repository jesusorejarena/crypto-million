/* eslint-disable react-native/no-inline-styles */

import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import FastImage from '@d11/react-native-fast-image';

import type {CardProps} from './interface';
import useDetails from '../../Hooks/useDetails';
import Percentage from '../Commons/Percentage';
import type {NavigationProp} from '../../Types';
import {getPercentage} from '../../Utils';

const Card = (props: CardProps) => {
  const {coin, filter} = props;

  const navigation = useNavigation<NavigationProp>();

  const {imageUri} = useDetails(coin);

  const viewDetails = () =>
    navigation.navigate('CryptoDetails', {crypto: coin});

  return (
    <TouchableOpacity onPress={viewDetails}>
      <View className="flex flex-row items-center justify-between p-2 w-full">
        <View className="flex flex-row items-center">
          <View
            className={`w-[50px] h-[50px] flex justify-center items-center ${
              !imageUri && 'bg-gray-500 rounded-md'
            }`}>
            {imageUri && (
              <FastImage
                defaultSource={require('../../Assets/Images/Coin.png')}
                style={{width: 40, height: 40}}
                source={{
                  uri: imageUri,
                  headers: {Authorization: 'someAuthToken'},
                  priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.contain}
              />
            )}
          </View>

          <View className="flex flex-col ml-3 w-[40%]">
            <Text className="text-base font-bold text-white">{coin.name}</Text>
          </View>
        </View>
        <View className="flex flex-col ml-3 flex-1 justify-end items-end">
          <Text className="text-sm font-bold text-gray-500">
            ${parseFloat(coin.price_usd).toLocaleString()}
          </Text>
          <Percentage percentage={getPercentage(coin, filter)} />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
