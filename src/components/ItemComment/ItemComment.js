import { Link } from "react-router-dom";
import CommentList from "../CommentList/CommentList";

import { ReactComponent as ReturnIcon } from "../../assets/icons/ic_back.svg";
import styles from "./ItemComment.module.css";

const ItemComment = ({ productId }) => {
  return (
    <div className={styles.container}>
      <CommentList productId={productId} />

      <div className={styles.button_wrapper}>
        <Link to="/items" className={styles.return_button}>
          목록으로 돌아가기 <ReturnIcon />
        </Link>
      </div>
    </div>
  );
};

export default ItemComment;
