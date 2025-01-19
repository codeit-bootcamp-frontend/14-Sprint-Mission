import { ERROR_MESSAGE } from "./contants.mjs";
import { checkButton, resetErrorMessage, validate } from "./validate.mjs";
import { AUTH_VALIDATOR } from "./validator.mjs";

const $emailInput = document.querySelector("#email");
const $nicknameInput = document.querySelector("#nickname");
const $passwordInput = document.querySelector("#password");
const $repasswordInput = document.querySelector("#repassword");
const $loginButton = document.querySelector(".login-button");
const $eyeIcon = document.querySelectorAll(".eye");

const checkEmptyInputs = [
  $emailInput,
  $nicknameInput,
  $passwordInput,
  $repasswordInput,
];

function checkFocusOutEmail(e) {
  resetErrorMessage(e);
  validate(e, {
    message: ERROR_MESSAGE.IS_EMPTY_EMAIL,
    callback: AUTH_VALIDATOR.IS_EMPTY_INPUT,
  });
  validate(e, {
    message: ERROR_MESSAGE.IS_WRONG_EMAIL_FORMAT,
    callback: AUTH_VALIDATOR.IS_WRONG_EMAIL_FORMAT,
  });

  checkButton($loginButton, { checkEmptyInputs });
}

function checkFocusOutNickname(e) {
  resetErrorMessage(e);
  validate(e, {
    message: ERROR_MESSAGE.IS_EMPTY_NICKNAME,
    callback: AUTH_VALIDATOR.IS_EMPTY_INPUT,
  });

  checkButton($loginButton, { checkEmptyInputs });
}

function checkFocusPassWord(e) {
  resetErrorMessage(e);
  validate(e, {
    message: ERROR_MESSAGE.IS_EMPTY_PASSWORD,
    callback: AUTH_VALIDATOR.IS_EMPTY_INPUT,
  });
  validate(e, {
    message: ERROR_MESSAGE.IS_MORE_THAN_EIGHT_PASSWORD,
    callback: AUTH_VALIDATOR.IS_MORT_THAN_EIGHT,
  });

  checkButton($loginButton, { checkEmptyInputs });
}

function checkFocusRepassWord(e) {
  resetErrorMessage(e);
  validate(e, {
    message: ERROR_MESSAGE.IS_EMPTY_REPASSWORD,
    callback: AUTH_VALIDATOR.IS_EMPTY_INPUT,
  });
  validate(e, {
    message: ERROR_MESSAGE.IS_MORE_THAN_EIGHT_PASSWORD,
    callback: AUTH_VALIDATOR.IS_MORT_THAN_EIGHT,
  });
  validate(e.target, {
    targetEl: $passwordInput,
    message: ERROR_MESSAGE.IS_NOT_MATCH_PASSWORD,
    callback: AUTH_VALIDATOR.IS_MATCH,
  });

  checkButton($loginButton, { checkEmptyInputs });
}

function clickButton(e) {
  e.preventDefault();
  location.href = "/login.html";
}

function toggleInputType(e) {
  const [closeEye, openEye] = e.currentTarget.children;
  const target = e.currentTarget.parentElement.firstElementChild;

  closeEye.classList.toggle("none");
  openEye.classList.toggle("none");
  target.type = target.type === "password" ? "text" : "password";
}

$emailInput.addEventListener("focusout", checkFocusOutEmail);
$nicknameInput.addEventListener("focusout", checkFocusOutNickname);
$passwordInput.addEventListener("focusout", checkFocusPassWord);
$repasswordInput.addEventListener("focusout", checkFocusRepassWord);
$loginButton.addEventListener("click", clickButton);

$eyeIcon.forEach(($eyeEl) => $eyeEl.addEventListener("click", toggleInputType));
