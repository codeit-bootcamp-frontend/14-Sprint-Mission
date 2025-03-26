import React, { ChangeEvent } from "react";
import styles from "../styles/inputField.module.scss";

interface Props<T> {
  label: string;
  placeholder: string;
  onChange: (params: {
    e: ChangeEvent<HTMLInputElement>;
    setState: React.Dispatch<React.SetStateAction<T>>;
  }) => void;
  setState: React.Dispatch<React.SetStateAction<T>>;
}

const TextInput = <T,>({ label, placeholder, onChange, setState }: Props<T>) => {
  return (
    <div className={styles["inputField"]}>
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        id="inputfield"
        placeholder={placeholder}
        onChange={(e) => onChange({ e, setState })}
      />
    </div>
  );
};

export default TextInput;
