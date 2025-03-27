import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

const Button = ({
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <button className={styles.common_button} {...props}>
      {children}
    </button>
  );
};

export default Button;
