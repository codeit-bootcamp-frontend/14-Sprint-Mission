import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../auth.css"; // 경로 수정

function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateEmail = () => {
    if (!email) {
      setEmailError("이메일을 입력해주세요.");
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError("잘못된 이메일 형식입니다");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validatePassword = () => {
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
      return false;
    } else if (password.length < 8) {
      setPasswordError("비밀번호를 8자 이상 입력해주세요.");
      return false;
    }
    setPasswordError("");
    return true;
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (emailError) validateEmail(); // Clear error on input if error was present
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (passwordError) validatePassword(); // Clear error on input if error was present
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      // 실제 API 호출 대신 더미 로그인 및 페이지 이동
      console.log("Login successful", { email, password });
      navigate("/items");
    } else {
      console.log("Login failed: Invalid input");
    }
  };

  const isFormValid =
    email &&
    password &&
    !emailError &&
    !passwordError &&
    password.length >= 8 &&
    emailRegex.test(email);

  return (
    <div className="auth-container">
      <Link to="/" className="logo-home-button">
        <img src="/images/logo/logo.svg" alt="판다마켓 홈" />
      </Link>

      <form onSubmit={handleSubmit}>
        <div className={`input-item ${emailError ? "input-error-active" : ""}`}>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="이메일을 입력해 주세요"
            value={email}
            onChange={handleEmailChange}
            onBlur={validateEmail}
            className={emailError ? "input-error" : ""}
          />
          {emailError && (
            <p className="error-message email-error">{emailError}</p>
          )}
        </div>
        <div
          className={`input-item ${passwordError ? "input-error-active" : ""}`}
        >
          <label htmlFor="password">비밀번호</label>
          <div className="input-wrapper">
            <input
              id="password"
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호를 입력해 주세요"
              value={password}
              onChange={handlePasswordChange}
              onBlur={validatePassword}
              className={passwordError ? "input-error" : ""}
            />
            <img
              src={
                showPassword
                  ? "/images/icons/eye-visible.svg"
                  : "/images/icons/eye-invisible.svg"
              }
              alt={showPassword ? "비밀번호 보임" : "비밀번호 숨김"}
              className="toggle-password"
              onClick={toggleShowPassword}
            />
          </div>
          {passwordError && (
            <p className="error-message password-error">{passwordError}</p>
          )}
        </div>

        <button
          type="submit"
          className="button pill-button full-width"
          disabled={!isFormValid}
        >
          로그인
        </button>
      </form>

      <div className="social-login-container">
        <h3>간편 로그인하기</h3>
        <div className="social-login-buttons-container">
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/social/google-logo.png"
              alt="구글 로그인"
              width="42"
            />
          </a>
          <a
            href="https://www.kakaocorp.com/page/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/social/kakao-logo.png"
              alt="카카오톡 로그인"
              width="42"
            />
          </a>
        </div>
      </div>

      <div className="auth-switch">
        판다마켓이 처음이신가요? <Link to="/signup">회원가입</Link>
      </div>
    </div>
  );
}

export default SigninPage;
