import {
  validationEmail,
  validationPassword,
  updateButtonState,
  goToPage,
  showError,
  showSuccess,
} from './formvalidation.js';
const emailInput = document.getElementById('email');
const nicknameInput = document.getElementById('nickname');
const pwInput = document.getElementById('password');
const pwcheckInput = document.getElementById('passwordcheck');

const emailError = emailInput.nextElementSibling;
const nicknameError = nicknameInput.nextElementSibling;
const pwError = pwInput.nextElementSibling;
const pwcheckError = pwcheckInput.nextElementSibling;

const signupButton = document.querySelector('.auth__button');

const inputs = [emailInput, nicknameInput, pwInput, pwcheckInput];

/* 이메일 검증 */
function validateEmail() {
  validationEmail(emailInput, emailError);
  updateButtonState(inputs, signupButton);
}

/* 비밀번호 검증 */
function validatePassword() {
  validationPassword(pwInput, pwError);
  updateButtonState(inputs, signupButton);
}

/* 닉네임 유효성 검사 */
function validateNickname() {
  const value = nicknameInput.value.trim();

  if (value === '') {
    showError(nicknameInput, nicknameError, '닉네임을 입력해주세요');
  } else {
    showSuccess(nicknameInput, nicknameError);
  }
  updateButtonState(inputs, signupButton);
}

/* 비밀번호 확인 유효성 검사 */
function validatePasswordcheck() {
  const pwValue = pwInput.value.trim();
  const pwcheckValue = pwcheckInput.value.trim();

  if (pwcheckValue === '') {
    showError(pwcheckInput, pwcheckError, '비밀번호를 다시 입력해주세요');
  } else if (!(pwValue === pwcheckValue)) {
    showError(pwcheckInput, pwcheckError, '비밀번호가 일치하지 않습니다.');
  } else {
    showSuccess(pwcheckInput, pwcheckError);
  }
  updateButtonState(inputs, signupButton);
}

/* 페이지 이동 */
goToPage(inputs, signupButton, '../html/login.html');

emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('input', validateEmail);
nicknameInput.addEventListener('blur', validateNickname);
nicknameInput.addEventListener('input', validateNickname);
pwInput.addEventListener('blur', validatePassword);
pwInput.addEventListener('input', validatePassword);
pwcheckInput.addEventListener('blur', validatePasswordcheck);
pwcheckInput.addEventListener('input', validatePasswordcheck);
