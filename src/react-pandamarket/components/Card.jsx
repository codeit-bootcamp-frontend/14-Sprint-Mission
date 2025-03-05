import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import "../styles/card.css";
import { Link } from "react-router-dom";

const ProductCard = ({ images, name, price, favoriteCount, showType, id }) => (
  <>
    <Link to={`/items/${id}`}>
      <img
        src={images}
        alt="image"
        className={
          showType === "전체상품" ? "card-image-allProduct" : "card-image"
        }
      />
    </Link>
    <div className="card-info">
      <Link to={`/items/${id}`} className="product-name">
        {name}
      </Link>
      <span className="product-price">{price}원</span>
      <div className="heart">
        <FaRegHeart className="heart-icon" />
        <span className="product-heart">{favoriteCount}</span>
      </div>
    </div>
  </>
);

const PlaceholderCard = ({ showType }) => (
  <>
    <div
      className={
        showType === "전체상품"
          ? "card-image-allProduct-glow"
          : "card-image-glow"
      }
    ></div>
    <div className="card-info-glow">
      <div className="product-name-glow"></div>
      <div className="product-price-glow"></div>
      <div className="heart-glow"></div>
    </div>
  </>
);

const Card = ({
  images,
  name,
  price,
  favoriteCount,
  showType,
  productExist,
  id,
}) => {
  return (
    <div className={showType === "전체상품" ? "" : "card-wrap"}>
      {productExist ? (
        <ProductCard
          images={images}
          name={name}
          price={price}
          favoriteCount={favoriteCount}
          showType={showType}
          id={id}
        />
      ) : (
        <PlaceholderCard showType={showType} />
      )}
    </div>
  );
};

export default Card;
