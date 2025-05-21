"use client";

import clsx from "clsx";
import { useRouter, useSearchParams } from "next/navigation";

import ArrowLeftIcon from "@/assets/icons/ic_arrow_left.svg";
import styles from "./Pagination.module.css";

type PaginationProps = {
  currentPageNumber: number;
  pageSize: number;
  totalCount: number;
  showItemCount: number;
  className?: string;
};

const Pagination = ({
  currentPageNumber = 1,
  pageSize = 5,
  totalCount = 0,
  showItemCount = 5,
  className,
}: PaginationProps) => {
  const router = useRouter();
  const searchParams = new URLSearchParams(useSearchParams());

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

  const offSetClickHandler = (offset: number) => {
    const newSearchParams = searchParams;
    newSearchParams.set("page", String(currentPageNumber + offset));
    router.push(`?${newSearchParams.toString()}`, { scroll: false });
  };

  const movePageClickHandler = (pageNumber: number) => {
    if (pageNumber !== currentPageNumber) {
      const newSearchParams = searchParams;
      newSearchParams.set("page", String(pageNumber));

      router.push(`?${newSearchParams.toString()}`, { scroll: false });
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
          <ArrowLeftIcon />
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
          <ArrowLeftIcon />
        </button>
      </li>
    </ul>
  );
};

export default Pagination;
