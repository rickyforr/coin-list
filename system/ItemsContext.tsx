import { createContext } from "react";
import { useGetItems } from "./useGetItems";
import { Item } from "./types";

interface IItemsContext {
  items: Item[];
  favorites: Item[];
  onUpdateItemFavorite: (id: number, isFavorite: boolean) => void;
  pending: boolean;
}

export const ItemsContext = createContext<IItemsContext>({} as IItemsContext);

/**
 * A provider for the items context, 
 * giving any child components access to the items and associated methods.
 */
export const ItemsProvider: React.FC<{ children: any }> = ({ children }) => {
  const items = useGetItems();

  return (
    <ItemsContext.Provider value={items}>{children}</ItemsContext.Provider>
  );
};
