import type {NativeStackNavigationProp} from '@react-navigation/native-stack';
import type {RootStackParamList} from '../Routes/Screens/interface';

export interface CryptoProps {
  id: string;
  symbol: string;
  name: string;
  nameid: string;
  rank: number;
  price_usd: string;
  percent_change_24h: string;
  percent_change_1h: string;
  percent_change_7d: string;
  price_btc: string;
  market_cap_usd: string;
  volume24: number;
  volume24a: number;
  csupply: string;
  tsupply: string;
  msupply: string;
  imageUri: string | null;
}

export type NavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'CryptoDetails'
>;
