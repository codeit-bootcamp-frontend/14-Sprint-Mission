import { useState, ChangeEvent, FormEvent, FocusEvent } from "react";
import { useNavigate } from "react-router-dom";

export const useSignupForm = () => {
  const [email, setEmail] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordConfirmation, setPasswordConfirmation] = useState<string>("");

  const [emailError, setEmailError] = useState<string>("");
  const [nicknameError, setNicknameError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [passwordConfirmationError, setPasswordConfirmationError] =
    useState<string>("");

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState<boolean>(false);

  const navigate = useNavigate();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  const validateEmail = (): boolean => {
    if (!email) {
      setEmailError("이메일을 입력해주세요.");
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError("잘못된 이메일 형식입니다");
      return false;
    }
    setEmailError("");
    return true;
  };

  const validateNickname = (): boolean => {
    if (!nickname) {
      setNicknameError("닉네임을 입력해주세요.");
      return false;
    }
    setNicknameError("");
    return true;
  };

  const validatePassword = (): boolean => {
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
      return false;
    } else if (password.length < 8) {
      setPasswordError("비밀번호를 8자 이상 입력해주세요.");
      return false;
    }
    setPasswordError("");
    // 비밀번호 변경 시 비밀번호 확인 필드도 다시 검증
    if (passwordConfirmation) validatePasswordConfirmation();
    return true;
  };

  const validatePasswordConfirmation = (): boolean => {
    if (!passwordConfirmation) {
      setPasswordConfirmationError("비밀번호를 다시 한 번 입력해 주세요.");
      return false;
    } else if (password !== passwordConfirmation) {
      setPasswordConfirmationError("비밀번호가 일치하지 않습니다.");
      return false;
    }
    setPasswordConfirmationError("");
    return true;
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmail(value);
    if (!value) setEmailError("이메일을 입력해주세요.");
    else if (!emailRegex.test(value)) setEmailError("잘못된 이메일 형식입니다");
    else setEmailError("");
  };

  const handleNicknameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setNickname(value);
    if (!value) setNicknameError("닉네임을 입력해주세요.");
    else setNicknameError("");
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setPassword(value);
    if (!value) setPasswordError("비밀번호를 입력해주세요.");
    else if (value.length < 8)
      setPasswordError("비밀번호를 8자 이상 입력해주세요.");
    else setPasswordError("");

    // 비밀번호 확인 필드와 즉시 비교
    if (passwordConfirmation && value !== passwordConfirmation) {
      setPasswordConfirmationError("비밀번호가 일치하지 않습니다.");
    } else if (passwordConfirmation && value === passwordConfirmation) {
      setPasswordConfirmationError("");
    }
  };

  const handlePasswordConfirmationChange = (
    e: ChangeEvent<HTMLInputElement>
  ) => {
    const { value } = e.target;
    setPasswordConfirmation(value);
    if (!value)
      setPasswordConfirmationError("비밀번호를 다시 한 번 입력해 주세요.");
    else if (password !== value)
      setPasswordConfirmationError("비밀번호가 일치하지 않습니다.");
    else setPasswordConfirmationError("");
  };

  const toggleShowPassword = () => setShowPassword(!showPassword);
  const toggleShowPasswordConfirmation = () =>
    setShowPasswordConfirmation(!showPasswordConfirmation);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isEmailValid = validateEmail();
    const isNicknameValid = validateNickname();
    const isPasswordValid = validatePassword();
    const isPasswordConfirmationValid = validatePasswordConfirmation();

    if (
      isEmailValid &&
      isNicknameValid &&
      isPasswordValid &&
      isPasswordConfirmationValid
    ) {
      console.log("Signup successful", { email, nickname, password });
      navigate("/signin");
    } else {
      console.log("Signup failed: Invalid input");
    }
  };

  const isFormValid: boolean =
    !!email &&
    !!nickname &&
    !!password &&
    !!passwordConfirmation &&
    !emailError &&
    !nicknameError &&
    !passwordError &&
    !passwordConfirmationError &&
    password.length >= 8 &&
    password === passwordConfirmation &&
    emailRegex.test(email);

  return {
    formData: {
      email,
      nickname,
      password,
      passwordConfirmation,
    },
    errors: {
      emailError,
      nicknameError,
      passwordError,
      passwordConfirmationError,
    },
    visibility: {
      showPassword,
      showPasswordConfirmation,
    },
    handlers: {
      handleEmailChange,
      handleNicknameChange,
      handlePasswordChange,
      handlePasswordConfirmationChange,
      validateEmail: validateEmail as (
        e?: FocusEvent<HTMLInputElement>
      ) => boolean, // onBlur 타입 호환성 위해 수정
      validateNickname: validateNickname as (
        e?: FocusEvent<HTMLInputElement>
      ) => boolean,
      validatePassword: validatePassword as (
        e?: FocusEvent<HTMLInputElement>
      ) => boolean,
      validatePasswordConfirmation: validatePasswordConfirmation as (
        e?: FocusEvent<HTMLInputElement>
      ) => boolean,
      toggleShowPassword,
      toggleShowPasswordConfirmation,
      handleSubmit,
    },
    isFormValid,
  };
};
