import React, { useContext, useEffect, useState } from "react";
import "../styles/body.css";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import SearchContext from "../Context/SearchContext";

const AllProductHeader = () => {
  const {
    pageNum,
    option,
    searchProduct,
    setIsSearch,
    setSearchValue,
    setOption,
    setAllProduct,
    handleOptionChange,
    allPlaceHolderCount,
  } = useContext(SearchContext);

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
                  setSearchValue(event.target.value);
                  setIsSearch(true);
                }
              }}
            />
          </div>
          <div className="button-option">
            <Link to={"/additem"} className="add-product-button">
              상품 등록하기
            </Link>
            <select
              name="category"
              id="category"
              className="search-option"
              onChange={(e) =>
                handleOptionChange({
                  e,
                  option,
                  setOption,
                  searchProduct,
                  setAllProduct,
                  pageNum,
                  pageSize: allPlaceHolderCount,
                })
              }
            >
              <option value="recent">최신순</option>
              <option value="favorite">좋아요순</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProductHeader;
