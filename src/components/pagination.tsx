import { SetStateAction } from "react";
import styles from "./pagination.module.css";
import ArrowSvg from "./svg-components/arrow-svg";

export interface PaginationProps {
  currentPage: number;
  totalPage: number;
  setPage: React.Dispatch<SetStateAction<number>>;
}

export default function Pagination({
  currentPage,
  totalPage,
  setPage,
}: PaginationProps) {
  let pages;
  if (currentPage <= 3) {
    pages = Array.from({ length: 5 }, (_, i) => i + 1);
  } else if (currentPage >= totalPage - 3) {
    pages = Array.from({ length: 5 }, (_, i) => i + totalPage - 4);
  } else {
    pages = Array.from({ length: 5 }, (_, i) => i + currentPage - 2);
  }

  const leftIsDisabled = currentPage === 1;

  const rightIsDisable = currentPage === totalPage;

  const handleClick = (page: number) => {
    console.log(page);
    setPage(page);
  };

  return (
    <ul className={styles.pagesList}>
      <li key="prev">
        <button
          className={styles.arrowBtn}
          onClick={() => handleClick(currentPage - 1)}
          disabled={leftIsDisabled}
        >
          <ArrowSvg direction="left" disabled={leftIsDisabled} />
        </button>
      </li>
      {pages.map((page) => (
        <li key={page - 1} className={styles.el}>
          <button
            className={`${styles.pageBtn} ${
              page === currentPage && styles.active
            }`}
            onClick={() => handleClick(page)}
          >
            {page}
          </button>
        </li>
      ))}
      <li key="next">
        <button
          className={styles.arrowBtn}
          onClick={() => handleClick(currentPage + 1)}
          disabled={rightIsDisable}
        >
          <ArrowSvg direction="right" disabled={rightIsDisable} />
        </button>
      </li>
    </ul>
  );
}
