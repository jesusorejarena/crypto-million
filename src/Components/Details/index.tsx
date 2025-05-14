import React from 'react';
import {ScrollView, Text, View} from 'react-native';

import type {CryptoProps} from '../../Types';
import {cryptoData} from '../../Utils';
import Percentage from '../Commons/Percentage';

const Details = ({cryptoInfo}: {cryptoInfo: CryptoProps}) => {
  // Render a single detail row
  const renderDetailRow = (key: string, value: any) => {
    const isPercent = key.includes('percent');
    const isRank = key === 'rank';

    return (
      <View
        key={key}
        className="flex flex-row justify-between border-b border-gray-700 py-2">
        <Text className="text-base text-white font-bold capitalize">
          {cryptoData[key as keyof typeof cryptoData]}
        </Text>
        {isPercent ? (
          <Percentage percentage={value} />
        ) : (
          <Text
            className={`text-base ${isRank ? 'text-white' : 'text-gray-400'}`}>
            {isRank
              ? value.toString()
              : typeof value === 'number'
              ? value.toLocaleString(undefined, {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              : value.toString()}
          </Text>
        )}
      </View>
    );
  };

  // Render specific keys (e.g., price, market cap, supply)
  const renderSpecificKeys = (keys: Array<keyof CryptoProps>) => {
    return keys.map((key: keyof CryptoProps) => (
      <View
        key={key}
        className="flex flex-row justify-between border-b border-gray-700 py-2">
        <Text className="text-base text-white font-bold">
          {cryptoData[key as keyof typeof cryptoData]}
        </Text>
        <Text className="text-base text-gray-400">
          {key === 'price_usd' || key === 'market_cap_usd'
            ? `$${(+cryptoInfo[key]).toLocaleString(undefined, {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}`
            : cryptoInfo[key] != null
            ? cryptoInfo[key].toLocaleString()
            : ''}
        </Text>
      </View>
    ));
  };

  // Filter and render general details
  const renderGeneralDetails = () => {
    return Object.entries(cryptoInfo)
      .filter(
        ([key, value]) =>
          key !== 'id' &&
          key !== 'nameid' &&
          key !== 'price_usd' &&
          key !== 'market_cap_usd' &&
          !key.toLowerCase().includes('supply') &&
          (typeof value === 'string' || typeof value === 'number'),
      )
      .map(([key, value]) => renderDetailRow(key, value));
  };

  return (
    <View className="flex flex-1 items-center bg-gray-900/80 rounded-xl w-full my-6 space-y-6 shadow-lg">
      {cryptoInfo && (
        <View className="p-4 w-full flex-1">
          <View className="flex-1">
            <ScrollView className="pb-[20px]">
              {renderGeneralDetails()}
              {renderSpecificKeys(['price_usd', 'market_cap_usd', 'csupply'])}
            </ScrollView>
          </View>
        </View>
      )}
    </View>
  );
};

export default Details;
