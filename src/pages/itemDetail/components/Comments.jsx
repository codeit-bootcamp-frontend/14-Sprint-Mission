import styles from "./Comments.module.css";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useComments from "../../../hooks/useComments";
import commentEmpty from "../../../../image/img_comment_empty.png";
import CommentInput from "../../../component/detail/CommentInput";
import CommentItem from "../../../component/detail//CommentItem";
import CommentFooter from "../../../component/detail//CommentFooter";

function formatRelativeTime(updatedAt) {
  const now = new Date();
  const updateTime = new Date(updatedAt);
  const diff = now - updateTime;

  const diffHours = Math.floor(diff / 1000 / 60 / 60);
  const diffDays = Math.floor(diffHours / 24);

  if (diffHours < 1) {
    return `${diffMinutes}분 전`;
  } else if (diffHours < 24) {
    return `${diffHours}시간 전`;
  } else if (diffDays < 7) {
    return `${diffDays}일 전`;
  } else if (diffDays < 14) {
    return "1주 전";
  } else if (diffDays <= 31) {
    return "한 달 전";
  } else {
    return updateTime.toISOString().split("T")[0].replace(/-/g, ".");
  }
}

function Comments() {
  const { productId } = useParams();
  const { comments, cursor, loadComments } = useComments(productId);
  const [openSelectId, setOpenSelectId] = useState(null);
  const [editId, setEditId] = useState(null);
  const [disableBtn, setDisableBtn] = useState(true);

  const toggleSelect = (id) =>
    setOpenSelectId((prev) => (prev === id ? null : id));

  const handleEditClick = (id) => setEditId(id);
  const handleDisableBtn = (event) => setDisableBtn(!event.target.value);
  const handleCancelEdit = () => {
    setOpenSelectId(null);
    setEditId(null);
  };

  //   const handleDeleteClick = async (commentId) => {
  //     setSelectOpen(false);
  //     console.log(commentId);
  //     await deleteComment({ commentId });
  //   };

  return (
    <>
      <CommentInput disableBtn={disableBtn} onChange={handleDisableBtn} />
      <section className="comments-list-section">
        {comments.length === 0 && (
          <div className={styles.commentEmptyContainer}>
            <img
              src={commentEmpty}
              alt="문의없음"
              className={styles.commentEmptyImg}
            />
            <div className={styles.commentEmptyDiv}>아직 문의가 없어요</div>
          </div>
        )}
        {comments.map((comment) => (
          <CommentItem
            key={comment.id}
            comment={comment}
            openSelectId={openSelectId}
            editId={editId}
            toggleSelect={toggleSelect}
            handleEditClick={handleEditClick}
            onCancelEdit={handleCancelEdit}
            formatRelativeTime={formatRelativeTime}
          />
        ))}
      </section>
      <CommentFooter cursor={cursor} onLoadMore={() => loadComments(cursor)} />
    </>
  );
}

export default Comments;
