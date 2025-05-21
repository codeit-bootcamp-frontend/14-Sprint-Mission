import React from "react";
import styled from "styled-components";
import ProductInfo from "./ProductInfo";
import ProductTags from "./ProductTags";
import SellerInfo from "./SellerInfo";

const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

function ProductDetails({ product, onFavoriteClick }) {
  return (
    <ProductDetailsContainer>
      <ProductInfo
        name={product.name}
        price={product.price}
        description={product.description}
      />
      <ProductTags tags={product.tags} />
      <SellerInfo
        nickname={product.ownerNickname}
        image={product.ownerImage}
        createdAt={product.createdAt}
        favoriteCount={product.favoriteCount}
        isFavorite={product.isFavorite}
        onFavoriteClick={onFavoriteClick}
      />
    </ProductDetailsContainer>
  );
}

export default ProductDetails;
