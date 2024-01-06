import { Item } from "@/system/types";
import { ItemsRow } from "./ItemsRow";
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";

type Props = {
  items: Item[];
};

/**
 * Renders a table of items.
 * @param props.items The items to render.
 */
export const ItemsTable = ({ items }: Props) => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            <Th>Name</Th>
            <Th>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {items.map((item, index) => (
            <ItemsRow key={`${item.name}-${index}`} item={item} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
