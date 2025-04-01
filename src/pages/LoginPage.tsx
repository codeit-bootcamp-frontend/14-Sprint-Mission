import './LoginPage.css';

function LoginPage() {
  return (
    <>
      <main>
        <div className="container">
          <a className="brand" href="/">
            <img
              className="logo"
              src="/images/logo.png"
              alt="logo"
              width="100"
              height="100"
            />
            판다마켓
          </a>
          <form id="form">
            <div className="input-box">
              <label htmlFor="email">이메일</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="이메일을 입력해주세요"
                required
              />
            </div>
            <div className="input-box">
              <label htmlFor="password">비밀번호</label>
              <input
                id="password"
                name="password"
                type="password"
                placeholder="비밀번호를 입력해주세요"
                required
              />
              <img
                id="eye-slash"
                src="/images/eye-slash.svg"
                alt="show password"
              />
            </div>
            <button type="button" className="login-btn" disabled>
              로그인
            </button>
          </form>
          <div className="social-login">
            <span>간편 로그인하기</span>
            <a href="https://google.com">
              <img
                src="./images/social/google.png"
                alt="google logo"
                width="40"
              />
            </a>
            <a href="https://kakao.com">
              <img
                src="./images/social/kakao.png"
                alt="google logo"
                width="40"
              />
            </a>
          </div>
          <span>
            판다마켓이 처음이신가요?
            <a href="/signup.html">회원가입</a>
          </span>
        </div>
      </main>
    </>
  );
}

export default LoginPage;
