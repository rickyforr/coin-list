import { useState } from "react";
import { Item } from "./types";

const mockData: Item[] = [
    {id: '1', isFavorite: false, name: 'Item 1', price: 100},
    {id: '2', isFavorite: false, name: 'Item 2', price: 200},
    {id: '3', isFavorite: false, name: 'Item 3', price: 300},
    {id: '4', isFavorite: false, name: 'Item 4', price: 400},
    {id: '5', isFavorite: false, name: 'Item 5', price: 500},
];
export const useGetItems = () => {
  const [items, setItems] = useState<Item[]>(mockData);

  const updateItemFavorite = (id: string, isFavorite: boolean) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          isFavorite,
        };
      }
      return item;
    });
    setItems(newItems);
  }

  return {
    items,
    favorites: items.filter((item) => item.isFavorite),
    onUpdateItemFavorite: updateItemFavorite,
  };
};
