import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LogoImage from "../../assets/images/logo/panda-market-logo.png";
import PwdInput from "./components/PwdInput";
import SocailLogin from "./components/SocialLogin";
import TextInput from "./components/TextInput";
import "./members.css";

export default function Signup() {
  const [formData, setFormData] = useState({});
  const [isBtnDisabled, setBtnDisabled] = useState(true);

  useEffect(() => {
    if (
      !(
        formData.email?.length > 0 ||
        formData.nickname?.length > 0 ||
        formData.password?.length > 0 ||
        formData.passwordConfirmation?.length > 0
      )
    )
      return;
    const errMsgs = document.querySelectorAll(".text-error");
    if (errMsgs.length === 0) setBtnDisabled(false);
  }, [formData]);

  return (
    <main className="form-wrapper flex-center gap-40" id="members">
      <title>판다 마켓 - 회원가입</title>
      <Link to="/">
        <img src={LogoImage} alt="로고 이미지" id="logo" />
      </Link>
      <form className="form-signup grid-center gap-24">
        <TextInput
          value={formData.email}
          onChange={(v) => setFormData({ ...formData, email: v })}
        />
        <TextInput
          labelText="닉네임"
          id="nickname"
          type="text"
          placeholder="닉네임을 입력해주세요"
          value={formData.nickname}
          onChange={(v) => setFormData({ ...formData, nickname: v })}
        />
        <PwdInput
          value={formData.password}
          onChange={(v) => setFormData({ ...formData, password: v })}
        />
        <PwdInput
          labelText="비밀번호 확인"
          id="pwd-check"
          placeholder="비밀번호를 다시 한 번 입력해주세요"
          value={formData.passwordConfirmation}
          onChange={(v) => setFormData({ ...formData, passwordConfirmation: v })}
          isValid={formData.password === formData.passwordConfirmation}
        />
        <button type="submit" id="btn-submit" disabled={isBtnDisabled}>
          회원가입
        </button>
        <SocailLogin />
        <div className="flex-center gap-4 text-md text-medium" id="signup-wrapper">
          <p>이미 회원이신가요?</p>
          <Link to="/login">로그인</Link>
        </div>
      </form>
    </main>
  );
}
