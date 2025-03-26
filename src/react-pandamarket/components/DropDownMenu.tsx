import React from "react";
import styles from "../styles/comment.module.scss";

interface Prop {
  setEdit: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropDownMenu = ({ setEdit }: Prop) => {
  return (
    <div className={styles["dropdownmenu"]}>
      <div className={styles["edit"]} onClick={() => setEdit(true)}>
        <span>수정하기</span>
      </div>

      <div className={styles["delete"]}>
        <span>삭제하기</span>
      </div>
    </div>
  );
};

export default DropDownMenu;
