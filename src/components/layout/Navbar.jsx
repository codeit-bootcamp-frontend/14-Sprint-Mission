import { Link } from "react-router-dom";
import logoImg from "../../asset/icon/panda_market_logo_3.png";
import logoMobileImg from "../../asset/icon/panda_market_logo_no_icon.png";
import profileImg from "../../asset/icon/profile_icon.svg";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="header-container">
      <section className="header-left-container">
        <div>
          <img className="logo-img" src={logoImg} alt="판다 로고" />
          <img
            className="logo-mobile-img"
            src={logoMobileImg}
            alt="판다 모바일 로고"
          />
        </div>
        <div className="link-container">
          <Link className="link" href="/board">
            자유게시판
          </Link>
          <Link className="link" href="/items">
            중고마켓
          </Link>
        </div>
      </section>
      <section className="header-right-container">
        <img className="profile-img" src={profileImg} alt="프로필 이미지" />
      </section>
    </header>
  );
}
