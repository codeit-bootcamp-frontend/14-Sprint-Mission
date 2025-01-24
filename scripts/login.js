import { onFormInputChange, onInputFocusOut, onVisibilityChange } from "./common/members.js";

const loginForm = document.getElementsByClassName("form-login")[0];
const emailInputField = document.getElementById("input-wrapper-email");
const pwdInputField = document.getElementById("input-wrapper-pwd");
const visiblilityBtn = document.getElementById("visibility");
const loginBtn = document.getElementById("btn-submit-login");

// input 이벤트 핸들러를 통한 버튼 활성화 처리
loginForm?.addEventListener("input", () => onFormInputChange(loginBtn));

// focusout 이벤트 핸들러를 통한 에러 메세지 표시
emailInputField.addEventListener("focusout", onInputFocusOut);
pwdInputField.addEventListener("focusout", onInputFocusOut);

// click 이벤트 핸들러를 통한 비밀번호 입력 확인 처리
visiblilityBtn.addEventListener("click", onVisibilityChange);

// submit 이벤트 핸들러를 통한 페이지 이동 처리
loginForm?.addEventListener("submit", (e) => {
  e.preventDefault();
  window.location.href = "/items";
});
