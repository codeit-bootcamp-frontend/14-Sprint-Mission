import React from "react";
import "./ItemCardContent.css";

function ItemCardContent({ name, price, favoriteCount }) {
  return (
    <div className="item-card-content">
      <h3>{name}</h3>
      <p className="price">{price.toLocaleString()}원</p>
      <p className="favorites">
        <img src="/images/Icon.png" alt="Favorite" className="favorite-icon" />
        {favoriteCount}
      </p>
    </div>
  );
}

export default ItemCardContent;
