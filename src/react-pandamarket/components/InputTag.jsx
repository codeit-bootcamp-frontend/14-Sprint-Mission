import React from "react";
import styles from "../styles/inputField.module.scss";

const InputTag = ({ label, placeholder, onChange, setState }) => {
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
