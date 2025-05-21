"use client";

import Image from "next/image";

import { getItemComments } from "@/api/comment";
import { CommentResponseType } from "@/types/comment";
import useFetchData from "@/hooks/useFetchData";
import Comment from "../Comment/Comment";
import CommentForm from "../CommentForm/CommentForm";

import emptyImage from "@/assets/imgs/img_inquiry_empty.png";

import styles from "./CommentList.module.css";

type CommentListProps = { productId?: string };

const CommentList = ({ productId }: CommentListProps) => {
  const {
    data: itemComments,
    // isLoading,
    fetchData,
  } = useFetchData<CommentResponseType>(getItemComments, {
    productId,
  });

  const handleSubmit = (value: string) => {
    console.log(value);
    fetchData();
  };

  return (
    <>
      <CommentForm
        label="문의하기"
        onSubmit={handleSubmit}
        renderBottom={({ commentValue }) => (
          <button
            type="submit"
            className={styles.submit_button}
            disabled={!Boolean(commentValue.length)}
          >
            등록
          </button>
        )}
      />
      <ul className={styles.comment_list_container}>
        {!itemComments?.list.length && (
          <div className={styles.empty_comment}>
            <Image src={emptyImage} alt="empty" />
            <p>아직 문의가 없어요</p>
          </div>
        )}

        {itemComments?.list?.map(
          ({ id, content, writer, createdAt, updatedAt }) => (
            <Comment
              key={id}
              commentId={id}
              content={content}
              createdAt={createdAt}
              updatedAt={updatedAt}
              writerId={writer.id}
              writerImage={writer.image}
              writerNickname={writer.nickname}
            />
          )
        )}
      </ul>
    </>
  );
};

export default CommentList;
