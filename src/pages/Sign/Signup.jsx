import React, { useEffect, useState } from "react";
import BigLogo from "../../components/BigLogo/BigLogo";
import TextFiled from "../../components/Input/TextFiled";
import SNSLogin from "../../components/SNSLogin/SNSLogin";
import { Link, useNavigate } from "react-router-dom";
import "./Sign.scss";
import {
  emailValidate,
  nickNameValidate,
  passwordChkValidate,
  passwordValidate,
} from "../../utils/validator";

function Signup() {
  const [form, setForm] = useState({
    email: "",
    nickName: "",
    password: "",
    passwordChk: "",
  });
  const [error, setError] = useState({
    email: "",
    nickName: "",
    password: "",
    passwordChk: "",
  });
  const navigate = useNavigate();
  const hasError = Object.values(error).some(Boolean);
  const hasEmpty = Object.values(form).some((val) => val === "");
  const isValid = !hasEmpty && !hasError;

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    handleValidate(name, value);
  };

  const handleValidate = (name, value) => {
    let errMsg = "";

    switch (name) {
      case "email":
        errMsg = emailValidate(value) || "";
        break;

      case "nickName":
        errMsg = nickNameValidate(value) || "";
        break;

      case "password":
        errMsg = passwordValidate(value) || "";
        break;

      case "passwordChk":
        errMsg = passwordChkValidate(form.password, value) || "";
        break;

      default:
        break;
    }

    setError((prev) => ({
      ...prev,
      [name]: errMsg,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    navigate("/login");
  };

  return (
    <div className="layout-sign">
      <div className="contents">
        <BigLogo />
        <div className="sign-form">
          <form onSubmit={handleSubmit}>
            <TextFiled
              id="email"
              name="email"
              label="이메일"
              type="email"
              placeholder="이메일을 입력해주세요"
              value={form.email}
              error={error.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextFiled
              id="name"
              name="nickName"
              label="닉네임"
              type="text"
              placeholder="닉네임을 입력해주세요"
              value={form.nickName}
              error={error.nickName}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextFiled
              id="password"
              name="password"
              label="비밀번호"
              type="password"
              placeholder="비밀번호를 입력해주세요"
              value={form.password}
              visibleBtn={true}
              error={error.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <TextFiled
              id="passwordChk"
              name="passwordChk"
              label="비밀번호 확인"
              type="password"
              placeholder="비밀번호를 다시 한 번 입력해주세요"
              value={form.passwordChk}
              visibleBtn={true}
              error={error.passwordChk}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button type="submit" className="el-btn btn-l" disabled={!isValid}>
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
