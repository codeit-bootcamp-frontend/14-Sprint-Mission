import React, { useEffect, useState } from "react";
import "./body.css";
import Card from "./Card";
import { getProduct } from "./api/api";

const Body = () => {
  const [bestProduct, setbestProduct] = useState([]);
  const [allProduct, setAllProduct] = useState([]);

  const getBestProduct = async () => {
    let hasMore = true;
    let offset = 0;
    let allProductForSort = [];

    while (hasMore) {
      const response = await getProduct(offset);
      console.log(response);
      allProductForSort = [...allProductForSort, ...response.list];
      offset += 10;
      console.log(
        `Offset: ${offset}, 응답 개수: ${response.list.length}, 전체 개수: ${response.totalCount}`
      );
      if (offset >= response.totalCount) {
        hasMore = false;
      }
    }
    setAllProduct(allProductForSort);
    // sort는 원본 배열을 직접 바꾼다 따라서 복사해줘야 함
    const sortedData = [...allProductForSort]
      .sort((a, b) => b.favoriteCount - a.favoriteCount)
      .slice(0, 4);
    setbestProduct(sortedData);
  };

  useEffect(() => {
    getBestProduct();
  }, []);

  return (
    <div className="body">
      <span className="best-product">베스트 상품</span>
      <div className="card-container">
        {bestProduct.map((product, index) => (
          <Card
            key={index}
            images={product.images}
            name={product.name}
            price={product.price}
            favoriteCount={product.favoriteCount}
          />
        ))}
      </div>
      <div className="all-product-header">
        <span className="all-product">전체 상품</span>
        <form className="search-product">
          <input type="text" placeholder="검색할 상품을 입력해주세요" className="search-input"/>
          <button type="submit" className="search-button">상품 검색하기</button>
          <select name="category" id="category" className="search-option">
            <option value="latest">최신순</option>
            <option value="sortByLike">좋아요순</option>
          </select>
        </form>
      </div>
    </div>
  );
};

export default Body;
