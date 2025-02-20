import clsx from "clsx";
import React from "react";

import styles from "./FormField.module.css";

const FormField = ({
  id,
  type = "text",
  label,
  name,
  placeholder,
  errorMessage,
  renderEnabledIcon,
  renderDisabledIcon,
}) => {
  const postfixIcon = true ? renderEnabledIcon : renderDisabledIcon;

  return (
    <label htmlFor={id}>
      <span className={styles.field_label}>{label}</span>
      <div
        className={clsx([
          styles.field_input_box,
          styles.gray_border,
          {
            [styles.red_border]: false,
          },
        ])}
      >
        <input
          id={label}
          type={type}
          name={name}
          placeholder={placeholder}
          className={styles.field_input}
        />
        <div className={styles.icon_box}>{postfixIcon}</div>
      </div>
      <p className={styles.error_message}>{errorMessage}</p>
    </label>
  );
};

export default FormField;
