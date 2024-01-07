import { Flex } from "@chakra-ui/react";
import { ItemsTable } from "../ItemsTable/ItemsTable";
import { ItemsContext } from "@/system/ItemsContext";
import { useContext } from "react";

/**
 * Renders a page for displaying all users items.
 */
export const ItemsHome = () => {
  const { items, favorites } = useContext(ItemsContext);

  return (
    <Flex justifyContent="center" alignItems="center">
      <ItemsTable items={items} favorites={favorites}/>
    </Flex>
  );
};
