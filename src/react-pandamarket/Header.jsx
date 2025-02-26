import React from "react";
import "./header.css";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const url = useLocation();

  return (
    <div>
      <header>
        <Link to={"/items"}>
          <img src="/logo.png" alt="로고" className="logo" />
        </Link>
        {/* 나중에 밑에를 <Link>로 감싸기 */}
        <span className="free-board">자유게시판</span>
        <Link to={"/items"} style={{ textDecoration: "none" }}>
          <span
            className={
              url.pathname === "/items" ? "used-market-selected" : "used-market"
            }
          >
            중고마켓
          </span>
        </Link>
        <div className="profile-background">
          <img src="/profile.png" alt="프로필" className="profile" />
        </div>
      </header>
    </div>
  );
};

export default Header;
