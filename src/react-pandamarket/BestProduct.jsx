import React from "react";
import "./body.css";
import Card from "./Card";

const BestProduct = ({ bestProduct, bestPlaceHolderCount }) => {
  return (
    <>
      <div className="best-product-wrap">
        <span className="best-product">베스트 상품</span>
      </div>
      <div className="card-container">
        {bestProduct.length > 0
          ? bestProduct.map((product, index) => (
              <Card
                key={index}
                images={product.images}
                name={product.name}
                price={product.price}
                favoriteCount={product.favoriteCount}
                productExist={true}
              />
            ))
          : Array.from({ length: bestPlaceHolderCount }, (_, index) => (
              <Card key={index} productExist={false} />
            ))}
      </div>
    </>
  );
};

export default BestProduct;
