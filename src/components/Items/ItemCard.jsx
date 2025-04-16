import React from "react";
import LikeButton from "../Likes/LikeButton";

function ItemCard({ item }) {
  return (
    <li>
      <div>
        <img src={item.images[0]} alt="" />
      </div>
      <div>{item.name}</div>
      <div>{item.price}</div>
      <LikeButton />
    </li>
  );
}

export default ItemCard;
