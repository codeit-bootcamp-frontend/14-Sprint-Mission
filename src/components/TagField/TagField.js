import { useRef, useState } from "react";

import Field from "../Field/Field";

import XIcon from "../../assets/icons/ic_X.svg";
import styles from "./TagField.module.css";

const TagField = ({ id, name, label, placeholder }) => {
  const [tags, setTags] = useState([]);
  const inputRef = useRef(null);

  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      const { value } = inputRef.current;
      if (
        value !== "" &&
        tags.some(({ tagValue }) => tagValue === value) === false
      ) {
        setTags((prev) => [
          ...prev,
          { id: new Date().toISOString(), tagValue: value },
        ]);
        inputRef.current.value = "";
      }
    }
  };

  const removeTagClickHandler = (targetId) => {
    setTags((prev) => prev.filter(({ id }) => id !== targetId));
  };

  return (
    <div className={styles.field_container}>
      <Field id={id} label={label}>
        <input
          ref={inputRef}
          className={styles.input}
          id={id}
          name={name}
          placeholder={placeholder}
          onKeyDown={keyDownHandler}
        />
      </Field>
      <div className={styles.tag_box}>
        {tags?.map(({ id, tagValue }) => (
          <span key={id} className={styles.tag}>
            #{tagValue}
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
