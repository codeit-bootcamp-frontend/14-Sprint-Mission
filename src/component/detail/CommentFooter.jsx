import { Link } from "react-router-dom";
import backIcon from "../../../image/ic_back.png";
import styles from "./CommentFooter.module.css";

function CommentFooter({ cursor, onLoadMore }) {
  return (
    <>
      {cursor && (
        <button onClick={onLoadMore} className={styles.moreLoadBtn}>
          더보기
        </button>
      )}
      <div className={styles.btnContainer}>
        <Link to="/items" style={{ textDecoration: "none" }}>
          <button className={styles.backToListBtn}>
            목록으로 돌아가기
            <img src={backIcon} alt="뒤로가기" />
          </button>
        </Link>
      </div>
    </>
  );
}

export default CommentFooter;
