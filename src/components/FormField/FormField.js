import clsx from "clsx";
import React, { useMemo, useState } from "react";

import Field from "../Field/Field";
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
  renderElement: RenderComponent = "input",
  renderClassName,
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
    <Field id={id} label={label} errorMessage={errorMessage}>
      <div className={styles.field_input_box}>
        <RenderComponent
          id={id}
          type={convertableTypeForPassword}
          name={name}
          className={clsx([styles.field_input, renderClassName])}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
        {postfixIcon && (
          <button
            type="button"
            className={styles.icon_box}
            onClick={toggleIconHandler}
          >
            {postfixIcon}
          </button>
        )}
      </div>
    </Field>
  );
};

export default FormField;
