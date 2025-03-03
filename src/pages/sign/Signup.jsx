import "../../../styles/sign.scss";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="sign">
      <div className="sign-container">
        <a href="/" className="logo">
          <img src="/images/logo.svg" />
        </a>
        <form className="sign-form" action="">
          <label htmlFor="email">이메일</label>
          <input
            className="sign-form__input"
            autoComplete="email"
            placeholder="이메일을 입력해주세요"
            type="text"
            name="email"
            id="email"
          />
          <span className="sign-form__input__msg hide" id="msg-email">
            이메일을 입력해주세요
          </span>

          <label htmlFor="nickname">닉네임</label>
          <input
            className="sign-form__input"
            autoComplete="username"
            placeholder="닉네임을 입력해주세요"
            type="text"
            name="name"
            id="nickname"
          />
          <span className="sign-form__input__msg hide" id="msg-nickname">
            닉네임을 입력해주세요
          </span>

          <label htmlFor="password">비밀번호</label>
          <div className="password-container">
            <input
              className="sign-form__input"
              autoComplete="new-password"
              placeholder="비밀번호를 입력해주세요"
              type="password"
              name="password"
              id="password"
            />
            <button
              className="icon icon--24 show-password password-hide"
              type="button"
            ></button>
          </div>
          <span className="sign-form__input__msg hide" id="msg-password">
            비밀번호를 입력해주세요
          </span>

          <label htmlFor="confirm-password">비밀번호 확인</label>
          <div className="password-container">
            <input
              className="sign-form__input"
              autoComplete="new-password"
              placeholder="비밀번호를 다시 한 번 입력해주세요"
              type="password"
              name="confirm-password"
              id="confirm-password"
            />
            <button
              className="icon icon--24 show-password password-hide"
              type="button"
            ></button>
          </div>
          <span
            className="sign-form__input__msg hide"
            id="msg-confirm-password"
          >
            비밀번호가 일치하지 않습니다
          </span>

          <input
            disabled
            className="button button--wide"
            type="submit"
            id="submit"
            value="회원가입"
          />
        </form>
        <div className="social-log-wrap">
          <p className="social-log-wrap__title">간편 로그인하기</p>
          <a
            className="icon icon--42"
            href="https://www.google.com"
            style={{ backgroundImage: "url(images/ico_google.svg)" }}
          ></a>
          <a
            className="icon icon--42"
            href="https://www.kakaocorp.com"
            style={{ backgroundImage: "url(images/ico_kakao.svg)" }}
          ></a>
        </div>
        <footer>
          이미 회원이신가요? <Link to="/login">로그인</Link>
        </footer>
      </div>
    </div>
  );
}

export default Signup;
