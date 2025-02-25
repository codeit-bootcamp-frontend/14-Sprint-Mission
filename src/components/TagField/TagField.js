import Field from "../Field/Field";

import XIcon from "../../assets/icons/ic_X.svg";
import styles from "./TagField.module.css";

const TagField = ({ id, name, label, placeholder }) => {
  return (
    <div className={styles.field_container}>
      <Field id={id} label={label}>
        <input
          className={styles.input}
          id={id}
          name={name}
          placeholder={placeholder}
        />
      </Field>
      <div className={styles.tag_box}>
        <span className={styles.tag}>
          #메롱
          <img src={XIcon} alt="제거 아이콘" />
        </span>
      </div>
    </div>
  );
};

export default TagField;
