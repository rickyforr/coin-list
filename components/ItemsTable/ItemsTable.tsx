import { Item } from "@/system/types";
import { ItemsRow } from "./ItemsRow";

type Props = {
  items: Item[];
};

/**
 * Renders a table of items.
 * @param props.items The items to render.
 */
export const ItemsTable = ({ items }: Props) => {
  return (
    <div>
      {items.map((item, index) => (
        <ItemsRow key={`${item.name}-${index}`} item={item} />
      ))}
    </div>
  );
};
