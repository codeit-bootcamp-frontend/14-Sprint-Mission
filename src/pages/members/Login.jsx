import { useEffect, useState } from "react";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { INITIAL_LOGIN_VALUE, logIn } from "../../apis/auth";
import LogoImage from "../../assets/images/logo/panda-market-logo.png";
import InputField from "../../components/InputField";
import { useSetUser, useUser } from "../../contexts/UserContext";
import { checkValidation } from "../../utils/members";
import PwdInput from "./components/PwdInput";
import SocailLogin from "./components/SocialLogin";
import "./members.scss";

export default function Login() {
  const { state } = useLocation();
  const user = useUser();
  if (user) {
    return <Navigate to={state || "/"} />;
  }

  const setUser = useSetUser();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(INITIAL_LOGIN_VALUE);
  const [errData, setErrData] = useState(INITIAL_LOGIN_VALUE);
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

  async function onLogin(e) {
    e.preventDefault();
    setBtnDisabled(true);
    const datas = await logIn(formData);
    if (datas) {
      setUser(datas);
      if (user) navigate(state || "/items");
    } else setBtnDisabled(true);
  }

  return (
    <main className="form-wrapper display-flex justify-center gap-40" id="members">
      <title>판다 마켓 - 로그인</title>
      <Link to="/">
        <img src={LogoImage} alt="로고 이미지" id="logo" />
      </Link>
      <form className="form-login display-grid justify-center gap-24" onSubmit={onLogin}>
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
        <PwdInput value={formData.password} onChange={onInputChange}>
          {errData.password?.length > 0 && (
            <p className="text-error text-md text-semibold">{errData.password}</p>
          )}
        </PwdInput>
        <button type="submit" id="btn-submit" disabled={isBtnDisabled} onClick={onLogin}>
          로그인
        </button>
        <SocailLogin />
        <div className="display-flex justify-center gap-4 text-md text-medium" id="signup-wrapper">
          <p>판다마켓이 처음이신가요?</p>
          <Link to="/signup">회원가입</Link>
        </div>
      </form>
    </main>
  );
}
