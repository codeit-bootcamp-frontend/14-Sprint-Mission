import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../auth.css";
import { AuthContainer } from "../styles/pages/SigninPage.styled";

function SignupPage() {
  const [email, setEmail] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const [emailError, setEmailError] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);

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

  const validateNickname = () => {
    if (!nickname) {
      setNicknameError("닉네임을 입력해주세요.");
      return false;
    }
    setNicknameError("");
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
    // 비밀번호 변경 시 비밀번호 확인 필드도 다시 검증
    if (passwordConfirmation) validatePasswordConfirmation();
    return true;
  };

  const validatePasswordConfirmation = () => {
    if (!passwordConfirmation) {
      setPasswordConfirmationError("비밀번호를 다시 한 번 입력해 주세요.");
      return false;
    } else if (password !== passwordConfirmation) {
      setPasswordConfirmationError("비밀번호가 일치하지 않습니다.");
      return false;
    }
    setPasswordConfirmationError("");
    return true;
  };

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleNicknameChange = (e) => setNickname(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handlePasswordConfirmationChange = (e) =>
    setPasswordConfirmation(e.target.value);

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowPasswordConfirmation = () =>
    setShowPasswordConfirmation(!showPasswordConfirmation);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isEmailValid = validateEmail();
    const isNicknameValid = validateNickname();
    const isPasswordValid = validatePassword();
    const isPasswordConfirmationValid = validatePasswordConfirmation();

    if (
      isEmailValid &&
      isNicknameValid &&
      isPasswordValid &&
      isPasswordConfirmationValid
    ) {
      console.log("Signup successful", { email, nickname, password });
      navigate("/signin");
    } else {
      console.log("Signup failed: Invalid input");
    }
  };

  const isFormValid =
    email &&
    nickname &&
    password &&
    passwordConfirmation &&
    !emailError &&
    !nicknameError &&
    !passwordError &&
    !passwordConfirmationError &&
    password.length >= 8 &&
    password === passwordConfirmation &&
    emailRegex.test(email);

  return (
    <AuthContainer>
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
          className={`input-item ${nicknameError ? "input-error-active" : ""}`}
        >
          <label htmlFor="nickname">닉네임</label>
          <input
            id="nickname"
            name="nickname"
            type="text"
            placeholder="닉네임을 입력해 주세요"
            value={nickname}
            onChange={handleNicknameChange}
            onBlur={validateNickname}
            className={nicknameError ? "input-error" : ""}
          />
          {nicknameError && (
            <p className="error-message nickname-error">{nicknameError}</p>
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
        <div
          className={`input-item ${
            passwordConfirmationError ? "input-error-active" : ""
          }`}
        >
          <label htmlFor="passwordConfirmation">비밀번호 확인</label>
          <div className="input-wrapper">
            <input
              id="passwordConfirmation"
              name="passwordConfirmation"
              type={showPasswordConfirmation ? "text" : "password"}
              placeholder="비밀번호를 다시 한 번 입력해 주세요"
              value={passwordConfirmation}
              onChange={handlePasswordConfirmationChange}
              onBlur={validatePasswordConfirmation}
              className={passwordConfirmationError ? "input-error" : ""}
            />
            <img
              src={
                showPasswordConfirmation
                  ? "/images/icons/eye-visible.svg"
                  : "/images/icons/eye-invisible.svg"
              }
              alt={showPasswordConfirmation ? "비밀번호 보임" : "비밀번호 숨김"}
              className="toggle-password"
              onClick={toggleShowPasswordConfirmation}
            />
          </div>
          {passwordConfirmationError && (
            <p className="error-message password-confirmation-error">
              {passwordConfirmationError}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="button pill-button full-width"
          disabled={!isFormValid}
        >
          회원가입
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
        판다마켓 회원이신가요? <Link to="/signin">로그인</Link>
      </div>
    </AuthContainer>
  );
}

export default SignupPage;
