import { useEffect, useState } from "react";
import { CoinsResponse, Item } from "./types";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { changeFavoriteStatus, convertCoinsResponseToItems } from "./utils";

export const useGetItems = () => {
  const [items, setItems] = useState<Item[]>([]);

  const getBtcToUsdPrice = async (): Promise<Item[]> => {
    try {
      const response = await axios.get<CoinsResponse>("/api/coins");
      return convertCoinsResponseToItems(response.data);
    } catch (error) {
      console.log("error", error);
      return [];
    }
  };

  const info = useQuery({
    queryKey: ["coins"],
    queryFn: getBtcToUsdPrice,
    refetchInterval: 100000,
  });

  const updateItemFavorite = (id: number, isFavorite: boolean) => {
    const newItems = changeFavoriteStatus(isFavorite, items, id);
    setItems(newItems);
  };

  useEffect(() => {
    if (info.isSuccess) {
      setItems(info.data);
    }
  }, [info.isSuccess]);

  return {
    items,
    favorites: items.filter((item) => item.isFavorite),
    onUpdateItemFavorite: updateItemFavorite,
  };
};
