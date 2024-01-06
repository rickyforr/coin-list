import { ItemsContext } from "@/system/ItemsContext";
import { Item } from "@/system/types";
import { Checkbox, Td, Tr, useDisclosure } from "@chakra-ui/react";
import { useContext, useState } from "react";
import { ItemDetails } from "../ItemDetails/ItemDetails";

type Props = {
  item: Item;
};

/**
 * Renders a row of an item.
 * @param props.item The item to render.
 */
export const ItemsRow = ({ item }: Props) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { onUpdateItemFavorite } = useContext(ItemsContext);

  const handleChangeFavorite = () => {
    onUpdateItemFavorite(item.id, !item.isFavorite);
  };

  const renderClickableCell = (cellData: any) => {
    return <Td onClick={onOpen}>{cellData}</Td>;
  };

  return (
    <Tr
      _hover={{
        cursor: "pointer",
        backgroundColor: "gray.100",
      }}
    >
      {isOpen && (
        <ItemDetails
          item={item}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      )}
      <Td>
        <Checkbox
          isChecked={item.isFavorite}
          onChange={handleChangeFavorite}
          zIndex={100}
        />
      </Td>
      {renderClickableCell(item.name)}
      {renderClickableCell(item.price)}
    </Tr>
  );
};
