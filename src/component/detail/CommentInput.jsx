import styles from "./CommentInput.module.css";

function CommentInput({ disableBtn, onChange }) {
  return (
    <section className={styles.commentsSection}>
      <div className={styles.commentsSectionTitle}>문의하기</div>
      <textarea
        onChange={onChange}
        className={styles.commentsTextarea}
        placeholder="개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다."
      />
      <div className={styles.submitBtnContainer}>
        <button className={styles.commentsSubmitBtn} disabled={disableBtn}>
          등록
        </button>
      </div>
    </section>
  );
}

export default CommentInput;
