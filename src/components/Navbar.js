import "./Navbar.css";
import { useLocation } from "react-router-dom";
import profileImg from "../assets/images/icons/profile.png";

function Navbar() {
  const location = useLocation();

  return (
    <header className="item-header">
      <div className="item-header-div">
        <a href="/">
          <div className="logo" alt="로고이미지" />
        </a>
        <div>
          <a href="/" className="tap">
            자유게시판
          </a>
          <a
            href="/items"
            className={`${
              location.pathname === "/items" ? "tap tap-blue" : "tap"
            }`}
          >
            중고마켓
          </a>
        </div>
        <a href="/profile">
          <img src={profileImg} className="profile-icon" alt="프로필아이콘" />
        </a>
      </div>
    </header>
  );
}

export default Navbar;
