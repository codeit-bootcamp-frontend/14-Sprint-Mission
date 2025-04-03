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
    password: {
      input: document.getElementById("password"),
      error: document.getElementById("passwordErrorMessage"),
      regex: /^.{8,}$/,
      emptyMessage: "비밀번호를 입력해주세요.",
      invalidMessage: "비밀번호를 8자 이상 입력해주세요.",
      isValid: false,
    },
  };

  const validateForm = () => {
    const valid = (field) => field.isValid;
    const isEmailValid = valid(fields.email);
    const isPasswordValid = valid(fields.password);

    submitButton.disabled = !(isEmailValid && isPasswordValid);
  };

  Object.values(fields).forEach((field) =>
    field.input.addEventListener("focusout", () => validateField(field))
  );

  form.addEventListener("submit", (e) => {
    validateForm();
    if (submitButton.disabled) {
      e.preventDefault();
      alert("유효하지 않은 값을 입력하셨습니다.");
    }
  });
});
