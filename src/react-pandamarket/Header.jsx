import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <Link to={'/items'}>
          <img src="/logo.png" alt="로고" className="logo" />
        </Link>
        {/* 나중에 밑에를 <Link>로 감싸기 */}
        <span className="free-board">자유게시판</span>
        <span className="used-market">중고마켓</span>
        <div className="profile-background">
          <img src="/profile.png" alt="프로필" />
        </div>
      </header>
    </div>
  );
};

export default Header;
