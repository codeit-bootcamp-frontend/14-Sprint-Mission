import React from "react";
import "./paginationButton.css";

const PaginationButton = ({ pageNumber, isClicked, onClick }) => {

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
