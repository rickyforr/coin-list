import { Item } from "./types";

export const useGetItems = (): { items: Item[] } => {
  return {
    items: [
      { name: "item1", price: 100 },
      { name: "item2", price: 200 },
      { name: "item3", price: 300 },
      { name: "item4", price: 400 },
      { name: "item5", price: 500 },
    ],
  };
};
