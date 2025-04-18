import React, { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import OrderSelect from "../OrderSelect/OrderSelect";
import ItemList from "./ItemList";
import Pagenation from "../Pagenation/Pagenation";
import { getItems } from "../../api/api";
import "./ItemComponent.scss";
import useItemFetcher from "../../hooks/useItemFetcher";
import TextInput from "../Input/TextInput";

function AllItems({ itemCount, onLoading, onError }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  const searchQuery = searchParams.get("search") || "";
  const order = searchParams.get("order") || "recent";
  const page = parseInt(searchParams.get("page") || 1, 10);

  const [localSearch, setLocalSearch] = useState(searchQuery);

  const params = { search: searchQuery, order, page, pageSize: itemCount };
  const { items, isLoading, error } = useItemFetcher(getItems, params);

  useEffect(() => {
    setLocalSearch(searchQuery);
  }, [searchQuery]);

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchParams({
      search: localSearch,
      order,
      page: 1,
    });
  };

  const handleOrder = (value) => {
    setSearchParams({
      search,
      order: value,
      page: 1,
    });
  };

  const handlePageChange = (newPage) => {
    setSearchParams({
      search,
      order,
      page: newPage,
    });
  };

  if (error) {
    alert("전체 상품 로딩 에러");
  }

  return (
    <div className="items-wrap">
      <div className="items-header">
        <h2 className="title">전체 상품</h2>
        <div className="sort">
          <form onSubmit={handleSearch}>
            <TextInput
              type="search"
              placeholder="검색할 상품을 입력해주세요"
              value={localSearch}
              onChange={(e) => setLocalSearch(e.target.value)}
            />
          </form>

          <Link to={"/additem"} className="el-btn btn-s">
            상품 등록하기
          </Link>
          <OrderSelect handleOrder={handleOrder} value={order} />
        </div>
      </div>
      {isLoading ? (
        <div>로딩중....</div>
      ) : (
        <>
          <ItemList items={items.list} count={itemCount} />
          <Pagenation
            totalCount={items.totalCount}
            pageSize={itemCount}
            currentPage={page}
            onPageChange={handlePageChange}
          />
        </>
      )}
    </div>
  );
}

export default AllItems;
