import { useCallback, useState } from "react";

import { Modal, ModalDropdown, ModalInput, ModalTextarea } from "../../Modal";
import { TaskType } from "../../../types";
import { useAppSelector } from "../../../hooks";
import { selectAllCategories } from "../../../redux";

import "./TaskModal.css";

type Props = {
  item?: TaskType;
  onConfirm: (item: TaskType) => void;
  onClose: () => void;
}

export const TaskModal = ({
  item,
  onConfirm,
  onClose,
}: Props) => {
  const isEditMode = !!item;
  const [name, setName] = useState(item?.name || "");
  const [category, setCategory] = useState(item?.category || "");
  const [description, setDescription] = useState(item?.description || "");
  const options = useAppSelector(selectAllCategories);

  const handleConfirm = useCallback(() => {
    name && onConfirm({
      id: "",
      ...(item || {}),
      name,
      category,
      description,
    });
  }, [name, category, description, onConfirm, item]);

  return (
    <Modal
      title={isEditMode ? "Редактирование задачи" : "Создание задачи"}
      onClose={onClose}
      confirmBtnLabel={isEditMode ? "Сохранить" : "Создать"}
      onConfirm={handleConfirm}
    >
      <div className="data-row">
        <ModalInput
          value={name}
          setValue={setName}
          label="Имя"
          placeholder="Введите имя задачи"
        />
        <ModalDropdown
          options={options}
          value={category}
          setValue={setCategory}
        />
      </div>
      <ModalTextarea
        value={description}
        setValue={setDescription}
        label="Описание"
        placeholder="Введите описание задачи"
      />
    </Modal>
  );
};
