import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../app";
import Logo from "../assets/images/common/logo.svg";
import "./headernav.scss";

export default function HeaderNav() {
  const { user } = useContext(UserContext);
  return (
    <header>
      <div className="wrapper display-flex justify-sides">
        <div className="left display-flex gap-8">
          <img src={Logo} alt="로고 이미지" />
          <Link to="/" className="text-primary-100">
            판다마켓
          </Link>
        </div>
        {!user && (
          <a href="/login" className="button small-48 display-flex justify-center">
            로그인
          </a>
        )}
      </div>
    </header>
  );
}
