import close from "../../../../assets/icons/close.svg";

import "./ModalHeader.css";

type Props = {
  title: string;
  onClose: () => void;
}

export const ModalHeader = ({
  title,
  onClose,
}: Props) => {
  return (
    <header className="modal__content-header">
      <h4 className="modal__content-title">{title}</h4>
      <button
        className="modal__content-header__btn"
        onClick={onClose}
      >
        <img src={close} alt="close" />
      </button>
    </header>
  );
};
