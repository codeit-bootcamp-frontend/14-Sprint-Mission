import clsx from "clsx";
import styles from "./Input.module.css";

const Input = ({ prefix, className, ...props }) => {
  return (
    <div className={clsx([styles.input_wrapper, className])}>
      {prefix && <i>{prefix}</i>}
      <input className={styles.input} {...props} />
    </div>
  );
};

export default Input;
