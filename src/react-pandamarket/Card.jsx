import React from "react";
import { FaRegHeart } from "react-icons/fa";
import "./card.css";

const Card = ({ images, name, price, favoriteCount, showType }) => {
  console.log(images);
  return (
    <div
      className={showType === "전체상품" ? "card-wrap-allProduct" : "card-wrap"}
    >
      <img
        src={images}
        alt="image"
        className={
          showType === "전체상품" ? "card-image-allProduct" : "card-image"
        }
      />
      <div className="card-info">
        <span className="product-name">{name}</span>
        <span className="product-price">{price}</span>
        <div className="heart">
          <FaRegHeart className="heart-icon" />
          <span className="product-heart">{favoriteCount}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
