import { PropsWithChildren } from "react";

import { ModalFooter, ModalHeader } from "./components";

import "./Modal.css";

type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
  title: string;
  confirmBtnLabel: string;
  onConfirm: () => void;
}

export const Modal = ({
  children,
  onClose,
  title,
  confirmBtnLabel,
  onConfirm,
}: PropsWithChildren<ModalProps>) => (
  <div
    className="modal"
    onClick={onClose}
  >
    <div className="modal__content" onClick={(e) => e.stopPropagation()}>
      <ModalHeader title={title} onClose={onClose} />
      {children}
      <ModalFooter
        onConfirm={onConfirm}
        confirmBtnLabel={confirmBtnLabel}
        onReject={onClose}
      />
    </div>
  </div>
);
