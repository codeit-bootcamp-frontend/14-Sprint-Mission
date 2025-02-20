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
  const [isSearch, setIsSearch] = useState(false);
  const [searchProduct, setSearchProduct] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [option, setOption] = useState("latest");
  const [browserSize, setBrowseSize] = useState(window.innerWidth);

  const getBestProduct = async (slice) => {
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
      .slice(0, slice);
    setbestProduct(sortedData);
  };

  const getAllProduct = async (pageSize) => {
    if (option === "latest") {
      const response = await getProduct(pageNum, pageSize);
      setAllProduct(response.list);
    } else {
      const response = await getProduct(pageNum, pageSize);
      const sortedByFavorite = response.list.sort(
        (a, b) => b.favoriteCount - a.favoriteCount
      );
      setAllProduct(sortedByFavorite);
    }
  };

  // 뒤로가기 버튼 클릭
  const goBack = () => {
    setShowPagination((prevNum) => Math.max(prevNum - 5, 0));
  };

  // 앞으로 가기 버튼
  const goFront = () => {
    if (paginationNum.length <= showPagination) {
      return;
    }
    setShowPagination((prevNum) => prevNum + 5);
  };

  // 페이지네이션 버튼 클릭해서 불러오는 값 바꾸기
  const buttonClick = (num) => {
    setClickedPage(() => num);
    setPageNum(() => num);
  };

  // 검색하기 위해서 엔터를 눌렀을 때
  // 고민 : 전체 개수의 길이로 버튼의 개수를 만들려면 전체를 다 읽어봐야 하는데 그럼 페이지네이션의 의미가...?
  const searchSubmit = async (value) => {
    setIsSearch(true);
    setSearchValue(value);
    if (option === "latest") {
      if (window.innerWidth <= 767) {
        const pagesize = 4;
        const response = await getProduct(pageNum, pagesize, value);
        setSearchProduct(response.list);
      } else if (window.innerWidth <= 1199) {
        const pagesize = 6;
        const response = await getProduct(pageNum, pagesize, value);
        setSearchProduct(response.list);
      } else {
        const response = await getProduct(pageNum, pageSize, value);
        setSearchProduct(response.list);
      }
    } else {
      if (window.innerWidth <= 767) {
        const pagesize = 4;
        const response = await getProduct(pageNum, pagesize, value);
        const sortedByFavorite = response.list.sort(
          (a, b) => b.favoriteCount - a.favoriteCount
        );
        setSearchProduct(sortedByFavorite);
      } else if (window.innerWidth <= 1199) {
        const pagesize = 6;
        const response = await getProduct(pageNum, pagesize, value);
        const sortedByFavorite = response.list.sort(
          (a, b) => b.favoriteCount - a.favoriteCount
        );
        setSearchProduct(sortedByFavorite);
      } else {
        const response = await getProduct(pageNum, pageSize, value);
        const sortedByFavorite = response.list.sort(
          (a, b) => b.favoriteCount - a.favoriteCount
        );
        setSearchProduct(sortedByFavorite);
      }
    }
  };

  // 옵션 바뀌었을 때 동작하는 함수(정렬 바꾸기)
  const handleOptionChange = (e) => {
    if (e.target.value === "latest" && !isSearch) {
      setOption(e.target.value);
      const sortedByTime = [...allProduct].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setAllProduct(sortedByTime);
    } else if (e.target.value === "sortByLike" && !isSearch) {
      setOption(e.target.value);
      const sortedByFavorite = [...allProduct].sort(
        (a, b) => b.favoriteCount - a.favoriteCount
      );
      setAllProduct(sortedByFavorite);
    } else if (e.target.value === "latest" && isSearch) {
      setOption(e.target.value);
      const sortedByTime = [...searchProduct].sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setSearchProduct(sortedByTime);
    } else if (e.target.value === "sortByLike" && isSearch) {
      setOption(e.target.value);
      const sortedByFavorite = [...searchProduct].sort(
        (a, b) => b.favoriteCount - a.favoriteCount
      );
      setSearchProduct(sortedByFavorite);
    }
  };

  // tablet 사이즈에서 데이터 받아오는 기능 추가
  useEffect(() => {
    const handleResize = () => {
      setBrowseSize(window.innerWidth);
    };

    // 리스너 추가
    window.addEventListener("resize", handleResize);

    if (window.innerWidth <= 767) {
      // 모바일 조건을 가장 먼저 체크
      getBestProduct(1);
      getAllProduct(4);
    } else if (window.innerWidth <= 1199) {
      getBestProduct(2);
      getAllProduct(6);
    } else {
      getBestProduct(4);
      getAllProduct(10);
    }

    // 클린업
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [browserSize]);

  useEffect(() => {
    if (isSearch !== true) {
      if (window.innerWidth <= 767) {
        getAllProduct(4);
      } else if (window.innerWidth <= 1199) {
        getAllProduct(6);
      } else {
        getAllProduct(10);
      }
    } else {
      searchSubmit(searchValue);
    }
  }, [clickedPage]);

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
                  searchSubmit(event.target.value);
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
              onChange={handleOptionChange}
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
