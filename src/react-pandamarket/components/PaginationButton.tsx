import React from "react";
import "../styles/paginationButton.css";

interface Props {
  pageNumber:number;
  isClicked:boolean;
  onClick: () => void;
}

const PaginationButton = ({ pageNumber, isClicked, onClick }:Props) => {

  return (
    <>
      <button
        className={isClicked ? "clicked-button" : "button"}
        onClick={onClick}
      >
        {pageNumber}
      </button>
    </>
  );
};

export default PaginationButton;
