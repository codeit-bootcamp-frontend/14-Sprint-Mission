import React, { useEffect, useState } from "react";
import "./body.css";
import Card from "./Card";
import { getProduct } from "./api/api";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import PaginationButton from "./PaginationButton";
import { Link } from "react-router-dom";

const Body = () => {
  const [bestProduct, setbestProduct] = useState([]);
  const [allProduct, setAllProduct] = useState([]);
  const [pageSize, setPageSize] = useState(10);
  const [pageNum, setPageNum] = useState(1);
  const [paginationNum, setPaginationNum] = useState([]);
  const [clickedPage, setClickedPage] = useState(1);
  const [showPagination, setShowPagination] = useState(0);

  const getBestProduct = async () => {
    let hasMore = true;
    let page = 1;
    let allProductForSort = [];
    let paginationNumber = [];

    while (hasMore) {
      const response = await getProduct(page);
      console.log(response);
      paginationNumber = [...paginationNumber, page];
      allProductForSort = [...allProductForSort, ...response.list];
      console.log(
        `Offset: ${page}, 응답 개수: ${response.list.length}, 전체 개수: ${response.totalCount}`
      );
      page += 1;
      if (allProductForSort.length >= response.totalCount) {
        hasMore = false;
      }
    }
    setPaginationNum(paginationNumber);
    console.log(paginationNum);
    // sort는 원본 배열을 직접 바꾼다 따라서 복사해줘야 함
    const sortedData = [...allProductForSort]
      .sort((a, b) => b.favoriteCount - a.favoriteCount)
      .slice(0, 4);
    setbestProduct(sortedData);
  };

  const getAllProduct = async () => {
    const response = await getProduct(pageNum, pageSize);
    setAllProduct(response.list);
  };

  // 뒤로가기 버튼 클릭
  const goBack = () => {
    setShowPagination((prevNum) => Math.max(prevNum - 5, 0));
  };

  // 앞으로 가기 버튼
  const goFront = () => {
    setShowPagination((prevNum) => prevNum + 5);
  };

  // 페이지네이션 버튼 클릭해서 불러오는 값 바꾸기
  const buttonClick = (num) => {
    setClickedPage(() => num);
    setPageNum(() => num);
  };

  useEffect(() => {
    getBestProduct();
    getAllProduct();
  }, []);

  useEffect(() => {
    getAllProduct();
  }, [clickedPage]);

  return (
    <div className="body">
      <span className="best-product">베스트 상품</span>
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
            <CiSearch className="search-icon"/>
            <input
              type="search"
              placeholder="검색할 상품을 입력해주세요"
              className="search-input"
            />
          </div>
          <Link to={"/additem"}>
            <button className="search-button">상품 등록하기</button>
          </Link>
          <select name="category" id="category" className="search-option">
            <option value="latest">최신순</option>
            <option value="sortByLike">좋아요순</option>
          </select>
        </div>
      </div>

      <div className="all-product-cardContainer">
        {allProduct.map((product, index) => (
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
