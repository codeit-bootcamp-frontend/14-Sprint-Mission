import { numberFormatter } from "@/utils/formatter";

import ImageProcessor from "../ImageProcessor/ImageProcessor";

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
        <ImageProcessor
          width={100}
          height={100}
          src={imgSrc}
          alt={`상품이름_${name}`}
        />
      </div>
      <p className={styles.title}>{name}</p>
      <p className={styles.price}>{numberFormatter(price)}원</p>
      <span className={styles.heart_count}>
        <i>
          <HeartIcon />
        </i>
        {favoriteCount}
      </span>
    </li>
  );
};

export default CardItem;
