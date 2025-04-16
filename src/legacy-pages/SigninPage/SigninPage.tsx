import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  InputField,
  RecommendSign,
  ConvenientSigninBox,
} from "@/components/index";
import useForm from "@/hooks/useForm";
import { ROUTE } from "@/constants/route";
import { signinSchema } from "@/schema/auth";
import { convenientSigninIconSet } from "@/data/auth";

import styles from "./SigninPage.module.css";

const SigninPage = () => {
  const navigate = useNavigate();
  const { formValue, isDirty, isValidate, blurHandler } = useForm({
    mode: "onBlur",
    defaultValue: { email: "", password: "" },
    resolver: signinSchema,
  });

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(ROUTE.ITEMS);
  };

  return (
    <>
      <form className={styles.auth_form} onSubmit={submitHandler}>
        <InputField
          label="이메일"
          id="email"
          type="text"
          name="email"
          placeholder="이메일을 입력해주세요."
          errorMessage={formValue.errors?.email?.errors[0] ?? ""}
          onBlur={blurHandler}
        />
        <InputField
          label="비밀번호"
          id="password"
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요."
          errorMessage={formValue.errors?.password?.errors[0] ?? ""}
          onBlur={blurHandler}
        />
        <Button type="submit" disabled={!isValidate || !isDirty}>
          로그인
        </Button>
      </form>
      <ConvenientSigninBox
        description="간편 로그인하기"
        iconSet={convenientSigninIconSet}
      />
      <RecommendSign
        text="판다마켓이 처음이신가요?"
        to={ROUTE.SIGN_UP}
        linkName="회원가입"
      />
    </>
  );
};

export default SigninPage;
