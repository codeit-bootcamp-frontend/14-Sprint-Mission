import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const activeStyle = {
    color: "#3692FF",
    fontWeight: "bold", // 시각적 강조를 위해 추가
  };

  return (
    <header>
      <div className="header-left">
        <Link to="/">
          <img src="/images/logo/logo.svg" alt="판다마켓 홈" width="153" />
        </Link>
        <nav className="header-nav">
          <NavLink
            to="/community" // "자유게시판" 경로 (임시 또는 확정 필요)
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            자유게시판
          </NavLink>
          <NavLink
            to="/items"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            중고마켓
          </NavLink>
        </nav>
      </div>
      <div className="header-right">
        <Link to="/signin" id="signinLinkButton" className="button">
          로그인
        </Link>
        {/* 사용자 프로필 아이콘은 추후 로그인 상태에 따라 표시 */}
        {/* <img src="/path-to-profile-icon.svg" alt="프로필" /> */}
      </div>
    </header>
  );
}

export default Header;
