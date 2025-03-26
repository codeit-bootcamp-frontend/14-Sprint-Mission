import React, { ChangeEvent } from "react";
import styles from "../styles/inputField.module.scss";

interface Props {
  label: string;
  placeholder: string;
  onChange: (params: {
    e: ChangeEvent<HTMLTextAreaElement>;
    setState: React.Dispatch<React.SetStateAction<string>>;
  }) => void;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const TextArea = ({ label, placeholder, onChange, setState }: Props) => {
  return (
    <div className={styles["inputField"]}>
      <label htmlFor={label}>{label}</label>
      <textarea
        placeholder={placeholder}
        id="inputfield"
        onChange={(e) => onChange({ e, setState })}
      />
    </div>
  );
};

export default TextArea;
