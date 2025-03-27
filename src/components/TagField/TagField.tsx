import { ChangeEvent, KeyboardEvent, useState } from "react";

import Field from "../Field/Field";
import { ComprehensiveEvent } from "@/hooks/useForm";

import XIcon from "../../assets/icons/ic_X.svg";

import styles from "./TagField.module.css";

type TagFieldProps = {
  id: string;
  name: string;
  label: string;
  placeholder: string;
  onChange: (e: ComprehensiveEvent) => void;
};

const TagField = ({
  id,
  name,
  label,
  placeholder,
  onChange,
}: TagFieldProps) => {
  const [tags, setTags] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState("");

  const keyUpHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") {
      return;
    }

    const { value } = e.target as HTMLInputElement;

    if (value !== "" && !tags.some((tag) => tag === value)) {
      const nextTags = [...tags, value];
      setTags(nextTags);
      onChange({
        target: { ...e.target, type: "text", name, value: nextTags },
      });
      setInputValue("");
    }
  };

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const removeTagClickHandler = (targetTag: string) => {
    const nextTags = tags.filter((tag) => tag !== targetTag);
    setTags(nextTags);
    onChange({
      target: { type: "text", name, value: nextTags },
    } as ComprehensiveEvent);
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
        {tags?.map((tag) => (
          <span key={tag} className={styles.tag}>
            #{tag}
            <button type="button" onClick={() => removeTagClickHandler(tag)}>
              <img src={XIcon} alt="제거 아이콘" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TagField;
