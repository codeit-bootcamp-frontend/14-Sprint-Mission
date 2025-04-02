import styles from "./ItemImage.module.css";
import emptyImg from "../../../image/img_comment_empty.png";

function ItemImage({ src, alt }) {
  return (
    <img src={src || { emptyImg }} alt={alt} className={styles.itemDetailImg} />
  );
}

export default ItemImage;
