import { ModalBtn } from "../ModalBtn";

import "./ModalFooter.css";

type Props = {
  confirmBtnLabel: string;
  onConfirm: () => void;
  onReject: () => void;
}

export const ModalFooter = ({
  confirmBtnLabel,
  onConfirm,
  onReject,
}: Props) => {
  return (
    <footer className="modal__content-footer">
      <ModalBtn
        type="primary"
        size="large"
        onClick={onConfirm}
        label={confirmBtnLabel}
      />
      <ModalBtn
        onClick={onReject}
        label="Закрыть"
      />
    </footer>
  );
};
