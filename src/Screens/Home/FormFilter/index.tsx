import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import InputUI from '../../../Components/Commons/Forms/InputUI';
import ButtonSelectUI from '../../../Components/Commons/Forms/ButtonSelectUI';
import type {FormFilterProps} from './interface';
import type {TypePercent} from '../../../Types/hooks';

const FormFilter = ({
  setFilter,
  setSelectFilterView,
  selectedPrice,
  setSelectedPrice,
  selectedPercent,
  setSelectedPercent,
  nameInput,
  setNameInput,
  symbolInput,
  setSymbolInput,
}: FormFilterProps) => {
  return (
    <View className="p-4 w-full flex-1">
      <Text className="text-2xl font-bold text-white mb-4">Select Filters</Text>
      <View className="space-y-6">
        {/* Input for Name */}
        <InputUI
          label="Search by Name"
          placeholder="Enter name"
          value={nameInput}
          onChangeText={text => {
            setNameInput(text);
            setFilter(prev =>
              text.trim() === ''
                ? prev.filter(f => !f.startsWith('name:'))
                : [...prev.filter(f => !f.startsWith('name:')), `name:${text}`],
            );
          }}
        />
        {/* Input for Symbol */}
        <InputUI
          label="Search by Symbol"
          placeholder="Enter symbol"
          value={symbolInput}
          onChangeText={text => {
            setSymbolInput(text);
            setFilter(prev =>
              text.trim() === ''
                ? prev.filter(f => !f.startsWith('symbol:'))
                : [
                    ...prev.filter(f => !f.startsWith('symbol:')),
                    `symbol:${text}`,
                  ],
            );
          }}
        />
        {/* Price Filter */}
        <View className="p-2">
          <Text className="text-base font-semibold text-white">Price</Text>
          <View className="flex flex-row justify-between mt-2 gap-x-5">
            <ButtonSelectUI
              label="Lowest"
              isSelected={selectedPrice === 'price:asc'}
              onPress={() => {
                setSelectedPrice('price:asc');
                setFilter(prev => [
                  ...prev.filter(f => !f.startsWith('price:')),
                  'price:asc',
                ]);
              }}
            />
            <ButtonSelectUI
              label="Highest"
              isSelected={selectedPrice === 'price:desc'}
              onPress={() => {
                setSelectedPrice('price:desc');
                setFilter(prev => [
                  ...prev.filter(f => !f.startsWith('price:')),
                  'price:desc',
                ]);
              }}
            />
          </View>
        </View>
        {/* Percent Change Filter */}
        <View className="p-2">
          <Text className="text-base font-semibold text-white">
            Percent Change
          </Text>
          <View className="flex flex-row justify-between mt-2 gap-x-5">
            {['1h', '24h', '7d'].map((item, index) => (
              <ButtonSelectUI
                key={index}
                label={item}
                isSelected={selectedPercent === `percent:${item}`}
                onPress={() => {
                  setSelectedPercent(`percent:${item}` as TypePercent);
                  setFilter(prev => [
                    ...prev.filter(f => !f.startsWith('percent:')),
                    `percent:${item}`,
                  ]);
                }}
              />
            ))}
          </View>
        </View>
      </View>
      {/* Apply Filters Button */}
      <View className="flex-1 justify-end p-2 mt-3">
        <TouchableOpacity
          className="bg-blue-500 rounded-lg p-2 justify-center items-center h-[45px]"
          onPress={() => setSelectFilterView(false)}>
          <Text className="text-center text-white font-bold">
            Apply Filters
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FormFilter;
