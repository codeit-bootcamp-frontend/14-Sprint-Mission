import React, { useState } from "react";
import "../styles/body.css";
import Card from "./Card";
import AllProductHeader from "./AllProductHeader";
import { useProducts } from "../hooks/useProducts";
import Pagination from "./Pagination";

const AllProduct = ({ allPlaceHolderCount }) => {
  const [showPagination, setShowPagination] = useState(0);
  const [clickedPage, setClickedPage] = useState(1);
  const [pageNum, setPageNum] = useState(1);
  const [option, setOption] = useState("recent");
  const [searchValue, setSearchValue] = useState("");

  const { product, paginationNum } = useProducts({
    page: pageNum,
    orderBy: option,
    placeHolderCount: allPlaceHolderCount,
    value: searchValue,
  });

  return (
    <>
      {/* 전체 상품 헤더 */}
      <AllProductHeader setOption={setOption} setSearchValue={setSearchValue} />

      {/* 전체 상품 & 검색 상품 */}
      <div className="all-product-cardContainer">
        {product.length > 0
          ? product.map((product, index) => (
              <Card
                key={index}
                images={product.images}
                name={product.name}
                price={product.price}
                favoriteCount={product.favoriteCount}
                showType="전체상품"
                productExist={true}
                id={product.id}
              />
            ))
          : Array.from({ length: allPlaceHolderCount }, (_, index) => (
              <Card key={index} productExist={false} showType="전체상품" />
            ))}
      </div>

      {/* 페이지네이션 컴포넌트 */}
      <Pagination
        setShowPagination={setShowPagination}
        showPagination={showPagination}
        setClickedPage={setClickedPage}
        setPageNum={setPageNum}
        clickedPage={clickedPage}
        paginationNum={paginationNum}
      />
    </>
  );
};

export default AllProduct;
