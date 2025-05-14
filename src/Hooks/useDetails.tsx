/* eslint-disable curly */
import {useEffect, useState} from 'react';

import {getCryptoByIdAPI, getImageCryptoAPI} from '../Services/crypto';
import type {CryptoProps} from '../Types';

const useDetails = (crypto: CryptoProps) => {
  const [imageUri, setImageUri] = useState<string | null>(null);

  const getImage = async (coin: string) => {
    const {image} = await getImageCryptoAPI(coin.toLowerCase());

    setImageUri(image || null);
  };

  const getCryptoDetails = async (
    id: number,
  ): Promise<{
    data: CryptoProps;
  }> => {
    const {data} = await getCryptoByIdAPI(id);
    if (!data) throw new Error('Crypto data not found');
    return {data};
  };

  useEffect(() => {
    getImage(crypto.nameid);
  }, [crypto]);

  return {
    imageUri,
    setImageUri,
    getImage,
    getCryptoDetails,
  };
};

export default useDetails;
