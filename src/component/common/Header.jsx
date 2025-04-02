import { Link, NavLink, useLocation } from "react-router-dom";
import "./Header.css";
import profileImg from "../../../image/profile.png";

function Header() {
  const location = useLocation();
  return (
    <header className="item-header">
      <div className="item-header-div">
        <Link to="/" className="logo" alt="로고이미지" />
        <div>
          <NavLink to="/" className="tap">
            자유게시판
          </NavLink>
          <NavLink
            to="/items"
            className={`${
              location.pathname === "/items" || location.pathname === "/additem"
                ? "tap-blue"
                : "tap"
            }`}
          >
            중고마켓
          </NavLink>
        </div>
        <Link>
          <img src={profileImg} className="profile-icon" alt="프로필아이콘" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
