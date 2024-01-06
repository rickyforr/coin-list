import { ItemsContext } from "@/system/ItemsContext";
import { Item } from "@/system/types";
import { Checkbox, Td, Tr } from "@chakra-ui/react";
import { useContext } from "react";

type Props = {
  item: Item;
};

/**
 * Renders a row of an item.
 * @param props.item The item to render.
 */
export const ItemsRow = ({ item }: Props) => {
  const { onUpdateItemFavorite } = useContext(ItemsContext);

  const handleChangeFavorite = () => {
    onUpdateItemFavorite(item.id, !item.isFavorite);
  }

  return (
    <Tr>
      <Td>
        <Checkbox isChecked={item.isFavorite} onChange={handleChangeFavorite}/>
      </Td>
      <Td>{item.name}</Td>
      <Td>{item.price}</Td>
    </Tr>
  );
};
