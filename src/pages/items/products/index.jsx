import Card from "@/pages/items/Card";
import useArticles from "@/hooks/useArticles";
import { useState } from "react";
import { useWinSize } from "@/contexts/winSizeContext";
import * as S from "./style";

import Empty from "@/assets/images/img_empty.svg";
import TitleBar from "./TitleBar";
import Pagination from "./Pagination/Pagination";

const getQuantity = (winSize) => {
  if (winSize === "mobile") {
    return 4;
  } else if (winSize === "tablet") {
    return 6;
  } else {
    return 10;
  }
};

function Products() {
  //나중에 reducer로 정리하기
  const [page, setPage] = useState(1);
  const [keyword, setKeyword] = useState("");
  const [order, setOrder] = useState("recent");
  const { winSize } = useWinSize();
  const quantity = getQuantity(winSize);

  let { articles, isLoading, count } = useArticles(
    page,
    quantity,
    order,
    keyword
  );

  const pageSection = ~~((page - 1) / 5) * 5;

  return (
    <>
      {/* 디바운스 추가 */}
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
      <Pagination
        pages={[page, setPage]}
        count={count}
        quantity={quantity}
        pageSection={pageSection}
      />
    </>
  );
}

export default Products;
