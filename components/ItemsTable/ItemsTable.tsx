import { Item } from "@/system/types";
import { ItemsRow } from "./ItemsRow";
import {
  Checkbox,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useState } from "react";

type Props = {
  items: Item[];
  favorites: Item[];
};

/**
 * Renders a table of items.
 * @param props.items The items to render.
 */
export const ItemsTable = ({ items, favorites }: Props) => {
  const [favoritesFilterOn, setFavoritesFilterOn] = useState<boolean>(false);

  const handleFilterItems = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.checked) setFavoritesFilterOn(true);
    else setFavoritesFilterOn(false);
  };

  const renderRows = (list: Item[]) => {
    return list.map((item, index) => (
      <ItemsRow key={`${item.id}-${index}`} item={item} />
    ));
  }

  return (
    <TableContainer>
      <Table size="lg">
        <Thead>
          <Tr>
            <Th>
              <Checkbox onChange={handleFilterItems} />
            </Th>
            <Th>Name</Th>
            <Th>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {renderRows(favoritesFilterOn ? favorites : items)}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
