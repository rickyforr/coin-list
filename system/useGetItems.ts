import { useEffect, useState } from "react";
import { Item } from "./types";
import { useQuery } from "@tanstack/react-query";
import { changeFavoriteStatus, convertCoinsResponseToItems } from "./utils";

/**
 * Hook that fetches the currency data and stores the result in state.
 */
export const useGetItems = () => {
  const [items, setItems] = useState<Item[]>([]);

  /**
   * Get the currency data from the CoinMarketCap API.
   */
  const getBtcToUsdPrice = async (): Promise<Item[]> => {
    try {
      const response = await fetch("/api/coins");
      const responseData = await response.json();
      return convertCoinsResponseToItems(responseData.data);
    } catch (error) {
      console.log("error", error);
      return [];
    }
  };

  /**
   * A react-query hook that fetches data from an API and caches the result.
   * Also, it will refetch the data every 60 seconds.
   */
  const coins = useQuery({
    queryKey: ["coins"],
    queryFn: getBtcToUsdPrice,
    refetchInterval: 60000,
  });

  /**
   * Update the favorite status of an item.
   * @param id The id of the item.
   * @param isFavorite The new favorite status of the item.
   */
  const updateItemFavorite = (id: number, isFavorite: boolean) => {
    const newItems = changeFavoriteStatus(isFavorite, items, id);
    setItems(newItems);
  };

  useEffect(() => {
    if (coins.isSuccess) {
      setItems(coins.data);
    }
  }, [coins.isSuccess]);

  return {
    items,
    favorites: items.filter((item) => item.isFavorite),
    onUpdateItemFavorite: updateItemFavorite,
    pending: coins.isRefetching || coins.isFetching,
  };
};
