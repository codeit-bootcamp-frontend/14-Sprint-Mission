import React from "react";
import styles from "../styles/inputField.module.scss";

const TextArea = ({ label, placeholder, onChange, setState }) => {
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
