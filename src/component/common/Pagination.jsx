import "./Pagination.css";
import { useEffect, useState } from "react";

function PageNum({ totalPage, currentPage, setPage }) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  const startPage = Math.floor((currentPage - 1) / 5) * 5;
  const visiblePageNumbers = pageNumbers.slice(startPage, startPage + 5);

  return (
    <div className="pagination-num-div">
      {visiblePageNumbers.map((num) => {
        return (
          <span
            key={num}
            onClick={() => setPage(num)}
            className={`pagination-num ${
              currentPage === num ? "selected" : ""
            }`}
          >
            {num}
          </span>
        );
      })}
    </div>
  );
}

function Pagination({ totalPage, currentPage, setPage }) {
  const isPrev = currentPage > 1;
  const isNext = currentPage < totalPage;

  // 다음 페이지 버튼 클릭릭
  const paginationRightBtnClick = () => {
    if (isNext) setPage(currentPage + 1);
  };

  // 이전 페이지 버튼 클릭
  const paginationLeftBtnClick = () => {
    if (isPrev) setPage(currentPage - 1);
  };

  return (
    <div className="pagination-div">
      {isPrev && (
        <img
          src="./image/pagination_left.png"
          onClick={paginationLeftBtnClick}
          className="pagination-btn"
        />
      )}
      <PageNum
        totalPage={totalPage}
        currentPage={currentPage}
        setPage={setPage}
      />

      {isNext && (
        <img
          src="./image/pagination_right.png"
          onClick={paginationRightBtnClick}
          className="pagination-btn"
        />
      )}
    </div>
  );
}

export default Pagination;
