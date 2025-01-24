import { onFormInputChange, onInputFocusOut, onVisibilityChange } from "./common/members.js";

const signupForm = document.getElementsByClassName("form-signup")[0];
const nicknameInputField = document.getElementById("input-wrapper-nickname");
const pwdCheckInputField = document.getElementById("input-wrapper-pwd-check");
const visiblilityAgainBtn = document.getElementById("visibility-again");
const signupBtn = document.getElementById("btn-submit-signup");

// input 이벤트 핸들러를 통한 버튼 활성화 처리
signupForm.addEventListener("input", () => onFormInputChange(signupBtn));

// focusout 이벤트 핸들러를 통한 에러 메세지 표시
nicknameInputField.addEventListener("focusout", onInputFocusOut);
pwdCheckInputField.addEventListener("focusout", onInputFocusOut);

// click 이벤트 핸들러를 통한 비밀번호 입력 확인 처리
visiblilityAgainBtn.addEventListener("click", onVisibilityChange);

// submit 이벤트 핸들러를 통한 페이지 이동 처리
signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "/signin";
});
