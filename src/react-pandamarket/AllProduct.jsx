import React from "react";
import "./body.css";
import Card from "./Card";
import AllProductHeader from "./AllProductHeader";

const AllProduct = ({
  isSearch,
  searchProduct,
  allProduct,
  allPlaceHolderCount,
}) => {
  return (
    <>
      {/* 전체 상품 헤더 */}
      <AllProductHeader />

      {/* 전체 상품 & 검색 상품 */}
      <div className="all-product-cardContainer">
        {isSearch
          ? searchProduct.length > 0
            ? searchProduct.map((product, index) => (
                <Card
                  key={index}
                  images={product.images}
                  name={product.name}
                  price={product.price}
                  favoriteCount={product.favoriteCount}
                  showType="전체상품"
                  productExist={true}
                />
              ))
            : Array.from({ length: allPlaceHolderCount }, (_, index) => (
                <Card key={index} productExist={false} showType="전체상품" />
              ))
          : allProduct.length > 0
          ? allProduct.map((product, index) => (
              <Card
                key={index}
                images={product.images}
                name={product.name}
                price={product.price}
                favoriteCount={product.favoriteCount}
                showType="전체상품"
                productExist={true}
              />
            ))
          : Array.from({ length: allPlaceHolderCount }, (_, index) => (
              <Card key={index} productExist={false} showType="전체상품" />
            ))}
      </div>
    </>
  );
};

export default AllProduct;
