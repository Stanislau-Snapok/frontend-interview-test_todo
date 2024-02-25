import { useState, useMemo, useCallback } from "react";

import { deleteTask, selectAllTasks, updateTask } from "../../../redux";
import { List } from "../../List";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { TaskType } from "../../../types";
import { TaskModal } from "../../modals";
import { Modal, ModalText } from "../../Modal";

export const TasksPage = () => {
  const tasks = useAppSelector(selectAllTasks);
  const [editItem, setEditItem] = useState<null | TaskType>(null);
  const [deleteItem, setDeleteItem] = useState<null | TaskType>(null);
  const dispatch = useAppDispatch();

  const resultTasks = useMemo(() => tasks.map((task) => ({
    ...task,
    onEdit: () => setEditItem(task),
    onDelete: () => setDeleteItem(task),
  })), [tasks]);

  const handleEditConfirm = useCallback((data: TaskType) => {
    dispatch(updateTask(data));
    setEditItem(null);
  }, [dispatch]);

  const handleDeleteConfirm = useCallback(() => {
    deleteItem && dispatch(deleteTask(deleteItem.id));
    setDeleteItem(null);
  }, [dispatch, deleteItem]);

  return (
    <>
      <List collection={resultTasks}/>
      {editItem && (
        <TaskModal
          item={editItem}
          onConfirm={handleEditConfirm}
          onClose={() => setEditItem(null)}
        />
      )}
      {deleteItem && (
        <Modal
          title="Удаление задачи"
          onClose={() => setDeleteItem(null)}
          onConfirm={handleDeleteConfirm}
          confirmBtnLabel="Да"
        >
          <ModalText
            text={`Вы уверены, что хотите удалить задачу "${deleteItem.name}"?`}
          />
        </Modal>
      )}
    </>
  );
};
