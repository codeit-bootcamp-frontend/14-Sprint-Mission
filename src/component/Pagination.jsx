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
  const [isNext, setIsNext] = useState(true);
  const [isPrev, setIsPrev] = useState(true);

  // 이전, 다음 버튼 활성화 여부
  const visiblePaginationBtn = () => {
    if (currentPage === 1) {
      setIsPrev(false);
    } else if (currentPage === totalPage) {
      setIsNext(false);
    } else {
      setIsNext(true);
      setIsPrev(true);
    }
  };

  useEffect(() => {
    visiblePaginationBtn();
  }, [currentPage]);

  // 다음 페이지 버튼 클릭릭
  const paginationRightBtnClick = () => {
    setPage(currentPage + 1);
  };

  // 이전 페이지 버튼 클릭
  const paginationLeftBtnClick = () => {
    setPage(currentPage - 1);
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
