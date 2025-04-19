import { Product } from "@/api/getProducts";
import heartBlank from "@assets/images/ic_heart-blank.svg";
import heartFull from "@assets/images/ic_heart-full.svg";
import { useState } from "react";
import styles from "./product.module.css";

interface ProductElementProps {
  product: Product;
}

export default function ProductElement({
  product
}: ProductElementProps) {
  const { name, price, images, favoriteCount } = product;
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleClick: () => void = () => {
    setIsLiked((prev) => !prev);
    //좋아요를 서버에 요청 보내야 함
  };

  return (
    <article className={styles.card}>
      <img src={images[0]} className={styles.image} />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>{price}원</p>
      <button onClick={handleClick} className={styles.likeButton}>
        {!isLiked ? <img src={heartBlank} /> : <img src={heartFull} />}
        <span className={styles.favoriteCount}>{favoriteCount}</span>
      </button>
    </article>
  );
}
