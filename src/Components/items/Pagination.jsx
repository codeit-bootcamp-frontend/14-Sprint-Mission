import btnRight from "../../assets/btn-right.png";
import btnLeft from "../../assets/btn-left.png";

const Pagination = ({
  currentPage,
  onPageClick,
  totalCount,
  visibleCount,
  pageSize,
}) => {
  const totalPages = Math.ceil(totalCount / pageSize);
  console.log(totalCount);
  console.log(visibleCount);
  console.log(totalPages);

  const pageGroupSize = 5;
  const currentGroup = Math.floor((currentPage - 1) / pageGroupSize);
  const startPage = currentGroup * pageGroupSize + 1;
  const endPage = Math.min(startPage + pageGroupSize - 1, totalPages);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      onPageClick(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    onPageClick(currentPage + 1);
  };

  return (
    <div className="flex justify-center gap-2 items-center mb-[35px]">
      {/* 이전 페이지 버튼 */}
      <button onClick={handlePrevPage} disabled={currentPage === 1}>
        <img src={btnLeft} alt="left-button" className="w-[40px] h-[40px]" />
      </button>

      {/* 페이지 번호 버튼 */}
      {Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i
      ).map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => onPageClick(pageNum)}
          className={`w-[40px] h-[40px] rounded-full border ${
            currentPage === pageNum
              ? "bg-[#2F80ED] text-[#F9FAFB]"
              : "bg-white text-[#6B7280]"
          }`}
        >
          <div className="text-[16px] font-[600]">{pageNum}</div>
        </button>
      ))}

      {/* 다음 페이지 버튼 */}
      <button onClick={handleNextPage} disabled={currentPage === totalPages}>
        <img src={btnRight} alt="right-button" className="w-[40px] h-[40px]" />
      </button>
    </div>
  );
};

export default Pagination;
