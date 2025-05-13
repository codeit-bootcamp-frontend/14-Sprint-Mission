import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <Link to="/">
        <img src="/images/logo/logo.svg" alt="판다마켓 홈" width="153" />
      </Link>
      <Link to="/signin" id="signinLinkButton" className="button">
        로그인
      </Link>
    </header>
  );
}

export default Header;
