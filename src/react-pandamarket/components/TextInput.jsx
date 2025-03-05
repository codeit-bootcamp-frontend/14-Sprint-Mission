import React from "react";
import styles from "../styles/inputField.module.scss";

const TextInput = ({ label, placeholder, onChange, setState }) => {
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
