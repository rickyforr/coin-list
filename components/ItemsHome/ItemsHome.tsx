import { Flex } from "@chakra-ui/react";
import { ItemsTable } from "../ItemsTable/ItemsTable";
import { ItemsContext } from "@/system/ItemsContext";
import { useContext } from "react";

/**
 * Renders a page for displaying all users items.
 */
export const ItemsHome = () => {
  const { items } = useContext(ItemsContext);
  
  return (
    <Flex>
      <ItemsTable items={items} />
    </Flex>
  );
};
