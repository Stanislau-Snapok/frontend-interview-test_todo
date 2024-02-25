import { ListItem } from "./components/ListItem";
import { ListItemType } from "./types";

type Props = {
  collection: ListItemType[]
}

export const List = ({
  collection,
}: Props) => (
  <ul>
    {collection.map(({ id, ...rest }) => (
      <ListItem key={id} {...rest} />
    ))}
  </ul>
);
