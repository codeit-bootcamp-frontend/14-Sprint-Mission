import React, { useState } from "react";
import "./Pagenation.scss";

function Pagenation({ totalCount, pageSize, currentPage, onPageChange }) {
  const [pageRange, setPageRange] = useState([1, 5]);
  const totalPage = Math.ceil(totalCount / pageSize);
  const pages = Array.from({ length: totalPage }, (_, i) => i + 1);
  const visiblePages = pages.slice(pageRange[0] - 1, pageRange[1]);

  const handlePrev = () => {
    if (pageRange[0] > 1) {
      const newStart = pageRange[0] - 5;

      setPageRange([newStart, pageRange[1] - 5]);
      onPageChange(newStart);
    }
  };

  const handleNext = () => {
    if (pageRange[1] < totalPage) {
      const newStart = pageRange[0] + 5;

      setPageRange([pageRange[0] + 5, pageRange[1] + 5]);
      onPageChange(newStart);
    }
  };

  return (
    <div className="pagenation">
      <button onClick={handlePrev} disabled={pageRange[0] === 1}></button>
      {visiblePages.map((page) => (
        <button
          key={page}
          className={page === currentPage ? "active" : ""}
          onClick={() => onPageChange(page)}
        >
          {page}
        </button>
      ))}
      <button
        onClick={handleNext}
        disabled={pageRange[1] === totalPage}
      ></button>
    </div>
  );
}

export default Pagenation;
