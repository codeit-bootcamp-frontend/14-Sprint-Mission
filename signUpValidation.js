import {
  validateField,
  validatePasswordConfirm,
} from "./validationFunctions.js";
import { setupPasswordToggle } from "./passwordToggle.js";

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form");
  const submitButton = document.querySelector(".form__button");

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

  const validateForm = () => {
    const valid = (field) => field.isValid;
    const isEmailValid = valid(fields.email);
    const isUsernameValid = valid(fields.username);
    const isPasswordValid = valid(fields.password);
    const isPasswordConfirmValid = valid(fields.passwordConfirm);
    console.log(
      isEmailValid,
      isUsernameValid,
      isPasswordValid,
      isPasswordConfirmValid
    );
    // 모든 필드가 유효하면 버튼 활성화
    submitButton.disabled = !(
      isEmailValid &&
      isUsernameValid &&
      isPasswordValid &&
      isPasswordConfirmValid
    );
  };

  Object.values(fields).forEach((field) => {
    if (field.regex) {
      field.input.addEventListener("focusout", () => validateField(field));
    }
  });

  fields.passwordConfirm.input.addEventListener("focusout", (e) =>
    validatePasswordConfirm(fields.password, fields.passwordConfirm)
  );
  setupPasswordToggle();

  form.addEventListener("submit", (e) => {
    validateForm();
    console.log(submitButton.disabled);
    if (submitButton.disabled) {
      e.preventDefault();
      alert("유효하지 않은 값을 입력하셨습니다.");
    }
  });
});
