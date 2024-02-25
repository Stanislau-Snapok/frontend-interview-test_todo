import { useCallback, useState } from "react";

import { Modal, ModalInput, ModalTextarea } from "../../Modal";
import { CategoryType } from "../../../types";

type Props = {
  item?: CategoryType;
  onConfirm: (item: CategoryType) => void;
  onClose: () => void;
}

export const CategoryModal = ({
  item,
  onConfirm,
  onClose,
}: Props) => {
  const isEditMode = !!item;
  const [name, setName] = useState(item?.name || "");
  const [description, setDescription] = useState(item?.description || "");

  const handleConfirm = useCallback(() => {
    name && onConfirm({
      id: "",
      ...(item || {}),
      name,
      description,
    });
  }, [name, description, onConfirm, item]);

  return (
    <Modal
      title={isEditMode ? "Редактирование категории" : "Создание категории"}
      onClose={onClose}
      confirmBtnLabel={isEditMode ? "Сохранить" : "Создать"}
      onConfirm={handleConfirm}
    >
      <ModalInput
        value={name}
        setValue={setName}
        label="Имя"
        placeholder="Введите имя категории"
      />
      <ModalTextarea
        value={description}
        setValue={setDescription}
        label="Описание"
        placeholder="Введите описание категории"
      />
    </Modal>
  );
};
