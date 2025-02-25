import "./Product.css";
import { CiHeart } from "react-icons/ci";
import defaultImage from "../assets/panda1.png";
import { useState } from "react";

function Product({ product }) {
  const { id, images, name, price, favoriteCount } = product;
  const formatPrice = price.toLocaleString("ko-KR");
  const [imageSrc, setImageSrc] = useState(images[0]);

  // 이미지 에러시 기본 이미지 사용
  const handleImageError = () => {
    setImageSrc(defaultImage);
  };

  return (
    <div className="product">
      <img
        className="product-image"
        src={imageSrc}
        alt={`${name}`}
        width={220}
        onError={handleImageError}
      />
      <div className="product-details">
        <h2 className="product-name">{name}</h2>
        <p className="product-price">{`${formatPrice}원`}</p>
        <span className="product-favorite">
          <CiHeart />
          {favoriteCount}
        </span>
      </div>
    </div>
  );
}

export default Product;
