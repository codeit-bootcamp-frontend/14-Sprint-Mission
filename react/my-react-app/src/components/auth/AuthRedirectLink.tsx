import React from "react";
import { Link as RouterLink } from "react-router-dom";

// HomePage.tsx, SigninPage.tsx, SignupPage.tsx 에서 사용된 Link 타입 문제 임시 해결
const Link: any = RouterLink;

interface AuthRedirectLinkProps {
  text: string;
  linkText: string;
  to: string;
}

const AuthRedirectLink: React.FC<AuthRedirectLinkProps> = ({
  text,
  linkText,
  to,
}) => {
  return (
    <div className="auth-switch">
      {text} <Link to={to}>{linkText}</Link>
    </div>
  );
};

export default AuthRedirectLink;
