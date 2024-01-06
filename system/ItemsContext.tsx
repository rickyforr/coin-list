import { createContext } from "react";
import { useGetItems } from "./useGetItems";
import { Item } from "./types";

interface IItemsContext {
  items: Item[];
}

export const ItemsContext = createContext<IItemsContext>({} as IItemsContext);

export const ItemsProvider: React.FC<{ children: any }> = ({ children }) => {
  const items = useGetItems();

  return (
    <ItemsContext.Provider value={items}>{children}</ItemsContext.Provider>
  );
};
