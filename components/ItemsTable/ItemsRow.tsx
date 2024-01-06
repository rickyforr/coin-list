import { Item } from "@/system/types";
import { Td, Tr } from "@chakra-ui/react";

type Props = {
  item: Item;
};

/**
 * Renders a row of an item.
 * @param props.item The item to render.
 */
export const ItemsRow = ({ item }: Props) => {
  return (
    <Tr>
      <Td>{item.name}</Td>
      <Td>{item.price}</Td>
    </Tr>
  );
};
