import React from "react";
import google from "../../images/ic_google.png";
import kakao from "../../images/ic_kakao.png";
import "./SNSLogin.scss";

function SNSLogin() {
  return (
    <div className="sns-login">
      <span className="login-tit">간편 로그인하기</span>
      <ul className="sns-login-link">
        <li>
          <a href="https://www.google.com/">
            <img src={google} alt="구글 로그인" />
          </a>
        </li>
        <li>
          <a href="https://www.kakaocorp.com/page/">
            <img src={kakao} alt="카카오톡 로그인" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SNSLogin;
