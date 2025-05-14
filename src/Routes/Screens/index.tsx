import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

// Screens
import Home from '../../Screens/Home';
import CryptoDetails from '../../Screens/CryptoDetails';
import type {RootStackParamList} from './interface';

const Screens = (): React.ReactElement => {
  const Stack = createStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{headerShown: false}}
        initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="CryptoDetails" component={CryptoDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Screens;
