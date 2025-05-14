import axios from 'axios';
import Config from 'react-native-config';

export const clientAxios = axios.create({
  baseURL: Config.BACKEND_URL,
  timeout: 4000,
});

export const clientAxiosImage = axios.create({
  baseURL: Config.IMAGE_COIN_URL,
  timeout: 4000,
});
