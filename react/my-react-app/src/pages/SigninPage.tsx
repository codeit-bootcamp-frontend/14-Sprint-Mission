import React, { useState, ChangeEvent, FormEvent, FocusEvent } from "react";
import { useNavigate } from "react-router-dom";
import "../auth.css";
import { AuthContainer } from "../styles/pages/SigninPage.styled";

// 공통 인증 컴포넌트 import
import AuthLogoLink from "../components/auth/AuthLogoLink";
import AuthFormField from "../components/auth/AuthFormField";
import SocialLoginButtons from "../components/auth/SocialLoginButtons";
import AuthRedirectLink from "../components/auth/AuthRedirectLink";

interface SigninPageProps {}

const SigninPage: React.FC<SigninPageProps> = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateEmail = (): boolean => {
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

  const validatePassword = (): boolean => {
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

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    // 입력 중 실시간 에러 제거 로직 (선택적 개선)
    if (emailError && emailRegex.test(e.target.value)) setEmailError("");
    else if (emailError && !e.target.value)
      setEmailError("이메일을 입력해주세요.");
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    // 입력 중 실시간 에러 제거 로직 (선택적 개선)
    if (passwordError && e.target.value.length >= 8) setPasswordError("");
    else if (passwordError && !e.target.value)
      setPasswordError("비밀번호를 입력해주세요.");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();

    if (isEmailValid && isPasswordValid) {
      console.log("Login successful", { email, password });
      navigate("/items");
    } else {
      console.log("Login failed: Invalid input");
    }
  };

  const isFormValid: boolean =
    !!email &&
    !!password &&
    !emailError &&
    !passwordError &&
    password.length >= 8 &&
    emailRegex.test(email);

  return (
    <AuthContainer>
      <AuthLogoLink />

      <form onSubmit={handleSubmit}>
        <AuthFormField
          id="email"
          label="이메일"
          name="email"
          type="email"
          placeholder="이메일을 입력해 주세요"
          value={email}
          onChange={handleEmailChange}
          onBlur={validateEmail as (e: FocusEvent<HTMLInputElement>) => void}
          error={emailError}
        />
        <AuthFormField
          id="password"
          label="비밀번호"
          name="password"
          type="password"
          placeholder="비밀번호를 입력해 주세요"
          value={password}
          onChange={handlePasswordChange}
          onBlur={validatePassword as (e: FocusEvent<HTMLInputElement>) => void}
          error={passwordError}
          showPasswordToggle={true}
          showPassword={showPassword}
          onToggleShowPassword={toggleShowPassword}
        />

        <button
          type="submit"
          className="button pill-button full-width"
          disabled={!isFormValid}
        >
          로그인
        </button>
      </form>

      <SocialLoginButtons />
      <AuthRedirectLink
        text="판다마켓이 처음이신가요?"
        linkText="회원가입"
        to="/signup"
      />
    </AuthContainer>
  );
};

export default SigninPage;
