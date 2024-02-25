import important from "../../../../assets/icons/important.svg";

import "./ModalInput.css";

type Props= {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  size?: string;
  label: string;
  placeholder?: string;
}

export const ModalInput = ({
  value,
  setValue,
  size,
  label,
  placeholder,
}: Props) => {
  return (
    <div
      className={
        size === "large" ? "modal__input-wrapper large" : "modal__input-wrapper"
      }
    >
      <input
        id="modalinput"
        className="modal__input"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <img src={important} alt="important" className="modal__input-icon" />
      <label htmlFor="modalinput">{label}</label>
    </div>
  );
};
