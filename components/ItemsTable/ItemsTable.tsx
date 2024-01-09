import { Item } from "@/system/types";
import { ItemsRow } from "./ItemsRow";
import {
  Checkbox,
  Flex,
  Spinner,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tooltip,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

type Props = {
  items: Item[];
  favorites: Item[];
  pending: boolean;
};

/**
 * Renders a table of items.
 * @param props.items The items to render.
 * @param props.favorites The items to render.
 * @param props.pending Whether the items are pending.
 */
export const ItemsTable = ({ items, favorites, pending }: Props) => {
  const [favoritesFilterOn, setFavoritesFilterOn] = useState<boolean>(false);

  const handleFilterItems = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!favorites.length) return;
    if (e.currentTarget.checked) setFavoritesFilterOn(true);
    else setFavoritesFilterOn(false);
  };

  const renderRows = (list: Item[]) => {
    return list.map((item, index) => (
      <ItemsRow key={`${item.id}-${index}`} item={item} />
    ));
  };

  const tooltipText = (favorites: any[], favoritesFilterOn: boolean) => {
    if (!favorites.length) return "no favorites";
    if (favoritesFilterOn) return "view all";
    return "view favorites";
  }

  useEffect(() => {
    if (favoritesFilterOn && !favorites.length) {
      setFavoritesFilterOn(false);
    };
  }, [favorites, favoritesFilterOn])

  return (
    <TableContainer mt="2rem">
      {!items.length && !pending && "No items found."}
      {!!items.length && (
        <Table
          size={{ base: "sm", sm: "lg" }}
          width={{ base: "100vw", sm: "80vw" }}
          variant="unstyled"
        >
          <Thead>
            <Tr>
              <Th display="flex" alignItems="center" width="2rem">
                <Tooltip
                  label={tooltipText(favorites, favoritesFilterOn)}
                >
                  <Flex>
                    <Checkbox
                      isChecked={favoritesFilterOn}
                      onChange={handleFilterItems}
                      colorScheme="gray"
                      mr="1rem"
                    />
                  </Flex>
                </Tooltip>
              </Th>
              <Th>Name</Th>
              <Th>Price {pending && <Spinner size="xs" />}</Th>
            </Tr>
          </Thead>
          <Tbody>{renderRows(favoritesFilterOn ? favorites : items)}</Tbody>
        </Table>
      )}
    </TableContainer>
  );
};
