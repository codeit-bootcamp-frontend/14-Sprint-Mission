import styles from "./CommentItem.module.css";
import ProfileImage from "../common/ProfileImage";
import Select from "../common/Select";
import Divider from "../common/Divider";
import moreIcon from "../../../image/ic_more.png";

function CommentItem({
  comment,
  openSelectId,
  editId,
  toggleSelect,
  handleEditClick,
  onCancelEdit,
  formatRelativeTime,
}) {
  return (
    <>
      <div className={styles.commentItem}>
        <div className={styles.commentTop}>
          {editId !== comment.id ? (
            <div className={styles.commentText}>{comment.content}</div>
          ) : (
            <textarea
              defaultValue={comment.content}
              className={styles.editTextarea}
            />
          )}
          {editId !== comment.id && (
            <img
              className={styles.commentMore}
              src={moreIcon}
              alt="더보기 아이콘"
              onClick={() => toggleSelect(comment.id)}
            />
          )}
          {openSelectId === comment.id && editId !== comment.id && (
            <Select
              option1="수정하기"
              option2="삭제하기"
              onEditClick={() => handleEditClick(comment.id)}
            />
          )}
        </div>
        <div className={styles.commentBottom}>
          <ProfileImage
            src={comment.writer.image}
            className={styles.writerImg}
          />
          <div className={styles.writerInfo}>
            <div className={styles.writerName}>{comment.writer.nickname}</div>
            <div className={styles.commentDate}>
              {formatRelativeTime(comment.updatedAt)}
            </div>
          </div>
          {editId === comment.id && (
            <div className={styles.editBtnContainer}>
              <button className={styles.editCancelBtn} onClick={onCancelEdit}>
                취소
              </button>
              <button className={styles.editSubmitBtn}>수정완료</button>
            </div>
          )}
        </div>
        <Divider className={styles.commentDivider} />
      </div>
    </>
  );
}

export default CommentItem;
