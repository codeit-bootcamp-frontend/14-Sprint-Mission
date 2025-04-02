import './SignUpPage.css';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import LogoImg from '../assets/images/logo.png';
import HidePasswordIcon from '../assets/icons/eye-slash.svg';
import ShowPasswordIcon from '../assets/icons/eye.svg';
import Input from '../components/common/Input';
import GoogleLogo from '../assets/social/google.png';
import KakaoLogo from '../assets/social/kakao.png';

interface SignUpData {
  email: string;
  username: string;
  password: string;
  passwordConfirm: string;
}

function SignUpPage() {
  const [inputData, setInputData] = useState<SignUpData>({
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
  });
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordConfirm, setShowPasswordConfirm] =
    useState<boolean>(false);
  const passwordInputRef = useRef<HTMLInputElement>(null);
  const passwordConfirmInputRef = useRef<HTMLInputElement>(null);
  const [emailError, setEmailError] = useState<string | null>();
  const [usernameError, setUsernameError] = useState<string | null>();
  const [passwordError, setPasswordError] = useState<string | null>();
  const [passwordConfirmError, setPasswordConfirmError] = useState<
    string | null
  >();
  const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const togglePasswordConfirm = () => {
    setShowPasswordConfirm((prev) => !prev);
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

  const handleUserNameBlur = () => {
    if (!inputData.username) {
      setUsernameError('닉네임을 입력해주세요.');
    } else {
      setUsernameError(null);
    }
  };

  const handlePasswordBlur = () => {
    if (!inputData.password) {
      setPasswordError('비밀번호를 입력해주세요.');
    } else if (inputData.password.trim().length < 8) {
      setPasswordError('비밀번호를 8자 이상 입력해주세요.');
    } else {
      setPasswordError(null);
    }
  };

  const handlePasswordConfirmBlur = () => {
    if (!inputData.passwordConfirm) {
      setPasswordConfirmError('비밀번호를 입력해주세요.');
    } else if (inputData.password.trim() !== inputData.passwordConfirm.trim()) {
      setPasswordConfirmError('비밀번호가 일치하지 않습니다.');
    } else {
      setPasswordConfirmError(null);
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
      inputData.passwordConfirm &&
      inputData.username &&
      !emailError &&
      !usernameError &&
      !passwordError &&
      !passwordConfirmError
    ) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [
    inputData,
    emailError,
    passwordError,
    usernameError,
    passwordConfirmError,
  ]);

  return (
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
              label="닉네임"
              id="username"
              value={inputData.username}
              type="text"
              placeholder="닉네임을 입력해주세요"
              onChange={handleChange}
              onBlur={handleUserNameBlur}
            />
            {usernameError && <p className="error-message">{usernameError}</p>}
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
            {passwordError && <p className="error-message">{passwordError}</p>}
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
          <div className="input-box">
            <Input
              label="비밀번호 확인"
              id="passwordConfirm"
              type={!showPassword ? 'password' : 'text'}
              value={inputData.passwordConfirm}
              placeholder="비밀번호를 다시 한번 입력해주세요"
              onChange={handleChange}
              ref={passwordConfirmInputRef}
              onBlur={handlePasswordConfirmBlur}
            />
            {passwordConfirmError && (
              <p className="error-message">{passwordConfirmError}</p>
            )}
            {!showPasswordConfirm ? (
              <img
                className="hide-password-icon"
                src={HidePasswordIcon}
                alt="hide password"
                onClick={togglePasswordConfirm}
              />
            ) : (
              <img
                className="show-password-icon"
                src={ShowPasswordIcon}
                alt="show password"
                onClick={togglePasswordConfirm}
              />
            )}
          </div>
          <button
            type="button"
            className="login-btn"
            disabled={!isButtonEnabled}
          >
            회원가입
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
          이미 회원이신가요?
          <a href="/login"> 로그인</a>
        </span>
      </div>
    </main>
  );
}

export default SignUpPage;
