import { Product } from "@/api/getProducts";
import heartBlank from "@assets/images/ic_heart-blank.svg";
import heartFull from "@assets/images/ic_heart-full.svg";
import placeholderImage from "@assets/images/hero-home.png";
import { useState } from "react";
import styles from "./product.module.css";

interface ProductElementProps {
  product: Product;
}

export default function ProductElement({ product }: ProductElementProps) {
  const { name, price, images, favoriteCount } = product;
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [currentImageSrc, setCurrentImageSrc] = useState(
    images && images.length > 0 ? images[0] : placeholderImage
  );

  const handleClick: () => void = () => {
    setIsLiked((prev) => !prev);
    //좋아요를 서버에 요청 보내야 함
  };

  const handleImageError = () => {
    setCurrentImageSrc(placeholderImage);
  };

  return (
    <article className={styles.card}>
      <img
        src={currentImageSrc}
        className={styles.image}
        alt={name}
        onError={handleImageError}
      />
      <h3 className={styles.name}>{name}</h3>
      <p className={styles.price}>{price}원</p>
      <button onClick={handleClick} className={styles.likeButton}>
        {!isLiked ? <img src={heartBlank} /> : <img src={heartFull} />}
        <span className={styles.favoriteCount}>{favoriteCount}</span>
      </button>
    </article>
  );
}
