import "./ModalBtn.css";

type ModalBtnProps = {
  type?: string;
  label: React.ReactNode;
  size?: string;
  onClick: () => void;
}

export const ModalBtn: React.FC<ModalBtnProps> = ({
  type,
  label,
  size,
  onClick,
}) => {
  const btnClass = ["modal_btn"];

  if (type === "primary") {
    btnClass.push("primary");
  };

  if (size === "large") {
    btnClass.push("large");
  }

  return (
    <button className={btnClass.join(" ")} onClick={onClick}>
      {label}
    </button>
  );
};
