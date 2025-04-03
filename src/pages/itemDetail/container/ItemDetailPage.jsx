import styles from "./ItemDetailPage.module.css";
import Comments from "../components/Comments";
import Header from "../../../component/common/Header";
import Divider from "../../../component/common/Divider";
import ItemDetailInfo from "../components/ItemDetailInfo";

function ItemDetailPage() {
  return (
    <>
      <Header />
      <div className={styles.itemDetail}>
        <div className={styles.itemDetailInfo}>
          <ItemDetailInfo />
        </div>
        <Divider />
        <Comments />
      </div>
    </>
  );
}

export default ItemDetailPage;
