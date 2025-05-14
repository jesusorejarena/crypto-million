import type {CryptoProps} from '../Types';

export const cryptoData = {
  id: 'ID',
  symbol: 'Symbol',
  name: 'Name',
  nameid: 'Name ID',
  rank: 'Rank',
  price_usd: 'Price (USD)',
  percent_change_24h: 'Percent Change 24h',
  percent_change_1h: 'Percent Change 1h',
  percent_change_7d: 'Percent Change 7d',
  price_btc: 'Price BTC',
  market_cap_usd: 'Market Cap (USD)',
  volume24: 'Volume 24h',
  volume24a: 'Traded Coins',
  csupply: 'Circulating Supply',
  tsupply: 'Total Supply',
  msupply: 'Max Supply',
};

export const getPercentage = (coin: CryptoProps, filter: string) => {
  switch (filter) {
    case 'percent:1h':
      return coin.percent_change_1h;
    case 'percent:7d':
      return coin.percent_change_7d;
    case 'percent:24h':
    default:
      return coin.percent_change_24h;
  }
};
