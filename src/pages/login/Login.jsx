import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import mainLogo from "../../asset/icon/panda_market_logo_3.png";
import eyeOffIcon from "../../asset/icon/btn_visibility_off.png";
import eyeOnIcon from "../../asset/icon/btn_visibility_on.png";

import "./login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (value) => {
    const trimmed = value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmed) return "이메일을 입력해주세요.";
    if (!emailRegex.test(trimmed)) return "잘못된 이메일 형식입니다.";
    return "";
  };

  const validatePassword = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return "비밀번호를 입력해주세요.";
    if (trimmed.length < 8) return "비밀번호를 8자 이상 입력해주세요.";
    return "";
  };

  const handleEmailBlur = () => {
    setEmailError(validateEmail(email));
  };

  const handlePasswordBlur = () => {
    setPasswordError(validatePassword(password));
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const isFormValid =
    validateEmail(email) === "" && validatePassword(password) === "";

  const handleLogin = (e) => {
    e.preventDefault();
    if (isFormValid) {
      navigate("/items");
    }
  };

  return (
    <main className="login-page">
      <section className="header">
        <div className="header-logo">
          <Link to="/">
            <img src={mainLogo} alt="판다마켓 로고" />
          </Link>
        </div>
      </section>

      <section className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleEmailBlur}
            className={emailError ? "error" : ""}
            required
          />
          <div className="error-message">{emailError}</div>

          <label htmlFor="password">비밀번호</label>
          <div className="password-container">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호를 입력해주세요"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onBlur={handlePasswordBlur}
              className={passwordError ? "error" : ""}
              required
            />
            <button
              type="button"
              id="toggle-password"
              onClick={handleTogglePassword}
            >
              <img
                src={showPassword ? eyeOnIcon : eyeOffIcon}
                alt="비밀번호 보기 토글"
                id="eye-icon"
              />
            </button>
          </div>

          <div className="error-message">{passwordError}</div>

          <button type="submit" className="button-wide" disabled={!isFormValid}>
            로그인
          </button>
        </form>

        <div className="easy-login">
          <span>간편 로그인하기</span>
          <div className="login-icon">
            <a href="https://www.google.com/" target="_blank" rel="noreferrer">
              <img src="/images/google_logo.png" alt="구글 간편 로그인" />
            </a>
            <a
              href="https://www.kakaocorp.com/page/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/images/kakao_logo.png" alt="카카오톡 간편 로그인" />
            </a>
          </div>
        </div>

        <p className="join-membership">
          판다마켓이 처음이신가요? <Link to="/signup">회원가입</Link>
        </p>
      </section>
    </main>
  );
}
