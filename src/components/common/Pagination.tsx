import { useEffect } from "react";
import "./Pagination.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

function Pagination({ currentPage, totalPages, onPageChange }) {
  const pageNumbers = [];
  const pagesPerGroup = 5;

  // totalPages 유효성 검사 및 초기값 처리
  if (totalPages && totalPages > 0 && totalPages < Number.MAX_SAFE_INTEGER) {
    const currentGroup = Math.ceil(currentPage / pagesPerGroup);

    const startPage = (currentGroup - 1) * pagesPerGroup + 1; // 첫번째 버튼의 페이지
    const endPage = Math.min(currentGroup * pagesPerGroup, totalPages); // 마지막 버튼의 페이지

    for (let i = startPage; i <= endPage; i++) {
      pageNumbers.push(i);
    }
  }

  useEffect(() => {
    // 현재 페이지가 전체 페이지 수보다 높을때 마지막 페이지로 이동
    if (currentPage > totalPages && totalPages > 0) {
      onPageChange(totalPages);
    }
  }, [currentPage, onPageChange, totalPages]);

  return (
    <div className="pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <IoIosArrowBack size={16} />
      </button>
      {pageNumbers.map((number) => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={currentPage === number ? "active" : ""}
        >
          {number}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        <IoIosArrowForward size={16} />
      </button>
    </div>
  );
}

export default Pagination;
