import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../app";
import LogoImage from "../../assets/images/logo/panda-market-logo.png";
import PwdInput from "./components/PwdInput";
import SocailLogin from "./components/SocialLogin";
import TextInput from "./components/TextInput";
import "./members.css";

export default function Login() {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const [formData, setFormData] = useState({});
  const [isBtnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    if (!(formData.email?.length > 0 || formData.password?.length > 0)) return;
    const errMsgs = document.querySelectorAll(".text-error");
    if (errMsgs.length === 0) setBtnDisabled(false);
  }, [formData]);

  function onLogin(e) {
    e.preventDefault();
    setUser({ email: formData.email });
    navigate("/items");
  }

  return (
    <main className="form-wrapper flex-center gap-40" id="members">
      <title>판다 마켓 - 로그인</title>
      <Link to="/">
        <img src={LogoImage} alt="로고 이미지" id="logo" />
      </Link>
      <form className="form-login grid-center gap-24" onSubmit={onLogin}>
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
        <div className="flex-center gap-4 text-md text-medium" id="signup-wrapper">
          <p>판다마켓이 처음이신가요?</p>
          <Link to="/signup">회원가입</Link>
        </div>
      </form>
    </main>
  );
}
