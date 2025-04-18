import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/login_logo.png";
import "./BigLogo.scss";

function BigLogo() {
  return (
    <div className="logo-area">
      <Link to={"/"}>
        <img src={logo} alt="판다마켓 로고" />
      </Link>
    </div>
  );
}

export default BigLogo;
