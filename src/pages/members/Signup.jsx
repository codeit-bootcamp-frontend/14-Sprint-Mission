import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { INITIAL_SIGNUP_VALUE, signUp } from "../../apis/auth";
import LogoImage from "../../assets/images/logo/panda-market-logo.png";
import InputField from "../../components/InputField";
import { useSetUser, useUser } from "../../contexts/UserContext";
import { checkValidation } from "../../utils/members";
import PwdInput from "./components/PwdInput";
import SocailLogin from "./components/SocialLogin";
import "./members.scss";

export default function Signup() {
  const { state } = useLocation();
  const user = useUser();
  if (user) {
    return <Navigate to={state || "/"} />;
  }

  const setUser = useSetUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(INITIAL_SIGNUP_VALUE);
  const [errData, setErrData] = useState(INITIAL_SIGNUP_VALUE);
  const [isBtnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    for (const name in formData) {
      if (formData[name] === "" || errData[name].length > 0) {
        setBtnDisabled(true);
        return;
      }
    }
    setBtnDisabled(false);
  }, [formData, errData]);

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
      const { loading, user } = datas;
      setBtnDisabled(loading);
      setUser(user);
      if (user) navigate("/items");
    } else setBtnDisabled(false);
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
          name="email"
          type="email"
          placeholder="이메일을 입력해주세요"
          value={formData.email}
          onChange={onInputChange}
        >
          {errData.email?.length > 0 && (
            <p className="text-error text-md text-semibold">{errData.email}</p>
          )}
        </InputField>
        <InputField
          labelText="닉네임"
          name="nickname"
          placeholder="닉네임을 입력해주세요"
          value={formData.nickname}
          onChange={onInputChange}
        >
          {errData.nickname?.length > 0 && (
            <p className="text-error text-md text-semibold">{errData.nickname}</p>
          )}
        </InputField>
        <PwdInput value={formData.password} onChange={onInputChange}>
          {errData.password?.length > 0 && (
            <p className="text-error text-md text-semibold">{errData.password}</p>
          )}
        </PwdInput>
        <PwdInput
          labelText="비밀번호 확인"
          name="passwordConfirmation"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          value={formData.passwordConfirmation}
          onChange={onInputChange}
        >
          {errData.passwordConfirmation?.length > 0 && (
            <p className="text-error text-md text-semibold">{errData.passwordConfirmation}</p>
          )}
        </PwdInput>
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
