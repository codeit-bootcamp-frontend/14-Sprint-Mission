import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import "./signup.css";

import mainLogo from "../../asset/icon/panda_market_logo_3.png";
import eyeOffIcon from "../../asset/icon/btn_visibility_off.png";
import eyeOnIcon from "../../asset/icon/btn_visibility_on.png";

export default function SignupPage() {
  const emailRef = useRef<HTMLInputElement>(null);
  const nicknameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const passwordConfirmRef = useRef<HTMLInputElement>(null);

  const [emailError, setEmailError] = useState("");
  const [nicknameError, setNicknameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [passwordCheckError, setPasswordCheckError] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateAll = useCallback(() => {
    const email = emailRef.current?.value.trim() ?? "";
    const nickname = nicknameRef.current?.value.trim() ?? "";
    const password = passwordRef.current?.value.trim() ?? "";
    const passwordConfirm = passwordConfirmRef.current?.value.trim() ?? "";

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailValid = !!email && emailRegex.test(email);
    const nicknameValid = !!nickname;
    const passwordValid = password.length >= 8;
    const confirmValid = passwordConfirm === password && passwordConfirm !== "";

    const noErrors =
      !emailError && !nicknameError && !passwordError && !passwordCheckError;

    setIsButtonEnabled(
      emailValid && nicknameValid && passwordValid && confirmValid && noErrors
    );
  }, [emailError, nicknameError, passwordError, passwordCheckError]);

  useEffect(() => {
    validateAll();
  }, [validateAll]);

  const handleBlur = (type: "email" | "nickname" | "password" | "confirm") => {
    const email = emailRef.current?.value.trim() ?? "";
    const nickname = nicknameRef.current?.value.trim() ?? "";
    const password = passwordRef.current?.value.trim() ?? "";
    const confirm = passwordConfirmRef.current?.value.trim() ?? "";

    switch (type) {
      case "email":
        if (!email) setEmailError("이메일을 입력해주세요.");
        else if (!emailRegex.test(email))
          setEmailError("잘못된 이메일 형식입니다.");
        else setEmailError("");
        break;
      case "nickname":
        if (!nickname) setNicknameError("닉네임을 입력해주세요.");
        else setNicknameError("");
        break;
      case "password":
        if (!password) setPasswordError("비밀번호를 입력해주세요.");
        else if (password.length < 8)
          setPasswordError("비밀번호를 8자 이상 입력해주세요.");
        else setPasswordError("");
        break;
      case "confirm":
        if (confirm !== password)
          setPasswordCheckError("비밀번호가 일치하지 않습니다.");
        else setPasswordCheckError("");
        break;
    }
  };

  const handleSignup = () => {
    if (isButtonEnabled) {
      window.location.href = "/login/login.html";
    }
  };

  return (
    <main className="signup-page">
      <section className="header">
        <div className="header-logo">
          <Link to="/">
            <img src={mainLogo} alt="판다마켓 로고" />
          </Link>
        </div>
      </section>
      <section className="login-container">
        <form
          className="login-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSignup();
          }}
        >
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="email"
            ref={emailRef}
            placeholder="이메일을 입력해주세요"
            onBlur={() => handleBlur("email")}
            onInput={validateAll}
          />
          <div className="error-message">{emailError}</div>
          <label htmlFor="nickname">닉네임</label>
          <input
            id="nickname"
            type="text"
            ref={nicknameRef}
            placeholder="닉네임을 입력해주세요"
            onBlur={() => handleBlur("nickname")}
            onInput={validateAll}
          />
          <div className="error-message">{nicknameError}</div>
          <label htmlFor="password">비밀번호</label>
          <div className="password-container">
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              ref={passwordRef}
              placeholder="비밀번호를 입력해주세요"
              onBlur={() => handleBlur("password")}
              onInput={validateAll}
            />
            <button
              type="button"
              id="toggle-password"
              onClick={() => setShowPassword((prev) => !prev)}
            >
              <img
                src={showPassword ? eyeOnIcon : eyeOffIcon}
                alt="비밀번호 보기 토글"
                className="eye-icon"
              />
            </button>
          </div>
          <div className="error-message">{passwordError}</div>
          <label htmlFor="password-confirm">비밀번호 확인</label>
          <div className="password-container">
            <input
              id="password-confirm"
              type={showPasswordConfirm ? "text" : "password"}
              ref={passwordConfirmRef}
              placeholder="비밀번호를 다시 한 번 입력해주세요"
              onBlur={() => handleBlur("confirm")}
              onInput={validateAll}
            />
            <button
              type="button"
              id="toggle-password-confirm"
              onClick={() => setShowPasswordConfirm((prev) => !prev)}
            >
              <img
                src={showPasswordConfirm ? eyeOnIcon : eyeOffIcon}
                alt="비밀번호 보기 토글"
                className="eye-icon"
              />
            </button>
          </div>
          <div className="error-message">{passwordCheckError}</div>
          <button
            type="submit"
            className="button-wide"
            disabled={!isButtonEnabled}
          >
            회원가입
          </button>
        </form>

        <div className="easy-login">
          <span>간편 로그인하기</span>
          <div className="login-icon">
            <a
              href="https://www.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="google-loco"
            >
              <img src="/images/google_logo.png" alt="구글 간편 로그인" />
            </a>
            <a
              href="https://www.kakaocorp.com/page/"
              target="_blank"
              rel="noopener noreferrer"
              className="kakao-loco"
            >
              <img src="/images/kakao_logo.png" alt="카카오톡 간편 로그인" />
            </a>
          </div>
        </div>
        <p className="join-membership">
          이미 회원이신가요? <Link to="/login">로그인</Link>
        </p>
      </section>
    </main>
  );
}
