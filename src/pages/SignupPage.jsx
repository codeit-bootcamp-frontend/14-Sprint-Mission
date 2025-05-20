import "./style.css";
import "./login.css";

import logoImg from "../assets/images/logo/panda-market-logo.png";
import eyeInvisible from "../assets/images/icons/eye-invisible.svg";
import googleLogo from "../assets/images/social/google-logo.png";
import kakaoLogo from "../assets/images/social/kakao-logo.png";

function SignupPage() {
  return (
    <main className="signup-container">
      <div className="login-logo">
        <a href="/">
          <img src={logoImg} alt="판다마켓 로고" id="logo-img" />
        </a>
      </div>

      <form className="login-form" method="post">
        <label className="login_input" htmlFor="email">
          <span>이메일</span>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="이메일을 입력해 주세요"
            required
          />
          <span className="error-message"></span>
        </label>

        <label className="login_input" htmlFor="nickname">
          <span>닉네임</span>
          <input
            id="nickname"
            name="nickname"
            type="text"
            placeholder="닉네임을 입력해 주세요"
            required
          />
          <span className="error-message"></span>
        </label>

        <label className="login_input" htmlFor="password">
          <span>비밀번호</span>
          <div className="input-box">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="비밀번호를 입력해 주세요"
              required
            />
            <img
              src={eyeInvisible}
              alt="비밀번호 보기"
              className="password-toggle"
            />
          </div>
          <span className="error-message"></span>
        </label>

        <label className="login_input" htmlFor="passwordCheck">
          <span>비밀번호 확인</span>
          <div className="input-box">
            <input
              id="passwordCheck"
              name="passwordCheck"
              type="password"
              placeholder="비밀번호를 다시 한 번 입력해 주세요"
              required
            />
            <img
              src={eyeInvisible}
              alt="비밀번호 보기"
              className="password-toggle"
            />
          </div>
          <span className="error-message"></span>
        </label>

        <button type="submit" className="submit-button button login-button">
          회원가입
        </button>
      </form>

      <div className="social-login">
        <h3>간편 로그인하기</h3>
        <div className="social-login-button">
          <a href="https://www.google.com/" target="_blank" rel="noreferrer">
            <img src={googleLogo} alt="구글 로그인" width="42" />
          </a>
          <a
            href="https://www.kakaocorp.com/page/"
            target="_blank"
            rel="noreferrer"
          >
            <img src={kakaoLogo} alt="카카오 로그인" width="42" />
          </a>
        </div>
      </div>

      <div className="login-change">
        이미 회원이신가요? <a href="/login">로그인</a>
      </div>
    </main>
  );
}

export default SignupPage;
