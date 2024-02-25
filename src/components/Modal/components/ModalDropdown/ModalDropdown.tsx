import { useState } from "react";

import down from "../../../../assets/icons/down.svg";

import "./ModalDropdown.css";

type ModalDropdownProps = {
  value: string | undefined;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  options: {id: string, name: string}[],
}

export const ModalDropdown: React.FC<ModalDropdownProps> = ({
  value,
  setValue,
  options,
}) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="dropdown" onClick={() => setIsActive(!isActive)}>
      <span className="dropdown-label">Категория</span>
      <div className={value ? "dropdown-btn" : "dropdown-btn placeholder"}>
        {options.find((option) => option.id === value)?.name ||
          "Выберите категорию"}
        <img src={down} alt="open dropdown" />
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              className="dropdown-item"
              onClick={() => {
                setValue(option.id);
                setIsActive(false);
              }}
              key={option.id}
            >
              {option.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
