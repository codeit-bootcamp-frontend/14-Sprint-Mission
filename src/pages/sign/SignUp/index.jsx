import * as S from "../style";
import { Link } from "react-router-dom";

import SignInput from "../SignInput";
import useInputConfirm from "@/hooks/useInputConfirm";
import Logo from "@/assets/images/logo.svg";
import Button from "../../../components/Button";

import Kakao from "@/assets/icons/ico_kakao.svg";
import Google from "@/assets/icons/ico_google.svg";

function Signup() {
  const email = useInputConfirm();
  const nickname = useInputConfirm();
  const pw = useInputConfirm();
  const confirmPw = useInputConfirm(pw.value);

  function passInputs() {
    if (email.msg || nickname.msg || pw.msg || confirmPw.msg) {
      return false;
    }

    return true;
  }

  return (
    <S.Container>
      <div className="sign-container">
        <a href="/" className="logo">
          <img src={Logo} />
        </a>
        <form className="sign-form" action="">
          <SignInput
            inputState={email}
            name={"email"}
            placeholder={"이메일을 입력해주세요"}
            type={"text"}
            title={"이메일"}
            autoComplete={"email"}
            id={"email"}
          />
          <SignInput
            inputState={nickname}
            name={"name"}
            placeholder={"닉네임을 입력해주세요"}
            type={"text"}
            title={"닉네임"}
            autoComplete={"username"}
            id={"nickname"}
          />
          <SignInput
            inputState={pw}
            name={"password"}
            placeholder={"비밀번호를 입력해주세요"}
            type={"password"}
            title={"비밀번호"}
            autoComplete={"new-password"}
            id={"password"}
            pw={confirmPw.value}
            value={pw.value}
            onChange={pw.onChange}
          />
          <SignInput
            inputState={confirmPw}
            name={"confirm-password"}
            placeholder={"비밀번호를 다시 한 번 입력해주세요"}
            type={"password"}
            title={"비밀번호 확인"}
            autoComplete={"new-password"}
            id={"confirm-password"}
            pw={pw.value}
          />
          <Button
            disabled={!passInputs()}
            round={true}
            height="56px"
            type="submit"
            id="submit"
          >
            회원가입
          </Button>
        </form>
        <div className="social-log-wrap">
          <p className="social-log-wrap__title">간편 로그인하기</p>
          <a
            className="icon"
            href="https://www.google.com"
            style={{ backgroundImage: `url(${Google})` }}
          ></a>
          <a
            className="icon"
            href="https://www.kakaocorp.com"
            style={{ backgroundImage: `url(${Kakao})` }}
          ></a>
        </div>
        <footer>
          이미 회원이신가요? <Link to="/login">로그인</Link>
        </footer>
      </div>
    </S.Container>
  );
}

export default Signup;
