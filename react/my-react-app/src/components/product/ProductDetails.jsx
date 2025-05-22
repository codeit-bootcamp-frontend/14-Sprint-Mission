import React from "react";
import ProductInfo from "./ProductInfo";
import ProductTags from "./ProductTags";
import SellerInfo from "./SellerInfo";
import { ProductDetailsContainer } from "../../styles/components/product/ProductDetails.styled";

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
