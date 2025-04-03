import { ChangeEvent, useEffect, useRef, useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import LogoImg from '../assets/images/logo.png';
import HidePasswordIcon from '../assets/icons/eye-slash.svg';
import ShowPasswordIcon from '../assets/icons/eye.svg';
import Input from '../components/common/Input';
import GoogleLogo from '../assets/social/google.png';
import KakaoLogo from '../assets/social/kakao.png';

interface LoginData {
  email: string;
  password: string;
}

function LoginPage() {
  const [inputData, setInputData] = useState<LoginData>({
    email: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState<string | null>();
  const [passwordError, setPasswordError] = useState<string | null>();
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setInputData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleEmailBlur = () => {
    if (!inputData.email) {
      setEmailError('이메일을 입력해주세요.');
    } else if (!isValidEmail(inputData.email)) {
      setEmailError('잘못된 이메일 형식입니다.');
    } else {
      setEmailError(null);
    }
  };

  const handlePasswordBlur = () => {
    if (!inputData.password) {
      setPasswordError('비밀번호를 입력해주세요.');
    } else if (inputData.password.trim().length < 8) {
      setPasswordError('비밀번호를 8자 이상 입력해주세요.');
    }
  };

  // 이메일 유효성 검사
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  useEffect(() => {
    if (
      inputData.email &&
      inputData.password &&
      !emailError &&
      !passwordError
    ) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [inputData, emailError, passwordError]);

  return (
    <>
      <main>
        <div className="login-container">
          <Link className="brand" to="/">
            <img
              className="login-logo"
              src={LogoImg}
              alt="logo"
              width={100}
              height={100}
            />
            판다마켓
          </Link>
          <form id="form">
            <div className="input-box">
              <Input
                label="이메일"
                id="email"
                value={inputData.email}
                type="email"
                placeholder="이메일을 입력해주세요"
                onChange={handleChange}
                onBlur={handleEmailBlur}
              />
              {emailError && <p className="error-message">{emailError}</p>}
            </div>
            <div className="input-box">
              <Input
                label="비밀번호"
                id="password"
                type={!showPassword ? 'password' : 'text'}
                value={inputData.password}
                placeholder="비밀번호를 입력해주세요"
                onChange={handleChange}
                ref={passwordInputRef}
                onBlur={handlePasswordBlur}
              />
              {passwordError && (
                <p className="error-message">{passwordError}</p>
              )}
              {!showPassword ? (
                <img
                  className="hide-password-icon"
                  src={HidePasswordIcon}
                  alt="hide password"
                  onClick={togglePassword}
                />
              ) : (
                <img
                  className="show-password-icon"
                  src={ShowPasswordIcon}
                  alt="show password"
                  onClick={togglePassword}
                />
              )}
            </div>
            <button
              type="button"
              className="login-btn"
              disabled={!isButtonEnabled}
            >
              로그인
            </button>
          </form>
          <div className="social-login">
            <span>간편 로그인하기</span>
            <a href="https://google.com">
              <img src={GoogleLogo} alt="google logo" width="40" />
            </a>
            <a href="https://kakao.com">
              <img src={KakaoLogo} alt="google logo" width="40" />
            </a>
          </div>
          <span>
            판다마켓이 처음이신가요?
            <a href="/signup"> 회원가입</a>
          </span>
        </div>
      </main>
    </>
  );
}

export default LoginPage;
