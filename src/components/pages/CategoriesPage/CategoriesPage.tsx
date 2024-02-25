import { useState, useMemo, useCallback } from "react";

import {
  deleteCategory,
  selectAllCategories,
  unbindDeletedCategory,
  updateCategory,
} from "../../../redux";
import { List } from "../../List";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { CategoryType } from "../../../types";
import { CategoryModal } from "../../modals";
import { Modal, ModalText } from "../../Modal";

export const CategoriesPage = () => {
  const categories = useAppSelector(selectAllCategories);
  const [editItem, setEditItem] = useState<null | CategoryType>(null);
  const [deleteItem, setDeleteItem] = useState<null | CategoryType>(null);
  const dispatch = useAppDispatch();

  const resultCategories = useMemo(() => categories.map((category) => ({
    ...category,
    onEdit: () => setEditItem(category),
    onDelete: () => setDeleteItem(category),
  })), [categories]);

  const handleEditConfirm = useCallback((data: CategoryType) => {
    dispatch(updateCategory(data));
    setEditItem(null);
  }, [dispatch]);

  const handleDeleteConfirm = useCallback(() => {
    if (deleteItem) {
      dispatch(deleteCategory(deleteItem.id));
      dispatch(unbindDeletedCategory(deleteItem.id));
    };

    setDeleteItem(null);
  }, [dispatch, deleteItem]);

  return (
    <>
      <List collection={resultCategories}/>
      {editItem && (
        <CategoryModal
          item={editItem}
          onConfirm={handleEditConfirm}
          onClose={() => setEditItem(null)}
        />
      )}
      {deleteItem && (
        <Modal
          title="Удаление категории"
          onClose={() => setDeleteItem(null)}
          onConfirm={handleDeleteConfirm}
          confirmBtnLabel="Да"
        >
          <ModalText
            text={`Вы уверены, что хотите удалить категорию "${deleteItem.name}"?`}
          />
        </Modal>
      )}
    </>
  );
};
