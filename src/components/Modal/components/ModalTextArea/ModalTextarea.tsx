import "./ModalTextArea.css";

type ModalTextareaProps = {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  placeholder?: string;
}

export const ModalTextarea = ({
  value,
  setValue,
  label,
  placeholder,
}: ModalTextareaProps) => {
  return (
    <div className="modal__text-area-wrapper">
      <label htmlFor="modaltextarea">{label}</label>
      <textarea
        id="modaltextarea"
        className="modal__text-area"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
