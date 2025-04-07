import Card from "@/pages/items/Card";
import useArticles from "./../useArticles";
import { useEffect, useState } from "react";
import "../../../../styles/global.scss";
import { Link } from "react-router-dom";
import { useWinSize } from "../../../contexts/winSizeContext";
import * as S from "./style";

import Empty from "../../../../images/ico_empty.svg";
import PageArrow from "../../../../images/ico_arrow_right.svg";
import OrderArrow from "../../../../images/ico_arrow_down.svg";
import Magnify from "../../../../images/ico_magnify.svg";
import Order from "../../../../images/ico_order.svg";

function Products() {
  //나중에 reducer로 정리하기
  const [page, setPage] = useState(1);
  const [quantity, setQuantity] = useState(10);
  const [keyword, setKeyword] = useState("");
  const [showOrder, setShowOrder] = useState(false);
  const [order, setOrder] = useState("recent");
  const { winSize } = useWinSize();

  let { articles, isLoading, count } = useArticles(
    page,
    quantity,
    order,
    keyword
  );

  useEffect(() => {
    if (winSize === "mobile") {
      setQuantity(4);
    } else if (winSize === "tablet") {
      setQuantity(6);
    } else {
      setQuantity(10);
    }
  }, [winSize]);

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
      <S.TitleBar>
        {winSize === "mobile" ? (
          <div
            style={{
              width: "100%",
              gap: "8px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div
              style={{ display: "flex", width: "100%", alignItems: "center" }}
            >
              <span className="flex-grow">전체 상품</span>
              <S.Button>
                <Link to="/additem" className="link">
                  상품 등록하기
                </Link>
              </S.Button>
            </div>
            <div style={{ display: "flex", gap: "14px", width: "100%" }}>
              <label htmlFor="search" style={{ flexGrow: 1 }}>
                <img src={Magnify} alt="" />
                <input
                  onChange={search}
                  value={keyword}
                  id="search"
                  placeholder="검색할 상품을 입력해주세요"
                  style={{ width: "100%" }}
                />
              </label>
              <div
                className="select-order"
                onClick={() => setShowOrder((prev) => !prev)}
              >
                <img src={Order} alt="" />
                {showOrder && (
                  <ul>
                    <li onClick={() => setOrder("recent")}>최신순</li>
                    <li onClick={() => setOrder("favorite")}>좋아요순</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        ) : (
          <>
            <span className="flex-grow">전체 상품</span>
            <label htmlFor="search">
              <img src={Magnify} alt="" />
              <input
                onChange={search}
                value={keyword}
                id="search"
                placeholder="검색할 상품을 입력해주세요"
                style={{ width: "324px" }}
              />
            </label>
            <S.Button>
              <Link to="/additem" className="link">
                상품 등록하기
              </Link>
            </S.Button>
            <div
              className="select-order"
              onClick={() => setShowOrder((prev) => !prev)}
            >
              <span>{order === "recent" ? "최신순" : "좋아요순"}</span>
              <img src={OrderArrow} alt="" />
              {showOrder && (
                <ul>
                  <li onClick={() => setOrder("recent")}>최신순</li>
                  <li onClick={() => setOrder("favorite")}>좋아요순</li>
                </ul>
              )}
            </div>
          </>
        )}
      </S.TitleBar>

      <S.ProductsContainer>
        {articles.length ? (
          articles.map((e) => (
            <Card
              name={e.name}
              price={e.price}
              favoriteCount={e.favoriteCount}
              images={e.images[0]}
              isLoading={isLoading}
              width={winSize === "mobile" ? "152px" : undefined}
              height={winSize === "mobile" ? "262px" : undefined}
            />
          ))
        ) : (
          <div className="notFound">
            <img src={Empty} />
            <span>해당 상품을 찾을 수 없어요</span>
          </div>
        )}
      </S.ProductsContainer>
      <S.Pagination>
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          <img src={PageArrow} alt="" />
        </button>
        {Array(Math.min(~~(count / quantity) - pageSection + 1, 5))
          .fill("")
          .map((_, i) => (
            <button
              className="number"
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
          <img src={PageArrow} alt="" style={{ rotate: "180deg" }} />
        </button>
      </S.Pagination>
    </>
  );
}

export default Products;
