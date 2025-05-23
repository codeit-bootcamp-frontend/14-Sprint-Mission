import React from "react";

const SocialLoginButtons: React.FC = () => {
  return (
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
  );
};

export default SocialLoginButtons;
