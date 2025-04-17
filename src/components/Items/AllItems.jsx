import React, { useEffect, useState } from "react";
import SearchInput from "../Input/SearchInput";
import { Link } from "react-router-dom";
import OrderSelect from "../OrderSelect/OrderSelect";
import ItemList from "./ItemList";
import Pagenation from "../Pagenation/Pagenation";
import { getItems } from "../../api/api";
import "./ItemComponent.scss";

function AllItems({ itemCount }) {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [order, setOrder] = useState("recent");
  const [page, setPage] = useState(1);

  const handleSearch = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleOrder = (e) => {
    const { value } = e.target;
    setOrder(value);
  };

  const handleGetItmes = async () => {
    const result = await getItems({ search, order, page, pageSize: itemCount });
    setItems(result);
  };

  useEffect(() => {
    handleGetItmes();
  }, [search, order, page, itemCount]);

  return (
    <div className="items-wrap">
      <div className="items-header">
        <h2 className="title">전체 상품</h2>
        <div className="sort">
          <SearchInput
            placeholder="검색할 상품을 입력해주세요"
            value={search}
            onChange={handleSearch}
          />
          <Link to={"/additem"} className="el-btn btn-s">
            상품 등록하기
          </Link>
          <OrderSelect handleOrder={handleOrder} value={order} />
        </div>
      </div>
      <ItemList items={items.list} count={itemCount} />
      <Pagenation
        totalCount={items.totalCount}
        pageSize={itemCount}
        currentPage={page}
        onPageChange={setPage}
      />
    </div>
  );
}

export default AllItems;
