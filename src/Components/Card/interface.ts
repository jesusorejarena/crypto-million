import type {CryptoProps} from '../../Types';

export interface CardProps {
  coin: CryptoProps;
  filter: 'percent:1h' | 'percent:24h' | 'percent:7d';
}
