import { useState } from "react";

import Field from "../Field/Field";

import XIcon from "../../assets/icons/ic_X.svg";
import styles from "./TagField.module.css";

const TagField = ({ id, name, label, placeholder, onChange }) => {
  const [tags, setTags] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const keyUpHandler = (e) => {
    if (e.key === "Enter") {
      const { value } = e.target;

      if (value !== "" && !tags.some(({ tag }) => tag === value)) {
        setTags((prev) => [
          ...prev,
          { id: new Date().toISOString(), tag: value },
        ]);
        setInputValue("");
        onChange(e);
      }
    }
  };

  const changeHandler = (e) => setInputValue(e.target.value);

  const removeTagClickHandler = (targetId) => {
    setTags((prev) => prev.filter(({ id }) => id !== targetId));
  };

  return (
    <div className={styles.field_container}>
      <Field id={id} label={label}>
        <input
          id={id}
          name={name}
          value={inputValue}
          className={styles.input}
          placeholder={placeholder}
          onKeyUp={keyUpHandler}
          onChange={changeHandler}
        />
      </Field>
      <div className={styles.tag_box}>
        {tags?.map(({ id, tag }) => (
          <span key={id} className={styles.tag}>
            #{tag}
            <button type="button" onClick={() => removeTagClickHandler(id)}>
              <img src={XIcon} alt="제거 아이콘" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagField;
