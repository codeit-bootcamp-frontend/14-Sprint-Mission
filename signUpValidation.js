import {
  validateField,
  validatePasswordConfirm,
} from "./validationFunctions.js";
import { setupPasswordToggle } from "./passwordToggle.js";

//DOM이 준비 된 이후에 실행하기
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const submitButton = document.querySelector(".form__button");

  //객체를 이용해 각 필드를 저장해서 추후 함수를 실행할 때 명확성을 고려함
  const fields = {
    email: {
      input: document.getElementById("email"),
      error: document.getElementById("emailErrorMessage"),
      regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
      emptyMessage: "이메일을 입력해주세요.",
      invalidMessage: "잘못된 이메일 형식입니다.",
      isValid: false,
    },
    username: {
      input: document.getElementById("username"),
      error: document.getElementById("usernameErrorMessage"),
      regex: /./,
      emptyMessage: "닉네임을 입력해주세요.",
      invalidMessage: "닉네임은 공백일 수 없습니다.",
      isValid: false,
    },
    password: {
      input: document.getElementById("password"),
      error: document.getElementById("passwordErrorMessage"),
      regex: /^.{8,}$/,
      emptyMessage: "비밀번호를 입력해주세요.",
      invalidMessage: "비밀번호를 8자 이상 입력해주세요.",
      isValid: false,
    },
    passwordConfirm: {
      input: document.getElementById("passwordConfirm"),
      error: document.getElementById("passwordConfirmError"),
      emptyMessage: "비밀번호를 다시 한 번 입력해주세요.",
      invalidMessage: "비밀번호가 일치하지 않습니다.",
      isValid: false,
    },
  };

  //필드들의 isValid 값을 모두 모아 평가하는 함수선언
  //모두 참이면 disabled='true' 하나라도 거짓이면 disabled='false'  
  //loginValidation에서 사용한 함수와는 필요한 필드 갯수에서 차이가 있어 따로 선언함
  const validateForm = () => {
    const valid = (field) => field.isValid;
    const isEmailValid = valid(fields.email);
    const isUsernameValid = valid(fields.username);
    const isPasswordValid = valid(fields.password);
    const isPasswordConfirmValid = valid(fields.passwordConfirm);

    submitButton.disabled = !(
      isEmailValid &&
      isUsernameValid &&
      isPasswordValid &&
      isPasswordConfirmValid
    );
  };

  //객체를 순회하면서 각 필드마다 이벤트리스너 등록
  Object.values(fields).forEach((field) => {
    if (field.regex) {
      field.input.addEventListener("focusout", () => validateField(field));
    }
  });
  //비밀번호 확인을 위한 필드엔 별도의 이벤트리스너 등록
  fields.passwordConfirm.input.addEventListener("focusout", (e) =>
    validatePasswordConfirm(fields.password, fields.passwordConfirm)
  );
  setupPasswordToggle(); //비밀번호 보이기 토글 버튼 세팅

  //폼이 제출될 때 검증값들을 종합 확인하고 유효하지 않은 경우 알림
  form.addEventListener("submit", (e) => {
    validateForm();
    if (submitButton.disabled) {
      e.preventDefault();
      alert("유효하지 않은 값을 입력하셨습니다.");
    }
  });
});
