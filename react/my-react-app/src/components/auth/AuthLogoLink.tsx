import React from "react";
import { Link as RouterLink } from "react-router-dom";

// HomePage.tsx, SigninPage.tsx, SignupPage.tsx 에서 사용된 Link 타입 문제 임시 해결
const Link: any = RouterLink;

const AuthLogoLink: React.FC = () => {
  return (
    <Link to="/" className="logo-home-button">
      <img src="/images/logo/logo.svg" alt="판다마켓 홈" />
    </Link>
  );
};

export default AuthLogoLink;
