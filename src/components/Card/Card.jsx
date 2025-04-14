import React from "react";
import "./Card.scss";

function Card({ keyword, cardImg, reverse = false, children }) {
  return (
    <div className={`cont-box ${reverse ? "ty-reverse" : ""}`}>
      <div className="box-img">
        <img src={cardImg} alt="" />
      </div>
      <div className="box-text">
        <span className="keyword">{keyword}</span>
        {children}
      </div>
    </div>
  );
}

export default Card;
