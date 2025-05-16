import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
// import "../global.css"; // Header.jsx는 main.jsx에서 global.css를 임포트하므로 중복 필요 없음

function Header() {
  const activeStyle = {
    color: "#3692FF",
    fontWeight: "bold", // 시각적 강조를 위해 추가
  };
  const location = useLocation();
  const isItemsOrAddItemPage =
    location.pathname === "/items" || location.pathname === "/additem";

  return (
    <header>
      <div className="header-left">
        <Link to="/">
          <img
            src="../../public/images/logo/og-image.png"
            alt="Panda Market Logo"
            className="logo"
          />
        </Link>
        {isItemsOrAddItemPage && (
          <nav className="header-nav">
            <NavLink
              to="/community"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              자유게시판
            </NavLink>
            <NavLink
              to="/items"
              style={({ isActive }) =>
                isActive || location.pathname === "/additem"
                  ? activeStyle
                  : undefined
              }
            >
              중고마켓
            </NavLink>
          </nav>
        )}
      </div>
      <div className="header-right">
        {isItemsOrAddItemPage ? (
          <Link to="/myprofile" className="profile-link">
            <img
              src="../../public/images/icons/mypanda.png"
              alt="My Profile"
              className="profile-icon"
            />
          </Link>
        ) : (
          <Link to="/signin" className="button pill-button">
            로그인
          </Link>
        )}
        {/* 사용자 프로필 아이콘은 추후 로그인 상태에 따라 표시 */}
        {/* <img src="/path-to-profile-icon.svg" alt="프로필" /> */}
      </div>
    </header>
  );
}

export default Header;
