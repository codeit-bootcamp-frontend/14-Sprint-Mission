import React from "react";
import logo from "../../../images/head_logo.png";
import mobileLogo from "../../../images/head_logo_mo.png";
import profile from "../../../images/profile.png";
import "./SubHeader.scss";
import { Link } from "react-router-dom";

function SubHeader() {
  return (
    <header className="header">
      <div className="inner">
        <div className="nav-area">
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
          <div className="nav">
            <ul>
              <li>
                <Link to={"/"} />
                자유게시판
              </li>
              <li className="active">
                <Link to={"/items"} />
                중고마켓
              </li>
            </ul>
          </div>
        </div>
        <div className="profile-area">
          <img src={profile} alt="프로필" />
        </div>
      </div>
    </header>
  );
}

export default SubHeader;
