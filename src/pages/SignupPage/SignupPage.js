import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import {
  Button,
  FormField,
  RecommendSign,
  ConvenientSigninBox,
} from "../../components";
import { convenientSigninIconSet } from "../../data/auth";
import { signupSchema } from "../../schema/auth";
import useForm from "../../hooks/useForm";

import OpenEyeIcon from "../../assets/icons/ic_opened_eye.svg";
import CloseEyeIcon from "../../assets/icons/ic_closed_eye.svg";

import styles from "./SignupPage.module.css";

const SigninPage = () => {
  const navigate = useNavigate();
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
      console.log("check");
      removeError("password");
      removeError("repassword");
    }
  }, [values.password, values.repassword, removeError]);

  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/signin");
  };

  return (
    <>
      <form className={styles.auth_form} onSubmit={submitHandler}>
        <FormField
          label="이메일"
          id="email"
          type="text"
          name="email"
          placeholder="이메일을 입력해주세요."
          errorMessage={errors?.email?.errors?.[0] ?? ""}
          onBlur={blurHandler}
          onChange={changeHandler}
        />
        <FormField
          label="닉네임"
          id="nickname"
          type="nickname"
          name="nickname"
          placeholder="닉네임을 입력해주세요."
          errorMessage={errors?.nickname?.errors?.[0] ?? ""}
          onBlur={blurHandler}
          onChange={changeHandler}
        />
        <FormField
          label="비밀번호"
          id="password"
          type="password"
          name="password"
          placeholder="비밀번호를 입력해주세요."
          errorMessage={errors?.password?.errors?.[0] ?? ""}
          onBlur={blurHandler}
          onChange={changeHandler}
          renderEnabledIcon={<img src={OpenEyeIcon} alt="눈 뜬 아이콘" />}
          renderDisabledIcon={<img src={CloseEyeIcon} alt="눈 감은 아이콘" />}
        />
        <FormField
          label="비밀번호 확인"
          id="repassword"
          type="password"
          name="repassword"
          placeholder="비밀번호를 다시 한 번 입력해주세요."
          errorMessage={errors?.repassword?.errors?.[0] ?? ""}
          onBlur={blurHandler}
          onChange={changeHandler}
          renderEnabledIcon={<img src={OpenEyeIcon} alt="눈 뜬 아이콘" />}
          renderDisabledIcon={<img src={CloseEyeIcon} alt="눈 감은 아이콘" />}
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
