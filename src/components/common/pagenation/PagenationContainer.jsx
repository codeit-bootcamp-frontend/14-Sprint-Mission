import { useEffect, useState } from "react";

import arrowLeft from "../../../asset/icon/arrow_left.svg";
import arrowRight from "../../../asset/icon/arrow_right.svg";
import "./pagenation.css";

export default function PagenationContainer({
  totalCount,
  itemsPerPage,
  setSearchParams,
}) {
  const pageCount = Math.ceil(totalCount / itemsPerPage);
  const groupSize = 5;

  const [pageList, setPageList] = useState([]);
  const [currentGroup, setCurrentGroup] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [visiblePages, setVisiblePages] = useState([]);

  // 그룹 이동 핸들러
  const handlePrevGroup = () => {
    if (currentGroup > 0) {
      setCurrentGroup(currentGroup - 1);
    }
  };

  const handleNextGroup = () => {
    if ((currentGroup + 1) * groupSize < pageCount) {
      setCurrentGroup(currentGroup + 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setSearchParams({ page: pageNumber });
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    if (pageCount > 0) {
      const newPageList = Array.from({ length: pageCount }, (_, i) => i + 1);
      setPageList(newPageList);
    }
  }, [pageCount]);

  useEffect(() => {
    // 현재 그룹에서 보여줄 페이지들
    const startIndex = currentGroup * groupSize;
    setVisiblePages(pageList.slice(startIndex, startIndex + groupSize));
  }, [currentGroup, pageList]);

  return (
    <article className="pagination-wrapper">
      <button className="arrow-btn" onClick={handlePrevGroup}>
        <img src={arrowLeft} alt="왼쪽 페이지 그룹 이동 버튼" />
      </button>
      {visiblePages.map((pageNumber) => (
        <button
          className={`page ${pageNumber === currentPage ? "active" : ""}`}
          key={pageNumber}
          onClick={() => handlePageClick(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
      <button className="arrow-btn" onClick={handleNextGroup}>
        <img src={arrowRight} alt="왼쪽 페이지 그룹 이동 버튼" />
      </button>
    </article>
  );
}
