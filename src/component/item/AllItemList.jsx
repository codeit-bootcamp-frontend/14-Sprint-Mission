import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getItem } from "../../api/api";
import Pagination from "../../component/common/Pagination";
import "./AllItemList.css";
import { Link } from "react-router-dom";
import ItemList from "../item/ItemList";
import usePageSize from "../../hooks/usePageSize";
import useItems from "../../hooks/useItems";

function AllItemList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const orderBy = searchParams.get("orderBy") || "recent";
  const page = parseInt(searchParams.get("page")) || 1;
  const pageSize = usePageSize();
  const { items, totalPage } = useItems(orderBy, page, pageSize);

  const handleOnChange = (e) => {
    const value = e.target.value;
    setSearchParams({ orderBy: value, page: 1 });
  };

  const handlePageChange = (newPage) => {
    setSearchParams({ orderBy, page: newPage });
  };

  return (
    <>
      <div className="item-section-flex">
        <div className="item-section-title">전체 상품</div>
        <div className="item-all-section-search-container">
          <img src="/image/search_icon.png" className="search-icon" />
          <input
            className="item-all-section-search"
            placeholder="검색할 상품을 입력해주세요"
          />
        </div>
        <Link to="/additem">
          <button className="item-all-section-button">상품등록하기</button>
        </Link>
        <select onChange={handleOnChange} className="item-all-section-select">
          <option value="recent" className="select-option">
            최신순
          </option>
          <option value="favorite" className="select-option">
            좋아요순
          </option>
        </select>
      </div>
      <ItemList items={items} className="all-item-grid" />
      <Pagination
        totalPage={totalPage}
        currentPage={page}
        setPage={handlePageChange}
      />
    </>
  );
}

export default AllItemList;
