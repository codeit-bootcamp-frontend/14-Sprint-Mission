import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { INITIAL_SIGNUP_VALUE, signUp } from "../../apis/auth";
import LogoImage from "../../assets/images/logo/panda-market-logo.png";
import InputField from "../../components/InputField";
import { useSetUser } from "../../contexts/UserContext";
import { checkValidation } from "../../utils/members";
import SocailLogin from "./components/SocialLogin";
import "./members.scss";

export default function Signup() {
  const { state } = useLocation();
  const setUser = useSetUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(INITIAL_SIGNUP_VALUE);
  const [errData, setErrData] = useState(INITIAL_SIGNUP_VALUE);

  const isBtnDisabled =
    Object.values(formData).filter((value) => value.length === 0).length > 0 ||
    Object.values(errData).filter((msg) => msg.length > 0).length > 0;

  function onInputChange(name, value) {
    const newValue = { ...formData, [name]: value };
    const msg = checkValidation(name, newValue);
    setErrData({ ...errData, [name]: msg });
    setFormData(newValue);
  }

  async function onSignup(e) {
    e.preventDefault();
    const datas = await signUp(formData);
    if (datas) {
      setUser(datas);
      navigate(state || "/items");
    }
  }

  return (
    <main className="form-wrapper display-flex justify-center gap-40" id="members">
      <title>판다 마켓 - 회원가입</title>
      <Link to="/">
        <img src={LogoImage} alt="로고 이미지" id="logo" />
      </Link>
      <form className="form-signup display-grid justify-center gap-24" onSubmit={onSignup}>
        <InputField
          labelText="이메일"
          type="email"
          name="email"
          placeholder="이메일을 입력해주세요"
          value={formData.email}
          errMsg={errData.email}
          onChange={onInputChange}
        />
        <InputField
          labelText="닉네임"
          name="nickname"
          placeholder="닉네임을 입력해주세요"
          value={formData.nickname}
          errMsg={errData.nickname}
          onChange={onInputChange}
        />
        <InputField
          labelText="비밀번호"
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요"
          value={formData.password}
          errMsg={errData.password}
          onChange={onInputChange}
        />
        <InputField
          labelText="비밀번호 확인"
          type="password"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          name="passwordConfirmation"
          value={formData.passwordConfirmation}
          errMsg={errData.passwordConfirmation}
          onChange={onInputChange}
        />
        <button type="submit" id="btn-submit" disabled={isBtnDisabled}>
          회원가입
        </button>
        <SocailLogin />
        <div className="display-flex justify-center gap-4 text-md text-medium" id="signup-wrapper">
          <p>이미 회원이신가요?</p>
          <Link to="/login">로그인</Link>
        </div>
      </form>
    </main>
  );
}
