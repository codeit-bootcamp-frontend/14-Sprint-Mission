import IconArrow from "../../../assets/images/items/arrow_right.svg";

export default function Pagination({ current = 1, total = 5, onPageChange }) {
  const pageArray = new Array(total >= 5 ? 5 : total).fill();
  const pagingList = pageArray.map((_, idx) =>
    current < 3 ? idx + 1 : current > total - 3 ? total - 5 + idx + 1 : current - 2 + idx
  );
  return (
    <div className="display-flex justify-center gap-4" id="pagination">
      <button className="surface-secondary-0" onClick={() => onPageChange(current - 1)}>
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
      <button className="surface-secondary-0" onClick={() => onPageChange(current + 1)}>
        <img src={IconArrow} id="right" />
      </button>
    </div>
  );
}
