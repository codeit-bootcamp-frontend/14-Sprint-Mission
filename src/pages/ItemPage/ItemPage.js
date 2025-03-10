import { useParams } from "react-router-dom";

import { ItemComment, ItemInfo } from "../../components";

import styles from "./ItemPage.module.css";

const ItemPage = () => {
  const { productId } = useParams();

  return (
    <div className={styles.container}>
      <ItemInfo productId={productId} />
      <hr className={styles.divider} />
      <ItemComment productId={productId} />
    </div>
  );
};

export default ItemPage;
