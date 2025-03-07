import React, { useEffect, useState } from "react";
import BestProduct from "../components/BestProduct";
import AllProduct from "../components/AllProduct";
import Pagination from "../components/Pagination";
import "../styles/body.css";
import { handleOptionChange } from "../utils/productFunctions";
import SearchContext from "../Context/SearchContext";
import { useProducts } from "../hooks/useProducts";

const Body = () => {
  const [pageNum, setPageNum] = useState(1);
  const [clickedPage, setClickedPage] = useState(1);
  const [showPagination, setShowPagination] = useState(0);
  const [isSearch, setIsSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [option, setOption] = useState("recent");
  const [browserSize, setBrowseSize] = useState(window.innerWidth);
  const bestPlaceHolderCount =
    browserSize <= 767 ? 1 : browserSize <= 1199 ? 2 : 4;
  const allPlaceHolderCount =
    browserSize <= 767 ? 4 : browserSize <= 1199 ? 6 : 10;

  const { bestProduct } = useProducts({
    page: 1,
    orderBy: "favorite",
    placeHolderCount: bestPlaceHolderCount,
    best: true,
  });

  const { searchProduct, allProduct, paginationNum, setAllProduct } =
    useProducts({
      page: pageNum,
      orderBy: option,
      placeHolderCount: allPlaceHolderCount,
      best: false,
      value: searchValue,
    });

  useEffect(() => {
    const handleResize = () => {
      setBrowseSize(window.innerWidth);
    };

    console.log("현재 페이지네이션 상태:", paginationNum);

    // 리스너 추가
    window.addEventListener("resize", handleResize);

    // 클린업
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="body">
      {/* 베스트 상품 */}
      <BestProduct
        bestProduct={bestProduct}
        bestPlaceHolderCount={bestPlaceHolderCount}
      />

      <SearchContext.Provider
        value={{
          pageNum,
          option,
          allPlaceHolderCount,
          searchProduct,
          setIsSearch,
          setSearchValue,
          setOption,
          setAllProduct,
          handleOptionChange,
        }}
      >
        <AllProduct
          isSearch={isSearch}
          searchProduct={searchProduct}
          allProduct={allProduct}
          allPlaceHolderCount={allPlaceHolderCount}
        />
      </SearchContext.Provider>

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
