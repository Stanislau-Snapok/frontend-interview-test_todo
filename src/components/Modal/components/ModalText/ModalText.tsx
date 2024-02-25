import "./ModalText.css";

type Props = {
  text: string;
}

export const ModalText = ({ text }: Props) => {
  return <p className="modal__content-text">{text}</p>;
};
