import React, { KeyboardEvent } from "react";
import styles from "../styles/inputField.module.scss";

interface Props {
  label: string;
  placeholder: string;
  onChange: (params: {
    e: KeyboardEvent<HTMLInputElement>;
    setState: React.Dispatch<React.SetStateAction<string[]>>;
  }) => void;
  setState: React.Dispatch<React.SetStateAction<string[]>>;
}

const InputTag = ({ label, placeholder, onChange, setState }: Props) => {
  return (
    <div className={styles["inputField"]}>
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        id="inputfield"
        placeholder={placeholder}
        onKeyDown={(e) => onChange({ e, setState })}
      />
    </div>
  );
};

export default InputTag;
