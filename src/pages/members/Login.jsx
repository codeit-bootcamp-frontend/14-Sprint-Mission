import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { INITIAL_LOGIN_VALUE, logIn } from "../../apis/auth";
import LogoImage from "../../assets/images/logo/panda-market-logo.png";
import { useSetUser } from "../../contexts/UserContext";
import PwdInput from "./components/PwdInput";
import SocailLogin from "./components/SocialLogin";
import TextInput from "./components/TextInput";
import "./members.scss";

export default function Login() {
  const navigate = useNavigate();
  const setUser = useSetUser();
  const [formData, setFormData] = useState(INITIAL_LOGIN_VALUE);
  const [isBtnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    if (formData.email.length === 0 || formData.password.length === 0) return;
    const errMsgs = document.querySelectorAll(".text-error");
    if (errMsgs.length === 0) setBtnDisabled(false);
  }, [formData]);

  async function onLogin(e) {
    e.preventDefault();
    const datas = await logIn(formData);
    if (datas) {
      const { loading, user } = datas;
      setBtnDisabled(loading);
      setUser(user);
      if (user) navigate("/items");
    }
  }

  return (
    <main className="form-wrapper display-flex justify-center gap-40" id="members">
      <title>판다 마켓 - 로그인</title>
      <Link to="/">
        <img src={LogoImage} alt="로고 이미지" id="logo" />
      </Link>
      <form className="form-login display-grid justify-center gap-24" onSubmit={onLogin}>
        <TextInput
          value={formData.email}
          onChange={(v) => setFormData({ ...formData, email: v })}
        />
        <PwdInput
          value={formData.password}
          onChange={(v) => setFormData({ ...formData, password: v })}
        />
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
