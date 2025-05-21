"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useEffect } from "react";

import { Button, InputField } from "@/components/index";
import { ConvenientSigninBox, RecommendSign } from "../_components";
import useForm from "@/hooks/useForm";
import { ROUTE } from "@/constants/route";
import { signupSchema } from "@/schema/auth";
import { convenientSigninIconSet } from "@/data/auth";

import OpenEyeIcon from "@/assets/icons/ic_opened_eye.svg";
import CloseEyeIcon from "@/assets/icons/ic_closed_eye.svg";

import styles from "./page.module.css";

const SigninPage = () => {
  const router = useRouter();
  const {
    formValue: { errors, values },
    isDirty,
    isValidate,
    blurHandler,
    changeHandler,
    removeError,
  } = useForm({
    mode: "onBlur",
    defaultValue: { email: "", password: "", repassword: "", nickname: "" },
    resolver: signupSchema,
  });

  useEffect(() => {
    if (values.password !== "" && values.password === values.repassword) {
      removeError("password");
      removeError("repassword");
    }
  }, [values.password, values.repassword, removeError]);

  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(ROUTE.SIGN_IN);
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
          errorMessage={errors?.email?.errors?.[0] ?? ""}
          onBlur={blurHandler}
          onChange={changeHandler}
        />
        <InputField
          label="닉네임"
          id="nickname"
          type="nickname"
          name="nickname"
          placeholder="닉네임을 입력해주세요."
          errorMessage={errors?.nickname?.errors?.[0] ?? ""}
          onBlur={blurHandler}
          onChange={changeHandler}
        />
        <InputField
          label="비밀번호"
          id="password"
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요."
          errorMessage={errors?.password?.errors?.[0] ?? ""}
          onBlur={blurHandler}
          onChange={changeHandler}
          renderEnabledIcon={<OpenEyeIcon />}
          renderDisabledIcon={<CloseEyeIcon />}
        />
        <InputField
          label="비밀번호 확인"
          id="repassword"
          type="password"
          name="repassword"
          placeholder="비밀번호를 다시 한 번 입력해주세요."
          errorMessage={errors?.repassword?.errors?.[0] ?? ""}
          onBlur={blurHandler}
          onChange={changeHandler}
          renderEnabledIcon={<OpenEyeIcon />}
          renderDisabledIcon={<CloseEyeIcon />}
        />
        <Button type="submit" disabled={!isValidate || !isDirty}>
          회원가입
        </Button>
      </form>
      <ConvenientSigninBox
        description="간편 로그인하기"
        iconSet={convenientSigninIconSet}
      />
      <RecommendSign text="이미 회원이신가요?" to="/signin" linkName="로그인" />
    </>
  );
};

export default SigninPage;
