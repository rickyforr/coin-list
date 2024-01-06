import { Item } from "@/system/types";
import { Flex } from "@chakra-ui/react";

type Props = {
  item: Item;
};

/**
 * Renders a row of an item.
 * @param props.item The item to render.
 */
export const ItemsRow = ({ item }: Props) => {
  return (
    <div>
      <Flex>
        <div>{item.name}</div>
        <div>{item.price}</div>
      </Flex>
    </div>
  );
};
