import { addErrorEvent, hideError, showError } from "./validationFunctions.js";

const element = {
  email: {
    input: document.getElementById("email"),
    error: document.getElementById("emailErrorMessage"),
    regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    emptyMessage: "이메일을 입력해주세요.",
    invalidMessage: "잘못된 이메일 형식입니다.",
  },
  username: {
    input: document.getElementById("username"),
    error: document.getElementById("usernameErrorMessage"),
    regex: /./,
    emptyMessage: "닉네임을 입력해주세요.",
    invalidMessage: "닉네임은 공백일 수 없습니다.",
  },
  password: {
    input: document.getElementById("password"),
    error: document.getElementById("passwordErrorMessage"),
    regex: /^.{8,}$/,
    emptyMessage: "비밀번호를 입력해주세요.",
    invalidMessage: "비밀번호를 8자 이상 입력해주세요.",
  },
  passwordConfirm: {
    input: document.getElementById("passwordConfirm"),
    error: document.getElementById("passwordConfirmError"),
    emptyMessage: "비밀번호를 다시 한 번 입력해주세요.",
    invalidMessage: "비밀번호가 일치하지 않습니다.",
  },
};

const passwordConfirmFunc = (e, password) => {
  const passwordConfirm = e.target.value;
  if (!passwordConfirm) {
    showError(element["passwordConfirm"], element.passwordConfirm.emptyMessage);
  } else if (password !== passwordConfirm) {
    showError(
      element["passwordConfirm"],
      element.passwordConfirm.invalidMessage
    );
  } else {
    hideError(element["passwordConfirm"]);
  }
};

document.addEventListener("DOMContentLoaded", function () {
  addErrorEvent(element["email"]);
  addErrorEvent(element["password"]);
  addErrorEvent(element["username"]);
  element.passwordConfirm.input.addEventListener("focusout", (e) =>
    passwordConfirmFunc(e, element.password.input.value)
  );
});
