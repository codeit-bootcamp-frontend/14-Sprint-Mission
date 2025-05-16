import Input from "@/components/input";
import Logo from "@/components/logo";
import SubmitButton from "@/components/submit-button";
import styles from "./login.module.css";

export default function Login() {
  return (
    <form action="" className={styles["login__form"]}>
      <Logo />
      <Input.Group type="email">
        <Input.Label label="이메일" />
        <Input.Field placeholder={"이메일을 입력해주세요"} />
      </Input.Group>
      <Input.Group type="password">
        <Input.Label label="비밀번호" />
        <Input.Field placeholder={"비밀번호를 입력해주세요"} />
      </Input.Group>
      <SubmitButton>로그인</SubmitButton>
    </form>
  );
}
