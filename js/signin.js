import { checkEmailInput,checkPasswordInput, checkInputs } from './validate.js';

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const eyeSlashImg = document.getElementById("eye-slash");
const loginButton = document.querySelector(".login-btn");
const form = document.getElementById('form');

// 비밀번호 표시
eyeSlashImg.addEventListener('click',toggleVisibility);

function toggleVisibility() {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeSlashImg.src = "/images/eye.svg";
  } else {
    passwordInput.type = "password";
    eyeSlashImg.src = "/images/eye-slash.svg";
  }
}

// 모든 필드 값 입력시 버튼 활성화
form.addEventListener('input', () => checkInputs(form, loginButton));

// 유효성 검사
emailInput.addEventListener('focusout', (e) => {
  checkEmailInput(e.target);
  checkInputs(form, loginButton);
});
passwordInput.addEventListener('focusout', (e) => {
  checkPasswordInput(e.target);
  checkInputs(form, loginButton);
})

//로그인 버튼
loginButton.addEventListener('click', () => {
  window.location.href = '/items.html';
});