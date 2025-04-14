import React from "react";
import BigLogo from "../../components/BigLogo/BigLogo";
import TextInput from "../../components/Input/TextInput";
import PwInput from "../../components/Input/PwInput";
import SNSLogin from "../../components/SNSLogin/SNSLogin";
import { Link } from "react-router-dom";
import "./Sign.scss";

function Login() {
  return (
    <div className="layout-sign">
      <div className="contents">
        <BigLogo />
        <div className="sign-form">
          <form action="">
            <TextInput
              id="email"
              label="이메일"
              type="email"
              placeholder="이메일을 입력해주세요"
            />
            <PwInput
              id="password"
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요"
            />
            <button type="submit" className="el-btn btn-l" disabled>
              로그인
            </button>
          </form>
        </div>
        <SNSLogin />
        <p className="sign-msg">
          판다마켓이 처음이신가요?{" "}
          <Link to={"/signup"} className="link-txt">
            회원가입
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
