import type {CryptoProps} from '.';

export type TypePercent = 'percent:1h' | 'percent:24h' | 'percent:7d';

export interface useFilterProps {
  cryptos: CryptoProps[];
  setFilteredCryptos: React.Dispatch<React.SetStateAction<CryptoProps[]>>;
}
