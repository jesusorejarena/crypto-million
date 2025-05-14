import {clientAxios, clientAxiosImage} from '../Config/axios.ts';
import type {CryptoProps} from '../Types/index.ts';

export const getCryptosAPI = async (): Promise<{
  success: boolean;
  data?: CryptoProps[];
  message?: string;
}> => {
  try {
    const {data} = await clientAxios.get('tickers/', {
      params: {start: 10, limit: 10},
    });

    return {success: true, data: data.data as CryptoProps[]};
  } catch (err) {
    return {success: false, message: 'Error fetching data'};
  }
};

export const getCryptoByIdAPI = async (
  id: number,
): Promise<{
  success: boolean;
  data?: CryptoProps;
  message?: string;
}> => {
  try {
    const {data} = await clientAxios.get('ticker', {
      params: {id},
    });

    return {success: true, data: data[0] as CryptoProps};
  } catch (err) {
    return {success: false, message: 'Error fetching data'};
  }
};

export const getImageCryptoAPI = async (
  coin: string,
): Promise<{
  success: boolean;
  image?: string;
  message?: string;
}> => {
  try {
    const {data} = await clientAxiosImage.get(coin);

    return {success: true, image: data.image.small};
  } catch (err) {
    return {success: false, message: 'Error fetching data'};
  }
};
