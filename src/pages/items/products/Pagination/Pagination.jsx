import * as S from "../style";
import PageArrow from "@/assets/icons/ico_arrow_right.svg";

function Pagination({ pages, count, quantity, pageSection }) {
  const [page, setPage] = pages;

  return (
    <S.Pagination>
      <button disabled={page === 1} onClick={() => setPage((prev) => prev - 1)}>
        <img src={PageArrow} alt="" />
      </button>
      {Array(Math.min(~~(count / quantity) - pageSection + 1, 5))
        .fill("")
        .map((_, i) => (
          <button
            className="number"
            disabled={page == pageSection + 1 + i}
            onClick={() => setPage(pageSection + 1 + i)}
            key={i}
          >
            {pageSection + 1 + i}
          </button>
        ))}
      <button
        disabled={page === ~~(count / quantity) + 1}
        onClick={() => setPage((prev) => prev + 1)}
      >
        <img src={PageArrow} alt="" style={{ rotate: "180deg" }} />
      </button>
    </S.Pagination>
  );
}

export default Pagination;
