import React from "react";
import logo from "../../images/head_logo.png";
import mobileLogo from "../../images/head_logo_mo.png";
import { Link } from "react-router-dom";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <div className="inner">
        <div className="head-logo">
          <h1>
            <a href="./">
              <picture>
                <source media="(min-width: 768px)" srcSet={logo} />
                <img src={mobileLogo} alt="판다마켓 로고" />
              </picture>
            </a>
          </h1>
        </div>
        <div className="head-login">
          <Link to={"/login"} className={"el-btn btn-sm"}>
            로그인
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
