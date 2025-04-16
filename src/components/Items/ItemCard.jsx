import React from "react";
import likeIcon from "../../images/ic_like.png";

function ItemCard({ item }) {
  return (
    <li>
      <div className="item-img">
        <img src={item.images[0]} alt="" />
      </div>
      <div className="item-text">
        <div className="name">{item.name}</div>
        <div className="price">{item.price}</div>
        <div className="like">
          <img src={likeIcon} alt="좋아요" />
          <span>{item.favoriteCount}</span>
        </div>
      </div>
    </li>
  );
}

export default ItemCard;
