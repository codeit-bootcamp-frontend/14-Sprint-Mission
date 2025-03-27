import clsx from "clsx";
import { InputHTMLAttributes, ReactNode } from "react";

import styles from "./Input.module.css";

interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "prefix"> {
  prefix: ReactNode;
}

const Input = ({ prefix, className, ...props }: InputProps) => {
  return (
    <div className={clsx([styles.input_wrapper, className])}>
      {prefix && <i>{prefix}</i>}
      <input className={styles.input} {...props} />
    </div>
  );
};

export default Input;
