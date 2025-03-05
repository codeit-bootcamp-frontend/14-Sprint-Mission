import React from 'react';
import styles from "../styles/comment.module.scss";

const DropDownMenu = () => {
    return (
      <div className={styles["dropdownmenu"]}>
        <div className={styles["edit"]}>
          <span>수정하기</span>
        </div>

        <div className={styles["delete"]}>
          <span>삭제하기</span>
        </div>
      </div>
    );
};

export default DropDownMenu;