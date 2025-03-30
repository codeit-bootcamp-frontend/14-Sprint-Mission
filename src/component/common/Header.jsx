import { Link, NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
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
              location.pathname === "/items" || "/additems"
                ? "tap tap-blue"
                : "tap"
            }`}
          >
            중고마켓
          </NavLink>
        </div>
        <Link>
          <img
            src="image/profile.png"
            className="profile-icon"
            alt="프로필아이콘"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
