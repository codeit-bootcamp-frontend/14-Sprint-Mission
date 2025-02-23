import React, { useEffect, useState } from "react";
import "./body.css";
import Card from "./Card";
import { getProduct } from "./api/api";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import PaginationButton from "./PaginationButton";
import { Link } from "react-router-dom";
import {
  getAllProduct,
  getBestProduct,
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

  // 뒤로가기 버튼 클릭
  const goBack = () => {
    setShowPagination((prevNum) => Math.max(prevNum - 5, 0));
  };

  // 앞으로 가기 버튼
  const goFront = () => {
    if (showPagination + 5 <= paginationNum.length) {
      setShowPagination((prevNum) => prevNum + 5);
    }
  };

  // 페이지네이션 버튼 클릭해서 불러오는 값 바꾸기
  const buttonClick = (num) => {
    // 클릭한 버튼 색을 위한 상태 변경
    setClickedPage(() => num);
    // page 숫자를 변경해서 서버로 보내기 위한 상태 변경
    setPageNum(() => num);
  };

  useEffect(() => {
    const handleResize = () => {
      setBrowseSize(window.innerWidth);
    };

    // 리스너 추가
    window.addEventListener("resize", handleResize);

    if (window.innerWidth <= 767) {
      // 모바일 조건을 가장 먼저 체크
      getBestProduct(1, setbestProduct);
      getAllProduct({
        pageSize: 4,
        setAllProduct,
        option,
        setPaginationNum,
        pageNum,
      });
    } else if (window.innerWidth <= 1199) {
      getBestProduct(2, setbestProduct);
      getAllProduct({
        pageSize: 6,
        setAllProduct,
        option,
        setPaginationNum,
        pageNum,
      });
    } else {
      getBestProduct(4, setbestProduct);
      getAllProduct({
        pageSize: 10,
        setAllProduct,
        option,
        setPaginationNum,
        pageNum,
      });
    }

    // 클린업
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [browserSize]);

  useEffect(() => {
    if (isSearch !== true) {
      if (window.innerWidth <= 767) {
        getAllProduct({
          pageSize: 4,
          setAllProduct,
          option,
          setPaginationNum,
          pageNum,
        });
      } else if (window.innerWidth <= 1199) {
        getAllProduct({
          pageSize: 6,
          setAllProduct,
          option,
          setPaginationNum,
          pageNum,
        });
      } else {
        getAllProduct({
          pageSize: 10,
          setAllProduct,
          option,
          setPaginationNum,
          pageNum,
        });
      }
    } else {
      searchSubmit({
        value: searchValue,
        pageNum,
        pageSize,
        option,
        setIsSearch,
        setSearchValue,
        setSearchProduct,
        setPaginationNum,
      });
    }
  }, [clickedPage, option]);

  return (
    <div className="body">
      <div className="best-product-wrap">
        <span className="best-product">베스트 상품</span>
      </div>
      <div className="card-container">
        {bestProduct.map((product, index) => (
          <Card
            key={index}
            images={product.images}
            name={product.name}
            price={product.price}
            favoriteCount={product.favoriteCount}
          />
        ))}
      </div>
      <div className="all-product-header">
        <span className="all-product">전체 상품</span>

        <div className="search-product">
          <div className="search-container">
            <CiSearch className="search-icon" />
            <input
              type="search"
              placeholder="검색할 상품을 입력해주세요"
              className="search-input"
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  searchSubmit({
                    value: event.target.value,
                    pageNum,
                    pageSize,
                    option,
                    setIsSearch,
                    setSearchValue,
                    setSearchProduct,
                    setPaginationNum,
                  });
                }
              }}
            />
          </div>
          <div className="button-option">
            <Link to={"/additem"}>
              <button className="add-product-button">상품 등록하기</button>
            </Link>
            <select
              name="category"
              id="category"
              className="search-option"
              onChange={(e) =>
                handleOptionChange({
                  e,
                  setOption,
                  isSearch,
                  searchProduct,
                  setAllProduct,
                  setSearchProduct,
                  pageNum,
                  pageSize,
                })
              }
            >
              <option value="latest">최신순</option>
              <option value="sortByLike">좋아요순</option>
            </select>
          </div>
        </div>
      </div>

      <div className="all-product-cardContainer">
        {isSearch
          ? searchProduct.map((product, index) => (
              <Card
                key={index}
                images={product.images}
                name={product.name}
                price={product.price}
                favoriteCount={product.favoriteCount}
                showType={"전체상품"}
              />
            ))
          : allProduct.map((product, index) => (
              <Card
                key={index}
                images={product.images}
                name={product.name}
                price={product.price}
                favoriteCount={product.favoriteCount}
                showType={"전체상품"}
              />
            ))}
      </div>

      <div className="pagination-wrap">
        <button className="back-button" onClick={() => goBack()}>
          <IoIosArrowBack className="arrow" />
        </button>

        {paginationNum
          .slice(showPagination, showPagination + 5)
          .map((num, index) => (
            <PaginationButton
              key={index}
              pageNumber={num}
              isClicked={clickedPage === num}
              onClick={() => buttonClick(num)}
            />
          ))}

        <button className="forward-button" onClick={() => goFront()}>
          <IoIosArrowForward className="arrow" />
        </button>
      </div>
    </div>
  );
};

export default Body;
