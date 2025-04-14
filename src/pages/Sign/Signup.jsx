import React from "react";
import BigLogo from "../../components/BigLogo/BigLogo";
import TextInput from "../../components/Input/TextInput";
import PwInput from "../../components/Input/PwInput";
import SNSLogin from "../../components/SNSLogin/SNSLogin";
import { Link } from "react-router-dom";
import "./Sign.scss";

function Signup() {
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
            <TextInput
              id="name"
              label="닉네임"
              type="text"
              placeholder="닉네임을 입력해주세요"
            />
            <PwInput
              id="password"
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요"
            />
            <PwInput
              id="passwordChk"
              label="비밀번호 확인"
              placeholder="비밀번호를 다시 한 번 입력해주세요"
            />
            <button type="submit" className="el-btn btn-l" disabled>
              회원가입
            </button>
          </form>
        </div>
        <SNSLogin />
        <p className="sign-msg">
          이미 회원이신가요?{" "}
          <Link to={"/login"} className="link-txt">
            로그인
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Signup;
