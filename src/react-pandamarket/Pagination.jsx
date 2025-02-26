import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import "./body.css";
import PaginationButton from "./PaginationButton";

const Pagination = ({
  setShowPagination,
  showPagination,
  setClickedPage,
  setPageNum,
  clickedPage,
  paginationNum,
}) => {
  // 뒤로가기 버튼 클릭
  const goBack = () => {
    setShowPagination((prevNum) => Math.max(prevNum - 5, 0));
  };

  // 앞으로 가기 버튼
  const goFront = () => {
    if (showPagination + 5 <= paginationNum.length) {
      setShowPagination((prevNum) => prevNum + 5);
    }
  };

  // 페이지네이션 버튼 클릭해서 불러오는 값 바꾸기
  const buttonClick = (num) => {
    // 클릭한 버튼 색을 위한 상태 변경
    setClickedPage(() => num);
    // page 숫자를 변경해서 서버로 보내기 위한 상태 변경
    setPageNum(() => num);
  };

  return (
    <>
      <div className="pagination-wrap">
        <button className="back-button" onClick={() => goBack()}>
          <IoIosArrowBack className="arrow" />
        </button>

        {paginationNum
          .slice(showPagination, showPagination + 5)
          .map((num, index) => (
            <PaginationButton
              key={index}
              pageNumber={num}
              isClicked={clickedPage === num}
              onClick={() => buttonClick(num)}
            />
          ))}

        <button className="forward-button" onClick={() => goFront()}>
          <IoIosArrowForward className="arrow" />
        </button>
      </div>
    </>
  );
};

export default Pagination;
