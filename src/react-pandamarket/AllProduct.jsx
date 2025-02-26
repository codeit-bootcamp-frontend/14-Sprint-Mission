import React from "react";
import "./body.css";
import Card from "./Card";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const AllProduct = ({
  pageNum,
  pageSize,
  option,
  setIsSearch,
  setSearchValue,
  setSearchProduct,
  setPaginationNum,
  searchSubmit,
  setOption,
  isSearch,
  searchProduct,
  setAllProduct,
  allProduct,
  allPlaceHolderCount,
  handleOptionChange,
}) => {
  return (
    <>
      {/* 전체 상품 헤더 */}
      <div className="all-product-header">
        <span className="all-product">전체 상품</span>

        <div className="search-product">
          <div className="search-container">
            <CiSearch className="search-icon" />
            <input
              type="search"
              placeholder="검색할 상품을 입력해주세요"
              className="search-input"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  searchSubmit({
                    value: event.target.value,
                    pageNum,
                    pageSize,
                    option,
                    setIsSearch,
                    setSearchValue,
                    setSearchProduct,
                    setPaginationNum,
                  });
                }
              }}
            />
          </div>
          <div className="button-option">
            <Link to={"/additem"}>
              <button className="add-product-button">상품 등록하기</button>
            </Link>
            <select
              name="category"
              id="category"
              className="search-option"
              onChange={(e) =>
                handleOptionChange({
                  e,
                  setOption,
                  isSearch,
                  searchProduct,
                  setAllProduct,
                  setSearchProduct,
                  pageNum,
                  pageSize,
                })
              }
            >
              <option value="latest">최신순</option>
              <option value="sortByLike">좋아요순</option>
            </select>
          </div>
        </div>
      </div>

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
