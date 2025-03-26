import React, { useState } from "react";
import styles from "../styles/comment.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import DropDownMenu from "./DropDownMenu";
import Edit from "./Edit";
import { CommentType } from "./ProductDetail";

const Comment = ({ comment }: { comment: CommentType }) => {
  const [push, setPush] = useState(false);
  const [edit, setEdit] = useState(false);

  return (
    <div className={styles["wrapper"]}>
      {edit ? (
        <Edit content={comment.content} setEdit={setEdit} setPush={setPush} />
      ) : (
        <div className={styles["content-wrap"]}>
          <span className={styles["content"]}>{comment.content}</span>
          <BsThreeDotsVertical
            className={styles["dots"]}
            onClick={() => setPush((prev) => !prev)}
          />
          {push && <DropDownMenu setEdit={setEdit} />}
        </div>
      )}

      <div className={styles["profile-wrap"]}>
        <div className={styles["profile"]}>
          <img src="/profile.png" alt="프로필" />
        </div>
        <span>{comment.writer.nickname}</span>
      </div>

      <div className={styles["divider"]}></div>
    </div>
  );
};

export default Comment;
