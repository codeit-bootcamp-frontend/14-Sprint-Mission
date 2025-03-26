import React from "react";
import styles from "../styles/tag.module.scss";

interface Props {
  tags: string[];
  setTag: React.Dispatch<React.SetStateAction<string[]>>;
}

const Tag = ({ tags, setTag }: Props) => {
  const deleteTag = (index: number) => {
    setTag((prevtag) => prevtag.filter((_, i) => i !== index));
  };

  return (
    <div className={styles["tag-body"]}>
      {tags.map((tag, index) => (
        <div key={index} className={styles["tag-body__tag"]}>
          <span># {tag}</span>
          <button
            className={styles["tag__button"]}
            onClick={() => deleteTag(index)}
          >
            x
          </button>
        </div>
      ))}
    </div>
  );
};

export default Tag;
