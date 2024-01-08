import { CoinsResponse, Item } from "./types";

/**
 * Function that converts the coins api response to a list of items.
 * @param coinsResponse
 */
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

/**
 * Function that updates the favorite status of an item.
 * @param newStatus 
 * @param items 
 * @param id 
 */
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

/**
 * Returns true if the username is valid.
 * @param username
 */
export const isUsernameValid = (username: string) => {
    if (username.length < 50 && /^[a-zA-Z0-9]+$/.test(username)) {
        return true;
    }
    return false;
}