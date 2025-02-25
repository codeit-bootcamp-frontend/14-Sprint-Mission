import React, { useEffect, useState } from "react";
import BestProduct from "./BestProduct";
import AllProduct from "./AllProduct";
import Pagination from "./Pagination";
import "./body.css";
import {
  getAllProduct,
  getBestProduct,
  getProductFetch,
  handleOptionChange,
  searchSubmit,
} from "./utils/productFunctions";

const Body = () => {
  const [bestProduct, setbestProduct] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [pageNum, setPageNum] = useState(1);
  const [paginationNum, setPaginationNum] = useState([]);
  const [clickedPage, setClickedPage] = useState(1);
  const [showPagination, setShowPagination] = useState(0);
  const [isSearch, setIsSearch] = useState(false);
  const [searchProduct, setSearchProduct] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [option, setOption] = useState("latest");
  const [browserSize, setBrowseSize] = useState(window.innerWidth);
  const bestPlaceHolderCount =
    browserSize <= 767 ? 1 : browserSize <= 1199 ? 2 : 4;
  const allPlaceHolderCount =
    browserSize <= 767 ? 4 : browserSize <= 1199 ? 6 : 10;

  useEffect(() => {
    const handleResize = () => {
      setBrowseSize(window.innerWidth);
    };

    // 리스너 추가
    window.addEventListener("resize", handleResize);

    getProductFetch({
      isSearch,
      setAllProduct,
      option,
      setPaginationNum,
      pageNum,
      searchSubmit,
      searchValue,
      setIsSearch,
      setSearchValue,
      setSearchProduct,
      setbestProduct,
      pageSize,
    });

    // 클린업
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [browserSize]);

  useEffect(() => {
    getProductFetch({
      isSearch,
      setAllProduct,
      option,
      setPaginationNum,
      pageNum,
      searchSubmit,
      searchValue,
      setIsSearch,
      setSearchValue,
      setSearchProduct,
      setbestProduct,
      pageSize,
    });
  }, [clickedPage, option]);

  return (
    <div className="body">
      {/* 베스트 상품 */}
      <BestProduct
        bestProduct={bestProduct}
        bestPlaceHolderCount={bestPlaceHolderCount}
      />

      <AllProduct
        pageNum={pageNum}
        pageSize={pageSize}
        option={option}
        setIsSearch={setIsSearch}
        setSearchValue={setSearchValue}
        setSearchProduct={setSearchProduct}
        setPaginationNum={setPaginationNum}
        searchSubmit={searchSubmit}
        setOption={setOption}
        isSearch={isSearch}
        searchProduct={searchProduct}
        setAllProduct={setAllProduct}
        allProduct={allProduct}
        allPlaceHolderCount={allPlaceHolderCount}
        handleOptionChange={handleOptionChange}
      />

      {/* 페이지네이션 컴포넌트 */}
      <Pagination
        setShowPagination={setShowPagination}
        showPagination={showPagination}
        setClickedPage={setClickedPage}
        setPageNum={setPageNum}
        clickedPage={clickedPage}
        paginationNum={paginationNum}
      />
    </div>
  );
};

export default Body;
