import React from "react";
import ItemImage from "./ItemImage";
import ItemCardContent from "./ItemCardContent";

function ItemCard({ item, imageType = "all" }) {
  return (
    <div className="item-card">
      <ItemImage
        src={item.images?.[0] || ""}
        alt={item.name}
        type={imageType}
      />
      <ItemCardContent
        name={item.name}
        price={item.price}
        favoriteCount={item.favoriteCount}
      />
    </div>
  );
}

export default ItemCard;
