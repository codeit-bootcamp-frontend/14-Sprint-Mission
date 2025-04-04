import Card from "@/pages/items/Card";
import useArticles from "./useArticles";
import { useState } from "react";
import styled from "styled-components";
import "../../../styles/global.scss";

function Products() {
  //나중에 reducer로 정리하기
  const [page, setPage] = useState(1);
  const [quantity, setQuantity] = useState(10);
  const [keyword, setKeyword] = useState("");
  const [showOrder, setShowOrder] = useState(false);
  const [order, setOrder] = useState("recent");
  let { articles, isLoading, count } = useArticles(
    page,
    quantity,
    order,
    keyword
  );

  console.log(
    `now: ${page} / result: ${count - page * quantity} / total: ${count}`
  );

  const search = (e) => {
    setKeyword(e.target.value);
    if (page != 1) {
      setPage(1);
    }
    console.log(e.target.value);
  };

  const pageSection = ~~((page - 1) / 5) * 5;

  return (
    <>
      {/* 디바운스 먹이기 */}

      <div className="flex">
        <span className="flex-grow">전체 상품</span>
        <input
          onChange={search}
          value={keyword}
          placeholder="검색할 상품을 입력해주세요"
        />
        <button className="button button--small-40">상품 등록하기</button>
        <div onClick={() => setShowOrder((prev) => !prev)}>
          <span>{order === "recent" ? "최신순" : "좋아요순"}</span>▼
          {showOrder && (
            <ul>
              <li onClick={() => setOrder("recent")}>최신순</li>
              <li onClick={() => setOrder("favorite")}>좋아요순</li>
            </ul>
          )}
        </div>
      </div>

      <div className="flex flex-wrap flex-between">
        {articles.map((e) => (
          <Card
            name={e.name}
            price={e.price}
            favoriteCount={e.favoriteCount}
            images={e.images[0]}
            isLoading={isLoading}
          />
        ))}
      </div>
      <div className="flex-wrap">
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          ←
        </button>
        {Array(Math.min(~~(count / quantity) - pageSection + 1, 5))
          .fill("")
          .map((_, i) => (
            <button
              disabled={page == pageSection + 1 + i}
              onClick={() => setPage(pageSection + 1 + i)}
              key={i}
            >
              {pageSection + 1 + i}
            </button>
          ))}
        <button
          disabled={page === ~~(count / quantity) + 1}
          onClick={() => setPage((prev) => prev + 1)}
        >
          →
        </button>
      </div>
    </>
  );
}

export default Products;
