import React from "react";
import { useNavigate } from "react-router-dom";
import ItemImage from "./ItemImage";
import ItemCardContent from "./ItemCardContent";
import { ItemCard as StyledItemCard } from "../pages/ItemsPage.styled";

function ItemCard({ item, imageType = "all" }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/items/${item.id}`);
  };

  return (
    <StyledItemCard onClick={handleClick} style={{ cursor: "pointer" }}>
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
