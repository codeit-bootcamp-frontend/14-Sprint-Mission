import btnRight from "../../assets/btn-right.png";
import btnLeft from "../../assets/btn-left.png";

const Pagination = ({ currentPage, onPageClick }) => {
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
      {[1, 2, 3, 4, 5].map((pageNum) => (
        <button
          key={pageNum}
          onClick={() => onPageClick(pageNum)}
          className={`w-[40px] h-[40px] rounded-full border ${
            currentPage === pageNum
              ? "bg-[#2F80ED] text-[#F9FAFB]"
              : "bg-white text-[#6B7280]"
          }`}
        >
          <div className="text-[16px] text-[600]">{pageNum}</div>
        </button>
      ))}

      {/* 다음 페이지 버튼 */}
      <button onClick={handleNextPage} disabled={currentPage === 5}>
        <img src={btnRight} alt="right-button" className="w-[40px] h-[40px]" />
      </button>
    </div>
  );
};

export default Pagination;
