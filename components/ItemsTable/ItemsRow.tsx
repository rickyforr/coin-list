import { ItemsContext } from "@/system/ItemsContext";
import { Item } from "@/system/types";
import {
  Avatar,
  Flex,
  Td,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext } from "react";
import { ItemDetails } from "../ItemDetails/ItemDetails";
import { FaHeart, FaRegHeart } from "react-icons/fa";

type Props = {
  item: Item;
};

/**
 * Renders a table row displaying item data.
 * Clicking on the row will open a modal with the item details
 * @param props.item The item to render.
 */
export const ItemsRow = ({ item }: Props) => {
  const { onOpen, isOpen, onClose } = useDisclosure();
  const { onUpdateItemFavorite } = useContext(ItemsContext);

  const handleChangeFavorite = () => {
    onUpdateItemFavorite(item.id, !item.isFavorite);
  };

  const renderClickableCell = (cellData: any, icon?: React.ReactNode) => {
    return (
      <Td onClick={onOpen}>
        <Flex alignItems="center">
          {icon}
          {cellData}
        </Flex>
      </Td>
    );
  };

  return (
    <>
      {isOpen && (
        <ItemDetails
          item={item}
          isOpen={isOpen}
          onOpen={onOpen}
          onClose={onClose}
        />
      )}
      <Tr
        _hover={{
          cursor: "pointer",
          backgroundColor: "gray.100",
        }}
      >
        <Td>
          {item.isFavorite ? (
            <FaHeart color="black" onClick={handleChangeFavorite} />
          ) : (
            <FaRegHeart color="black" onClick={handleChangeFavorite} />
          )}
        </Td>
        {renderClickableCell(
          item.name,
          <Avatar size="sm" name={item.name} mr="1rem" />
        )}
        {renderClickableCell(item.price)}
      </Tr>
    </>
  );
};
