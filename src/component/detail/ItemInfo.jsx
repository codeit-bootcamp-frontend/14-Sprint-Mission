import moreIcon from "../../../image/ic_more.png";
import Select from "../../component/common/Select";
import styles from "./ItemInfo.module.css";

function ItemInfo({ name, price, selectOpen, toggleSelect }) {
  return (
    <section className={styles.itemInfo}>
      <div>
        <div className={styles.itemName}>{name}</div>
        <div className={styles.itemPrice}>{price}원</div>
      </div>
      <img src={moreIcon} alt="더보기 아이콘" onClick={toggleSelect} />
      {selectOpen && (
        <Select option1="수정하기" option2="삭제하기" page="detail" />
      )}
    </section>
  );
}

export default ItemInfo;
