import React from "react";
import ItemImage from "./ItemImage";
import ItemCardContent from "./ItemCardContent";
import { ItemCard as StyledItemCard } from "../pages/ItemsPage.styled";

function ItemCard({ item, imageType = "all" }) {
  return (
    <StyledItemCard>
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
    </StyledItemCard>
  );
}

export default ItemCard;
