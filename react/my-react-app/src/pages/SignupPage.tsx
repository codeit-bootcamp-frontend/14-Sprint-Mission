import React from "react";
import "../auth.css";
import { AuthContainer } from "../styles/pages/SigninPage.styled";

// 공통 인증 컴포넌트 import
import AuthLogoLink from "../components/auth/AuthLogoLink";
import AuthFormField from "../components/auth/AuthFormField";
import SocialLoginButtons from "../components/auth/SocialLoginButtons";
import AuthRedirectLink from "../components/auth/AuthRedirectLink";

// 커스텀 훅 import
import { useSignupForm } from "../hooks/useSignupForm";

interface SignupPageProps {}

const SignupPage: React.FC<SignupPageProps> = () => {
  const { formData, errors, visibility, handlers, isFormValid } =
    useSignupForm();

  return (
    <AuthContainer>
      <AuthLogoLink />

      <form onSubmit={handlers.handleSubmit}>
        <AuthFormField
          id="email"
          label="이메일"
          name="email"
          type="email"
          placeholder="이메일을 입력해 주세요"
          value={formData.email}
          onChange={handlers.handleEmailChange}
          onBlur={handlers.validateEmail}
          error={errors.emailError}
        />
        <AuthFormField
          id="nickname"
          label="닉네임"
          name="nickname"
          type="text"
          placeholder="닉네임을 입력해 주세요"
          value={formData.nickname}
          onChange={handlers.handleNicknameChange}
          onBlur={handlers.validateNickname}
          error={errors.nicknameError}
        />
        <AuthFormField
          id="password"
          label="비밀번호"
          name="password"
          type="password"
          placeholder="비밀번호를 입력해 주세요"
          value={formData.password}
          onChange={handlers.handlePasswordChange}
          onBlur={handlers.validatePassword}
          error={errors.passwordError}
          showPasswordToggle={true}
          showPassword={visibility.showPassword}
          onToggleShowPassword={handlers.toggleShowPassword}
        />
        <AuthFormField
          id="passwordConfirmation"
          label="비밀번호 확인"
          name="passwordConfirmation"
          type="password"
          placeholder="비밀번호를 다시 한 번 입력해 주세요"
          value={formData.passwordConfirmation}
          onChange={handlers.handlePasswordConfirmationChange}
          onBlur={handlers.validatePasswordConfirmation}
          error={errors.passwordConfirmationError}
          showPasswordToggle={true}
          showPassword={visibility.showPasswordConfirmation}
          onToggleShowPassword={handlers.toggleShowPasswordConfirmation}
        />

        <button
          type="submit"
          className="button pill-button full-width"
          disabled={!isFormValid}
        >
          회원가입
        </button>
      </form>

      <SocialLoginButtons />
      <AuthRedirectLink
        text="판다마켓 회원이신가요?"
        linkText="로그인"
        to="/signin"
      />
    </AuthContainer>
  );
};

export default SignupPage;
