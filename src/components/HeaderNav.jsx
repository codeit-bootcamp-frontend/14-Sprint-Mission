import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/common/logo.svg";
import { useUser } from "../contexts/UserContext";
import "./headernav.scss";
import IconProfile from "../assets/images/common/profile.svg";

function LogoArea() {
  return (
    <div className="left display-flex gap-8" id="logo-area">
      <img src={Logo} alt="로고 이미지" />
      <Link to="/" className="text-primary-100" id="logo">
        판다마켓
      </Link>
    </div>
  );
}
export default function HeaderNav() {
  const user = useUser();
  return user ? (
    <header className="common-header">
      <div className="wrapper display-flex justify-sides">
        <div className="left display-flex justify-left gap-32">
          <LogoArea />
          <ul className="display-flex justify-left align-stretch text-2lg text-bold" id="menus">
            <li>
              <NavLink
                to="/boards"
                className={({ isActive }) => (isActive ? "text-primary-100" : "")}
              >
                자유게시판
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/items"
                className={({ isActive }) => (isActive ? "text-primary-100" : "")}
              >
                중고마켓
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="img-wrapper radius-circle">
          <img src={user.image || IconProfile} alt="사용자 프로필 사진" />
        </div>
      </div>
    </header>
  ) : (
    <header className="common-header">
      <div className="wrapper display-flex justify-sides">
        <LogoArea />
        <a href="/login" className="button small-48 display-flex justify-center">
          로그인
        </a>
      </div>
    </header>
  );
}
