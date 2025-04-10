import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

import pandaLogo from "../../assets/panda-logo.png";
import kakaoImg from "../../assets/kakao.png";
import googleImg from "../../assets/google.png";
import eyesOn from "../../assets/eyes-on.png";
import eyes from "../../assets/eyes.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const validateEmail = () => {
    if (email.trim() === "") {
      setEmailError("이메일을 입력해주세요.");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setEmailError("잘못된 이메일 형식입니다");
    } else {
      setEmailError("");
    }
  };

  const validatePassword = () => {
    if (password.trim() === "") {
      setPasswordError("비밀번호를 입력해주세요.");
    } else if (password.length < 8) {
      setPasswordError("비밀번호를 8자 이상 입력해주세요.");
    } else {
      setPasswordError("");
    }
  };

  const isFormValid =
    email && password && emailError === "" && passwordError === "";

  const handleSubmit = (e) => {
    e.preventDefault();
    validateEmail();
    validatePassword();

    if (isFormValid) {
      navigate("/items");
    }
  };

  return (
    <div className="flex-center mx-[16px]">
      <div className="w-full max-w-[640px] mx-auto mobile:mt-[100px] tablet:mt-[160px] pc:mt-[231px]">
        <div className="flex-center mobile:h-[66px] tablet:h-[132px] mobile:mb-[24px] tablet:mb-[40px]">
          <Link
            to={"/"}
            className="mobile:w-[198px] tablet:min-w-[396px] pc:min-w-[396px]"
          >
            <img src={pandaLogo} alt="panda-logo" />
          </Link>
        </div>
        <div className="w-full">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" className="label-primary">
              이메일
            </label>
            <input
              type="text"
              id="email"
              placeholder="이메일을 입력해주세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={validateEmail}
              className={`input-primary tablet:h-[64px] pc:h-[72px] ${
                emailError ? "border border-red-500 mb-[8px]" : ""
              }`}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-[4px] ml-[16px]">
                {emailError}
              </p>
            )}

            <label htmlFor="password" className="label-primary mt-[24px]">
              비밀번호
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="비밀번호를 입력해주세요"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={validatePassword}
                className={`input-primary tablet:h-[64px] pc:h-[72px] ${
                  passwordError ? "border border-red-500 mb-[8px]" : ""
                }`}
              />
              <button
                type="button"
                className="absolute top-[16px] right-[24px] flex justify-center items-center tablet:top-[20px] pc:top-[24px]"
                onClick={() => setShowPassword(!showPassword)}
              >
                <img
                  src={showPassword ? eyesOn : eyes}
                  alt="eyes toggle"
                  className="w-[24px] h-[24px]"
                />
              </button>
            </div>
            {passwordError && (
              <p className="text-red-500 text-sm mt-[4px] ml-[16px]">
                {passwordError}
              </p>
            )}

            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full h-[56px] rounded-[40px] text-white font-semibold text-[20px] flex justify-center items-center mb-[24px] mt-[24px] ${
                isFormValid ? "bg-[#3692FF]" : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              로그인
            </button>
          </form>

          <div className="social-login">
            <span className="ml-[23px] font-medium text-[16px] text-[#1F2937]">
              간편 로그인하기
            </span>
            <span className="flex gap-[16px] mr-[23px]">
              <img
                src={googleImg}
                alt="google-logo"
                className="w-[42px] h-[42px]"
              />
              <img
                src={kakaoImg}
                alt="kakao-logo"
                className="w-[42px] h-[42px]"
              />
            </span>
          </div>

          <div className="flex justify-center gap-[4px] pb-[100px] text-[14px]">
            <span className="text-[#1F2937]">판다마켓이 처음이신가요?</span>
            <Link to={"/signup"} className="text-[#3692FF]">
              회원가입
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
