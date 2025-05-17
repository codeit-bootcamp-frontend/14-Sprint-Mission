import React from "react";
import styled from "styled-components";
import ItemImage from "./ItemImage";
import ItemCardContent from "./ItemCardContent";

const CardContainer = styled.div`
  width: auto;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

function ItemCard({ item, imageType = "all" }) {
  return (
    <CardContainer className="item-card">
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
    </CardContainer>
  );
}

export default ItemCard;
