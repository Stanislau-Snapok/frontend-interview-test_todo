import edit from "../../../../assets/icons/edit.svg";
import remove from "../../../../assets/icons/remove.svg";
import { selectAllCategories } from "../../../../redux";
import { useAppSelector } from "../../../../hooks";

import "./ListItem.css";

type Props = {
  name: string;
  description: string;
  category?: string;
  onEdit: () => void;
  onDelete: () => void;
}

export const ListItem = ({
  name,
  description,
  category,
  onEdit,
  onDelete,
}: Props) => {
  const categories = useAppSelector(selectAllCategories);
  const categoryName = category ? categories.find(({ id }) => id === category)?.name : "";

  return (
    <li className="list-item">
      <div className="list-item-col1">
        <div className="list-item-col1-row1">
          <h3 className="list-item-col1-row1__title">{name}</h3>
          {categoryName && (
            <span className="list-item-col1-row1__category">
              {categoryName}
            </span>
          )}
        </div>
        <div className="list-item-col1-row2">{description}</div>
      </div>
      <div className="list-item-col2">
        <button
          className="list-item-col2__btn"
          onClick={onEdit}
        >
          <img src={edit} alt="edit" />
        </button>
        <button
          className="list-item-col2__btn"
          onClick={onDelete}
        >
          <img src={remove} alt="remove" />
        </button>
      </div>
    </li>
  );
};
