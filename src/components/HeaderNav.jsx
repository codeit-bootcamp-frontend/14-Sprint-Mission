import { Link } from "react-router-dom";
import Logo from "../assets/images/common/logo.svg";

export default function HeaderNav() {
  return (
    <header>
      <div className="wrapper flex-sides">
        <div className="left flex gap-8">
          <img src={Logo} alt="로고 이미지" />
          <Link href="/" className="text-primary-100">
            판다마켓
          </Link>
        </div>
        <a href="/login" className="button small-48 flex-center">
          로그인
        </a>
      </div>
    </header>
  );
}
