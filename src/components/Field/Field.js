import clsx from "clsx";

import styles from "./Field.module.css";

const Field = ({ children, id, label, errorMessage, className }) => {
  return (
    <label htmlFor={id} className={className}>
      <span className={styles.field_label}>{label}</span>
      <div
        className={clsx([
          styles.field_content_box,
          styles.gray_border,
          {
            [styles.red_border]: Boolean(errorMessage),
          },
        ])}
      >
        {children}
      </div>
      {errorMessage && <p className={styles.error_message}>{errorMessage}</p>}
    </label>
  );
};

export default Field;
