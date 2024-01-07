import { CoinsResponse, Item } from "./types";

export const convertCoinsResponseToItems = (coinsResponse: CoinsResponse) => {
  let newCurrencyItems = [];
  for (let key in coinsResponse.coins) {
    newCurrencyItems.push({
      id: coinsResponse.coins[key][0].id,
      name: coinsResponse.coins[key][0].name,
      price: coinsResponse.coins[key][0].quote.USD.price,
      volume_24h: coinsResponse.coins[key][0].quote.USD.volume_24h,
      total_supply: coinsResponse.coins[key][0].total_supply,
      isFavorite: false,
    });
  }
  return newCurrencyItems;
};

export const changeFavoriteStatus = (
  newStatus: boolean,
  items: Item[],
  id: number
) => {
  const updatedItems = items.map((item) => {
    if (item.id === id) {
      return {
        ...item,
        isFavorite: newStatus,
      };
    }
    return item;
  });
  return updatedItems;
};
