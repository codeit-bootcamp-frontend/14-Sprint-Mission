import { numberFormatter } from "@/utils/formatter";

import HeartIcon from "@/assets/icons/ic_heart.svg";

import styles from "./CardItem.module.css";

type CardItemProps = {
  id: number;
  imgSrc: string;
  name: string;
  price: number;
  favoriteCount: number;
};

const CardItem = ({
  // id,
  imgSrc,
  name,
  price,
  favoriteCount,
}: CardItemProps) => {
  return (
    <li>
      <div className={styles.image_wrapper}>
        <img
          className={styles.item_image}
          src={imgSrc}
          alt={`상품이름_${name}`}
        />
      </div>
      <p className={styles.title}>{name}</p>
      <p className={styles.price}>{numberFormatter(price)}원</p>
      <span className={styles.heart_count}>
        <i>
          <img src={HeartIcon} alt="하트 아이콘" />
        </i>
        {favoriteCount}
      </span>
    </li>
  );
};

export default CardItem;
