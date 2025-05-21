import Link from "next/link";

import { CommentList } from "../index";
import { ROUTE } from "@/constants/route";

import ReturnIcon from "@/assets/icons/ic_back.svg";

import styles from "./ItemComment.module.css";

type ItemCommentProps = { productId?: string };

const ItemComment = ({ productId }: ItemCommentProps) => {
  return (
    <div className={styles.container}>
      <CommentList productId={productId} />

      <div className={styles.button_wrapper}>
        <Link href={ROUTE.ITEMS} className={styles.return_button}>
          목록으로 돌아가기 <ReturnIcon />
        </Link>
      </div>
    </div>
  );
};

export default ItemComment;
