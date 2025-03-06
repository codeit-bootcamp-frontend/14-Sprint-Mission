import React from "react";
import styles from "../styles/edit.module.scss";

const Edit = ({ content, setEdit, setPush }) => {
    const handleCancel = () => {
        setEdit(false);
        setPush(false);
    }

  return (
    <div className={styles["wrapper"]}>
      <textarea name="edit" id="edit">
        {content}
      </textarea>
      <div className={styles['buttons']}>
        <span onClick={handleCancel}>취소</span>
        <button>수정 완료</button>
      </div>
    </div>
  );
};

export default Edit;
