import {useEffect, useState} from 'react';
import type {CryptoProps} from '../Types';
import {getCryptosAPI} from '../Services/crypto';

const useGetData = () => {
  const [loading, setLoading] = useState(false);
  const [cryptos, setCryptos] = useState<CryptoProps[]>([]);

  const getCryptos = async () => {
    setLoading(true);
    try {
      const response = await getCryptosAPI();

      setCryptos(response.data || []);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCryptos();
  }, []);

  return {
    loading,
    setLoading,
    cryptos,
    setCryptos,
    getCryptos,
  };
};

export default useGetData;
