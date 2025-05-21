"use client";

import { useState } from "react";

import { Profile, Dropdown } from "@/components/index";
import CommentForm from "../CommentForm/CommentForm";

import KebabIcon from "@/assets/icons/ic_kebab.svg";

import styles from "./Comment.module.css";

type CommentProps = {
  commentId: number;
  content: string;
  writerId: number;
  writerImage: string;
  writerNickname: string;
  createdAt: string;
  updatedAt: string;
};

const Comment = ({
  // commentId,
  // writerId,
  content,
  writerImage,
  writerNickname,
  createdAt,
  updatedAt,
}: CommentProps) => {
  const [toggleModify, setToggleModify] = useState(false);

  const handleSubmit = async (commentValue: string) => {
    console.log(commentValue);
    if (content !== commentValue) {
    }
    setToggleModify(false);
  };

  return (
    <li className={styles.comment_container}>
      {toggleModify && (
        <CommentForm
          defaultValue={content}
          onSubmit={handleSubmit}
          className={styles.comment_textarea_height}
          renderBottom={() => (
            <>
              <Profile
                nickname={writerNickname}
                image={writerImage}
                date={updatedAt ?? createdAt}
                size="md"
              />
              <div className={styles.modify_button_wrapper}>
                <button
                  type="button"
                  className={styles.modify_cancel_button}
                  onClick={() => setToggleModify(false)}
                >
                  취소
                </button>
                <button type="submit" className={styles.modify_button}>
                  수정 완료
                </button>
              </div>
            </>
          )}
        />
      )}

      {!toggleModify && (
        <>
          <div className={styles.comment_wrapper}>
            <p className={styles.comment}>{content}</p>
            <Dropdown renderButton={<KebabIcon />}>
              <Dropdown.Body>
                <button
                  className={styles.dropdown_button}
                  onClick={() => setToggleModify(true)}
                >
                  수정하기
                </button>
                <button className={styles.dropdown_button}>삭제하기</button>
              </Dropdown.Body>
            </Dropdown>
          </div>
          <Profile
            nickname={writerNickname}
            image={writerImage}
            date={updatedAt ?? createdAt}
            size="md"
          />
        </>
      )}
    </li>
  );
};

export default Comment;
