"use client";

import clsx from "clsx";
import React, {
  ChangeEventHandler,
  FocusEventHandler,
  InputHTMLAttributes,
  ReactNode,
  useMemo,
  useState,
} from "react";

import Field from "../Field/Field";
import styles from "./InputField.module.css";

interface InputFieldProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  as?: "input" | "textarea";
  label?: string;
  errorMessage?: string;
  renderEnabledIcon?: ReactNode;
  renderDisabledIcon?: ReactNode;
  onChange?: ChangeEventHandler<HTMLTextAreaElement> &
    ChangeEventHandler<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLTextAreaElement> &
    FocusEventHandler<HTMLInputElement>;
}

const InputField = ({
  as: RenderElement = "input",
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
  className,
  ...props
}: InputFieldProps) => {
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
        <RenderElement
          id={id}
          type={convertableTypeForPassword}
          name={name}
          className={clsx([styles.field_input, className])}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          {...props}
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

export default InputField;
