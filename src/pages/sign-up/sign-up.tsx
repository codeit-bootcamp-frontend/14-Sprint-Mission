import Input from "@/components/input";
import Logo from "@/components/logo";
import SimpleAuth from "@/components/simple-auth";
import SubmitButton from "@/components/submit-button";
import styles from "./sign-up.module.css";

export default function SignUp() {
  return (
    <>
      <form className={styles["sign-up__form"]}>
        <Logo />
        <Input.Group type="email">
          <Input.Label label="이메일" />
          <Input.Field placeholder="이메일을 입력해주세요" />
        </Input.Group>
        <Input.Group type="username">
          <Input.Label label="닉네임" />
          <Input.Field placeholder="닉네임을 입력해주세요" />
        </Input.Group>
        <Input.Group type="password">
          <Input.Label label="비밀번호" />
          <Input.Field placeholder="비밀번호를 입력해주세요" />
        </Input.Group>
        <Input.Group type="password">
          <Input.Label label="비밀번호 확인" />
          <Input.Field placeholder="비밀번호를 다시 한 번 입력해주세요" />
        </Input.Group>
        <SubmitButton>회원가입</SubmitButton>
        <SimpleAuth />
      </form>
    </>
  );
}
