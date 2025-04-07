import { Link } from "react-router-dom";
import { useState } from "react";
import * as S from "./style";

import OrderArrow from "@/assets/icons/ico_arrow_down.svg";
import Magnify from "@/assets/icons/ico_magnify.svg";
import Order from "@/assets/icons/ico_order.svg";
import Button from "@/components/Button";

function TitleBar({ winSize, keywords, pages, orders }) {
  const [showOrder, setShowOrder] = useState(false);
  const [keyword, setKeyword] = keywords;
  const [page, setPage] = pages;
  const [order, setOrder] = orders;

  const search = (e) => {
    setKeyword(e.target.value);
    if (page != 1) {
      setPage(1);
    }
    console.log(e.target.value);
  };

  return (
    <S.TitleBar>
      {winSize === "mobile" ? (
        <div className="container">
          <div className="top-container">
            <span className="flex-grow">전체 상품</span>
            <Button>
              <Link to="/additem" className="link">
                상품 등록하기
              </Link>
            </Button>
          </div>
          <div className="bottom-container">
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
          <Button>
            <Link to="/additem" className="link">
              상품 등록하기
            </Link>
          </Button>
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
  );
}

export default TitleBar;
