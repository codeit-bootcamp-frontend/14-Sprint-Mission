import { addErrorEvent } from "./validationFunctions.js";

const element = {
  email: {
    input: document.getElementById("email"),
    error: document.getElementById("emailErrorMessage"),
    regex: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
    emptyMessage: "이메일을 입력해주세요",
    invalidMessage: "잘못된 이메일 형식입니다.",
  },
  password: {
    input: document.getElementById("password"),
    error: document.getElementById("passwordErrorMessage"),
    regex: /^.{8,}$/,
    emptyMessage: "비밀번호를 입력해주세요",
    invalidMessage: "비밀번호를 8자 이상 입력해주세요",
  },
};

document.addEventListener("DOMContentLoaded", function () {
  addErrorEvent(element["email"]);
  addErrorEvent(element["password"]);
});
