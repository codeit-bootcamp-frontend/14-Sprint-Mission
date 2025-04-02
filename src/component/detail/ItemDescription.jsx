import styles from "./ItemDescription.module.css";
import { renderTags } from "../AddItem/AddTag";

function ItemDescription({ description, tags }) {
  return (
    <section className={styles.itemDescription}>
      <div className={styles.itemSectionTitle}>상품 소개</div>
      <div className={styles.itemDesc}>{description}</div>
      <div className={styles.itemSectionTitle}>상품 태그</div>
      <div>{renderTags(tags)}</div>
    </section>
  );
}

export default ItemDescription;
