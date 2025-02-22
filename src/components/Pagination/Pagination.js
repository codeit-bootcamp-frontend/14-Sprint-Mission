import clsx from "clsx";
import { useSearchParams } from "react-router-dom";

import ArrowLeftIcon from "../../assets/icons/ic_arrow_left.svg";
import styles from "./Pagination.module.css";

const Pagination = ({
  currentPageNumber = 1,
  pageSize = 5,
  totalCount = 0,
  showItemCount = 5,
  className,
}) => {
  const [, setSearchParams] = useSearchParams();

  const mod = currentPageNumber % pageSize;
  const value = Math.floor(currentPageNumber / pageSize);
  const currentPage = mod === 0 ? value - 1 : value;

  const isDivisibleTotalCount = totalCount % pageSize === 0;
  const totalPage = Math.floor(totalCount / showItemCount);
  const totalFullPageCount = isDivisibleTotalCount ? totalPage : totalPage + 1;

  const leftPages = totalFullPageCount - currentPage * pageSize;
  const pageLength = leftPages >= pageSize ? pageSize : leftPages;

  const pageNumberArray = Array.from(
    { length: pageLength },
    (_, i) => currentPage * pageSize + i + 1
  );

  const minimumPageNumberArray =
    pageNumberArray.length > 0 ? pageNumberArray : [1];

  const canMovePrev = pageLength > 0 && currentPageNumber !== 1;
  const canMoveNext = currentPageNumber < totalFullPageCount;

  const offSetClickHandler = (offset) => {
    setSearchParams((prev) => {
      const newSearchParams = new URLSearchParams(prev);
      newSearchParams.set("page", currentPageNumber + offset);

      return newSearchParams;
    });
  };

  const movePageClickHandler = (pageNumber) => {
    if (pageNumber !== currentPageNumber) {
      setSearchParams((prev) => {
        const newSearchParams = new URLSearchParams(prev);
        newSearchParams.set("page", pageNumber);

        return newSearchParams;
      });
    }
  };

  return (
    <ul className={clsx([styles.pagination_list, className])}>
      <li className={styles.pagination_list_item}>
        <button
          type="button"
          onClick={() => offSetClickHandler(-1)}
          disabled={!canMovePrev}
        >
          <img src={ArrowLeftIcon} alt="왼쪽 화살표" />
        </button>
      </li>
      {minimumPageNumberArray.map((pageNumber) => (
        <li
          key={pageNumber}
          className={clsx([
            styles.pagination_list_item,
            {
              [styles.active]: pageNumber === currentPageNumber,
            },
          ])}
        >
          <button
            type="button"
            onClick={() => movePageClickHandler(pageNumber)}
            disabled={pageLength < 0}
          >
            {pageNumber}
          </button>
        </li>
      ))}
      <li className={clsx([styles.pagination_list_item, styles.left])}>
        <button
          type="button"
          onClick={() => offSetClickHandler(1)}
          disabled={!canMoveNext}
        >
          <img src={ArrowLeftIcon} alt="오른쪽 화살표" />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
