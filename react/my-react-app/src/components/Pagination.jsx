import React from "react";
import "./Pagination.css";

function Pagination({ currentPage, totalPages, onPageChange }) {
  // 페이지 그룹 나누기 (최대 5개 페이지 버튼만 표시)
  const getPageGroup = () => {
    const groupSize = 5;
    const currentGroup = Math.floor((currentPage - 1) / groupSize);
    const startPage = currentGroup * groupSize + 1;
    const endPage = Math.min(startPage + groupSize - 1, totalPages);

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );
  };

  // 이전/다음 페이지 그룹 이동 가능한지
  const canGoPrevGroup = currentPage > 5;
  const canGoNextGroup = 5 * Math.floor((currentPage - 1) / 5) + 5 < totalPages;

  return (
    <div className="pagination">
      {/* 첫 페이지 버튼 */}
      <button
        className="page-button first"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        &lt;&lt;
      </button>

      {/* 이전 페이지 그룹 버튼 */}
      <button
        className="page-button prev"
        onClick={() =>
          onPageChange(Math.max(1, 5 * Math.floor((currentPage - 1) / 5)))
        }
        disabled={!canGoPrevGroup}
      >
        &lt;
      </button>

      {/* 페이지 번호 버튼들 */}
      {getPageGroup().map((page) => (
        <button
          key={page}
          className={`page-button ${page === currentPage ? "active" : ""}`}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}

      {/* 다음 페이지 그룹 버튼 */}
      <button
        className="page-button next"
        onClick={() => onPageChange(5 * Math.floor((currentPage - 1) / 5) + 6)}
        disabled={!canGoNextGroup}
      >
        &gt;
      </button>

      {/* 마지막 페이지 버튼 */}
      <button
        className="page-button last"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        &gt;&gt;
      </button>
    </div>
  );
}

export default Pagination;
