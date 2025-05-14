/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useNavigation, useRoute} from '@react-navigation/native';
import FastImage from '@d11/react-native-fast-image';

import Background from '../../Components/Layout/Background';
import IconsUI from '../../Components/Commons/IconsUI';
import useDetails from '../../Hooks/useDetails';
import type {CryptoProps} from '../../Types';
import Details from '../../Components/Details';
import Percentage from '../../Components/Commons/Percentage';
import {images} from '../../Constants';

const CryptoDetails = () => {
  const navigation = useNavigation();
  const route = useRoute<{
    key: string;
    name: string;
    params: {crypto: CryptoProps};
  }>();
  const {params}: any = route;

  const [cryptoInfo, setCryptoInfo] = useState<{data: CryptoProps} | null>(
    null,
  );

  const {imageUri, getImage, getCryptoDetails} = useDetails(
    params.crypto,
  );

  const getDetails = async () => {
    const details = await getCryptoDetails(params.crypto.id);

    setCryptoInfo(details);
  };

  useEffect(() => {
    getDetails();
    getImage(params.crypto.nameid);

    const interval = setInterval(() => {
      getDetails();
    }, 5000);

    return () => clearInterval(interval);
  }, [params.crypto]);

  return (
    <View className="h-full">
      <Background>
        <View className="p-10 flex-1">
          <View className="flex flex-row items-center justify-between">
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              className="flex flex-row items-center gap-x-3">
              <IconsUI
                icon="chevron-left"
                collection="MaterialIcons"
                size="30"
                color="#fff"
              />
              <Text className="text-white text-lg font-bold">Back</Text>
            </TouchableOpacity>
          </View>

          <View className="flex flex-row items-center bg-gray-900/80 rounded-xl w-full shadow-lg mt-6 p-3">
            <View className="flex flex-row items-center justify-between p-2 w-full">
              <View className="flex flex-row items-center">
                <View
                  className={`w-[40px] h-[40px] flex justify-center items-center ${
                    !imageUri && 'bg-gray-500 rounded-md'
                  }`}>
                  {imageUri && (
                    <FastImage
                      defaultSource={images.Coin}
                      style={{width: 35, height: 35}}
                      source={{
                        uri: imageUri,
                        headers: {Authorization: 'someAuthToken'},
                        priority: FastImage.priority.high,
                      }}
                      resizeMode={FastImage.resizeMode.contain}
                    />
                  )}
                </View>

                <View className="flex flex-col ml-3 w-[42%]">
                  <Text className="text-base font-bold text-white">
                    {cryptoInfo?.data.name}
                  </Text>
                </View>
              </View>
              <View className="flex flex-col ml-3 flex-1 justify-end items-end">
                {cryptoInfo?.data.price_usd && (
                  <Text className="text-xl font-bold text-gray-200">
                    $
                    {(+cryptoInfo?.data.price_usd).toLocaleString(undefined, {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}
                  </Text>
                )}

                {cryptoInfo?.data.percent_change_24h && (
                  <Percentage
                    percentage={cryptoInfo?.data.percent_change_24h}
                  />
                )}
              </View>
            </View>
          </View>

          {cryptoInfo?.data && <Details cryptoInfo={cryptoInfo?.data} />}
        </View>
      </Background>
    </View>
  );
};

export default CryptoDetails;
