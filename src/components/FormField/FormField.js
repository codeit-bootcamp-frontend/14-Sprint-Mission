import clsx from "clsx";
import React, { useMemo, useState } from "react";

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
  onChange,
  onBlur,
}) => {
  const [isExistIcon, setIsExistIcon] = useState(false);

  const convertableTypeForPassword = useMemo(() => {
    if (type === "password") {
      return isExistIcon ? "text" : "password";
    }
    return type;
  }, [type, isExistIcon]);

  const postfixIcon = isExistIcon ? renderEnabledIcon : renderDisabledIcon;

  const toggleIconHandler = () => setIsExistIcon((prev) => !prev);

  return (
    <label htmlFor={id}>
      <span className={styles.field_label}>{label}</span>
      <div
        className={clsx([
          styles.field_input_box,
          styles.gray_border,
          {
            [styles.red_border]: Boolean(errorMessage),
          },
        ])}
      >
        <input
          id={label}
          type={convertableTypeForPassword}
          name={name}
          placeholder={placeholder}
          className={styles.field_input}
          onChange={onChange}
          onBlur={onBlur}
        />
        <button
          type="button"
          className={styles.icon_box}
          onClick={toggleIconHandler}
        >
          {postfixIcon}
        </button>
      </div>
      <p className={styles.error_message}>{errorMessage}</p>
    </label>
  );
};

export default FormField;
