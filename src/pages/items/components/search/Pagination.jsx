import { useCallback, useEffect, useState } from "react";
import IconArrow from "../../../../assets/images/items/arrow_right.svg";

export default function Pagination({ current = 1, total = 0, onPageChange }) {
  const [pagingList, setPageList] = useState([]);

  /**
   * 페이지네이션 깜빡임 최소화를 위한 페이지 목록 세팅 함수 메모이제이션
   */
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
  }, [current, total]);

  useEffect(() => {
    memoizePagingList();
  }, [memoizePagingList]);

  return (
    <div className="display-flex justify-center gap-4" id="pagination">
      <button
        className="icon-wrapper surface-secondary-0"
        onClick={() => onPageChange(current - 1)}
        disabled={current === 1}
      >
        <img src={IconArrow} id="left" />
      </button>
      {pagingList.map((num) =>
        num === current ? (
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
        onClick={() => onPageChange(current + 1)}
        disabled={current === total}
      >
        <img src={IconArrow} id="right" />
      </button>
    </div>
  );
}
