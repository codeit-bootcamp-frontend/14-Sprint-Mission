import {
  validationEmail,
  validationPassword,
  updateButtonState,
  goToPage,
} from './formvalidation.js';
const emailInput = document.getElementById('email');
const pwInput = document.getElementById('password');
const emailError = emailInput.nextElementSibling;
const pwError = pwInput.nextElementSibling;
const loginButton = document.querySelector('.auth__button');

const inputs = [emailInput, pwInput];

/* 이메일 검증 */
function validateEmail() {
  validationEmail(emailInput, emailError);
  updateButtonState(inputs, loginButton);
}

/* 비밀번호 검증 */
function validatePassword() {
  validationPassword(pwInput, pwError);
  updateButtonState(inputs, loginButton);
}

/* 페이지 이동 */
goToPage(inputs, loginButton, '../html/items.html');

emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('input', validateEmail);
pwInput.addEventListener('blur', validatePassword);
pwInput.addEventListener('input', validatePassword);
