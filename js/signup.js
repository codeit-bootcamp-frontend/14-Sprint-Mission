import {  
  checkEmailInput,
  checkPasswordInput,
  checkPasswordConfirmInput,
  checkUsernameInput,
  checkInputs,
} from './validate.js';

const emailInput = document.getElementById("email");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("password-confirm");
const eyeSlashImg = document.getElementById("eye-slash");
const eyeSlashConfirmImg = document.getElementById("eye-slash-confirm");
const signupButton = document.querySelector(".signup-btn");
const form = document.getElementById('form');

// 비밀번호 표시
eyeSlashImg.addEventListener('click', () => {
  toggleVisibility(passwordInput, eyeSlashImg);
});
eyeSlashConfirmImg.addEventListener('click', () => {
  toggleVisibility(passwordConfirmInput, eyeSlashConfirmImg);
});

function toggleVisibility(inputElement, eyeElement) {
  if (inputElement.type === "password") {
    inputElement.type = "text";
    eyeElement.src = "/images/eye.svg";
  } else {
    inputElement.type = "password";
    eyeElement.src = "/images/eye-slash.svg";
  }
}

// 모든 필드 값 입력시 버튼 활성화
form.addEventListener('input', () => checkInputs(form, signupButton));

// 유효성 검사
emailInput.addEventListener('focusout', (e) => {
  checkEmailInput(e.target);
  checkInputs(form, signupButton);
});
usernameInput.addEventListener('focusout', (e) => {
  checkUsernameInput(e.target);
  checkInputs(form, signupButton);
})
passwordInput.addEventListener('focusout', (e) => {
  checkPasswordInput(e.target);
  checkInputs(form, signupButton);
})
passwordConfirmInput.addEventListener('focusout', (e) => {
  checkPasswordConfirmInput(e.target,passwordInput);
  checkInputs(form, signupButton);
})

// 회원가입 버튼
signupButton.addEventListener('click', () => {
  window.location.href = '/signin.html';
});