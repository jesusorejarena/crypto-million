import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import SplashScreen from '../Screens/Extras/SplashScreen';
import Screens from './Screens';

export default function Initial() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const verify = async () => setTimeout(() => setIsLoading(false), 1000);

    verify();
  }, []);

  return (
    <SafeAreaProvider>
      {isLoading ? <SplashScreen /> : <Screens />}
    </SafeAreaProvider>
  );
}
