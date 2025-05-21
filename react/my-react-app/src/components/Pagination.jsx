import React from "react";
import styled from "styled-components";

const PaginationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin: 32px 0;
`;

const PageButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid #e5e8ec;
  background-color: #ffffff;
  color: #4e5968;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover:not(:disabled) {
    border-color: #3692ff;
    background-color: #f0f7ff;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  &.active {
    background-color: #3692ff;
    color: #ffffff;
    border-color: #3692ff;
  }

  &.first,
  &.last,
  &.prev,
  &.next {
    font-weight: bold;
  }
`;

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
    <PaginationContainer>
      {/* 첫 페이지 버튼 */}
      <PageButton
        className="first"
        onClick={() => onPageChange(1)}
        disabled={currentPage === 1}
      >
        &lt;&lt;
      </PageButton>

      {/* 이전 페이지 그룹 버튼 */}
      <PageButton
        className="prev"
        onClick={() =>
          onPageChange(Math.max(1, 5 * Math.floor((currentPage - 1) / 5)))
        }
        disabled={!canGoPrevGroup}
      >
        &lt;
      </PageButton>

      {/* 페이지 번호 버튼들 */}
      {getPageGroup().map((page) => (
        <PageButton
          key={page}
          className={page === currentPage ? "active" : ""}
          onClick={() => onPageChange(page)}
        >
          {page}
        </PageButton>
      ))}

      {/* 다음 페이지 그룹 버튼 */}
      <PageButton
        className="next"
        onClick={() => onPageChange(5 * Math.floor((currentPage - 1) / 5) + 6)}
        disabled={!canGoNextGroup}
      >
        &gt;
      </PageButton>

      {/* 마지막 페이지 버튼 */}
      <PageButton
        className="last"
        onClick={() => onPageChange(totalPages)}
        disabled={currentPage === totalPages}
      >
        &gt;&gt;
      </PageButton>
    </PaginationContainer>
  );
}

export default Pagination;
