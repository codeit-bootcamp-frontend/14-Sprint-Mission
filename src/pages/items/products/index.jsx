import Card from "@/pages/items/Card";
import useArticles from "@/hooks/useArticles";
import { useEffect, useState } from "react";
import "../../../../styles/global.scss";
import { useWinSize } from "../../../contexts/winSizeContext";
import * as S from "./style";

import Empty from "@/assets/images/img_empty.svg";
import PageArrow from "@/assets/icons/ico_arrow_right.svg";
import TitleBar from "./TitleBar";

function Products() {
  //나중에 reducer로 정리하기
  const [page, setPage] = useState(1);
  const [quantity, setQuantity] = useState(10);
  const [keyword, setKeyword] = useState("");

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

  const pageSection = ~~((page - 1) / 5) * 5;

  return (
    <>
      {/* 디바운스 먹이기 */}
      <TitleBar
        winSize={winSize}
        keywords={[keyword, setKeyword]}
        pages={[page, setPage]}
        orders={[order, setOrder]}
      />
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
