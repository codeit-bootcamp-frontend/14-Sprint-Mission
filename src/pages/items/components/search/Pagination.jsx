import { useCallback, useEffect, useState } from "react";
import IconArrow from "../../../../assets/images/items/arrow_right.svg";

export default function Pagination({ current = 1, total = 0, onPageChange }) {
  const [offset, setOffset] = useState(1);
  const [pagingList, setPageList] = useState([]);

  const memoizePagingList = useCallback(async () => {
    if (current > total) return;
    const newArr = new Array(total >= 5 ? 5 : total)
      .fill()
      .map((_, idx) =>
        current < 3
          ? idx + 1
          : current > total - 3
          ? total - (total >= 5 ? 5 : total) + idx + 1
          : current - 2 + idx
      );
    setPageList(newArr);
    setOffset(current);
  }, [current, total]);

  useEffect(() => {
    memoizePagingList();
  }, [memoizePagingList]);

  return (
    <div className="display-flex justify-center gap-4" id="pagination">
      <button
        className="icon-wrapper surface-secondary-0"
        onClick={() => onPageChange(offset - 1)}
        disabled={offset === 1}
      >
        <img src={IconArrow} id="left" />
      </button>
      {pagingList.map((num) =>
        num === offset ? (
          <button key={num} className="text-invert surface-primary-100" id="page-active">
            {num}
          </button>
        ) : (
          <button
            key={num}
            className="text-secondary-500 surface-secondary-0"
            onClick={() => onPageChange(num)}
          >
            {num}
          </button>
        )
      )}
      <button
        className="icon-wrapper surface-secondary-0"
        onClick={() => onPageChange(offset + 1)}
        disabled={offset === total}
      >
        <img src={IconArrow} id="right" />
      </button>
    </div>
  );
}
