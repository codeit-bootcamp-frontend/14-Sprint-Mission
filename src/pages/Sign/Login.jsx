import React, { useEffect, useState } from "react";
import BigLogo from "../../components/BigLogo/BigLogo";
import TextInput from "../../components/Input/TextInput";
import PwInput from "../../components/Input/PwInput";
import SNSLogin from "../../components/SNSLogin/SNSLogin";
import { Link, useNavigate } from "react-router-dom";
import "./Sign.scss";
import { emailValidate, passwordValidate } from "../../utils/validator";

function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleValidate = (name, value) => {
    let errMsg = "";

    switch (name) {
      case "email":
        errMsg = emailValidate(value) || "";
        break;

      case "password":
        errMsg = passwordValidate(value) || "";
        break;

      default:
        break;
    }

    setError((prev) => ({
      ...prev,
      [name]: errMsg,
    }));
  };

  useEffect(() => {
    const hasError = Object.values(error).some(Boolean);
    const hasEmpty = Object.values(form).some((val) => val === "");

    setIsValid(!hasError && !hasEmpty);
  }, [form, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValid) return;

    navigate("/items");
  };

  return (
    <div className="layout-sign">
      <div className="contents">
        <BigLogo />
        <div className="sign-form">
          <form onSubmit={handleSubmit}>
            <TextInput
              id="email"
              name="email"
              label="이메일"
              type="email"
              placeholder="이메일을 입력해주세요"
              value={form.email}
              error={error.email}
              onChange={handleChange}
              handleValidate={handleValidate}
            />
            <PwInput
              id="password"
              name="password"
              label="비밀번호"
              placeholder="비밀번호를 입력해주세요"
              value={form.password}
              error={error.password}
              onChange={handleChange}
              handleValidate={handleValidate}
            />
            <button type="submit" className="el-btn btn-l" disabled={!isValid}>
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
