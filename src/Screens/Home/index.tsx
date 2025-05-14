import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Background from '../../Components/Layout/Background';
import Card from '../../Components/Card';
import IconsUI from '../../Components/Commons/IconsUI';
import FilterBadge from '../../Components/Commons/FilterBadge';
import FormFilter from './FormFilter';
import useFilter from '../../Hooks/useFilter';
import useGetData from '../../Hooks/useGetData';

const Home = () => {
  const {loading, cryptos, getCryptos} = useGetData();
  const [filteredCryptos, setFilteredCryptos] = useState(cryptos);

  const {
    filter,
    setFilter,
    selectFilterView,
    setSelectFilterView,
    selectedPrice,
    setSelectedPrice,
    selectedPercent,
    setSelectedPercent,
    nameInput,
    setNameInput,
    symbolInput,
    setSymbolInput,
    handleRemoveFilter,
  } = useFilter({cryptos, setFilteredCryptos});

  useEffect(() => {
    setFilteredCryptos(cryptos);
  }, [cryptos]);

  return (
    <View className="h-full">
      <Background>
        <View className="p-10 flex-1">
          <View className="flex flex-row items-center justify-between">
            <View className="flex flex-row items-center gap-x-3">
              <IconsUI
                icon="account-circle"
                collection="MaterialIcons"
                size="40"
                color="#fff"
              />
              <View>
                <Text className="text-white text-lg font-bold">
                  Welcome Back!
                </Text>
                <Text className="text-gray-300 text-sm">Your Profile</Text>
              </View>
            </View>
          </View>

          <View className="flex flex-row items-center bg-gray-900/80 rounded-xl w-full shadow-lg mt-6 p-3">
            <View className="max-w-[85%]">
              <FlatList
                data={filter}
                className="w-full"
                keyExtractor={item => item}
                renderItem={({item, index}) => (
                  <FilterBadge
                    key={index}
                    item={item}
                    onPress={() => handleRemoveFilter(item)}
                  />
                )}
                horizontal
                showsHorizontalScrollIndicator={false}
              />
            </View>

            <TouchableOpacity
              className="flex flex-1 flex-row justify-end items-center gap-x-1 h-[30px]"
              onPress={() => setSelectFilterView(!selectFilterView)}>
              {filter && filter.length === 0 && (
                <Text className="text-lg text-white font-semibold text-center">
                  {selectFilterView ? 'Back' : 'Filters'}
                </Text>
              )}
              <IconsUI
                icon={selectFilterView ? 'chevron-right' : 'filter'}
                collection="MaterialCommunityIcons"
                size="18"
                color="#ffffff"
              />
            </TouchableOpacity>
          </View>

          <View className="flex flex-1 items-center bg-gray-900/80 rounded-xl w-full my-6 space-y-6 shadow-lg">
            {selectFilterView ? (
              <FormFilter
                setFilter={setFilter}
                setSelectFilterView={setSelectFilterView}
                selectedPrice={selectedPrice}
                setSelectedPrice={setSelectedPrice}
                selectedPercent={selectedPercent}
                setSelectedPercent={setSelectedPercent}
                nameInput={nameInput}
                setNameInput={setNameInput}
                symbolInput={symbolInput}
                setSymbolInput={setSymbolInput}
              />
            ) : (
              <FlatList
                data={filteredCryptos}
                className="px-2 my-2"
                keyExtractor={item => item.id}
                renderItem={({item, index}) => (
                  <Card key={index} coin={item} filter={selectedPercent} />
                )}
                refreshing={loading}
                onRefresh={() => getCryptos()}
                showsVerticalScrollIndicator={false}
                progressViewOffset={50}
                indicatorStyle="white"
                ListEmptyComponent={
                  <View className="justify-center items-center h-80">
                    <Text className="text-lg text-white text-center">
                      No data available
                    </Text>
                  </View>
                }
              />
            )}
          </View>
        </View>
      </Background>
    </View>
  );
};

export default Home;
