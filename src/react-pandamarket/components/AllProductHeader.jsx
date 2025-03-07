import React from "react";
import "../styles/body.css";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";

const AllProductHeader = ({ setSearchValue, setOption }) => {
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
              onChange={(e) => setOption(e.target.value)}
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
