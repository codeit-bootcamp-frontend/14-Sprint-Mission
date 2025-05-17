import React from "react";
import styled from "styled-components";

const CardContent = styled.div`
  padding-top: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  padding-left: 0px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  justify-content: flex-start;
  align-items: flex-start;
`;

const Title = styled.h3`
  font-size: 15px;
  font-weight: 500;
  padding: 0px;
  margin: 0 0 8px 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: left;
  line-height: 1.3;
  width: 100%;
`;

const Price = styled.p`
  font-size: 17px;
  font-weight: bold;
  color: var(--gray-900);
  margin: 0 0 8px 0;
  text-align: left;
  line-height: 1.3;
  width: 100%;
`;

const Favorites = styled.p`
  font-size: 12px;
  color: var(--gray-500);
  margin: 0;
  display: flex;
  align-items: center;
  text-align: left;
  line-height: 1.3;
  width: 100%;
`;

const FavoriteIcon = styled.img`
  width: 15px;
  height: 15px;
  margin-right: 4px;
  object-fit: contain;
  vertical-align: middle;
`;

function ItemCardContent({ name, price, favoriteCount }) {
  return (
    <CardContent>
      <Title>{name}</Title>
      <Price>{price.toLocaleString()}원</Price>
      <Favorites>
        <FavoriteIcon src="/images/icons/Icon.png" alt="Favorite" />
        {favoriteCount}
      </Favorites>
    </CardContent>
  );
}

export default ItemCardContent;
