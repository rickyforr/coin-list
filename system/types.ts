export type Item = {
  id: number;
  isFavorite: boolean;
  name: string;
  price: number;
  volume_24h: number;
  total_supply: number;
};

export type CoinsResponse = {
  coins: {
    [currencyName: string]: [{
      id: number;
      name: string;
      symbol: string;
      slug: string;
      num_market_pairs: number;
      date_added: Date;
      tags: [];
      max_supply: number;
      circulating_supply: number;
      total_supply: number;
      quote: {
        USD: {
          price: number;
          volume_24h: number;
        };
      };
    }];
  };
};
