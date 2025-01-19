import { checkButton, resetErrorMessage, validate } from "./validate.mjs";
import { AUTH_VALIDATOR } from "./validator.mjs";
import { ERROR_MESSAGE } from "./contants.mjs";

const $emailInput = document.querySelector("#email");
const $passwordInput = document.querySelector("#password");
const $loginButton = document.querySelector(".login-button");
const $eyeIcon = document.querySelector(".eye");

const checkEmptyInputs = [$emailInput, $passwordInput];

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

function clickButton(e) {
  e.preventDefault();
  location.href = "/items.html";
}

function toggleInputType(e) {
  const [closeEye, openEye] = e.currentTarget.children;

  closeEye.classList.toggle("none");
  openEye.classList.toggle("none");
  $passwordInput.type =
    $passwordInput.type === "password" ? "text" : "password";
}

$emailInput.addEventListener("focusout", checkFocusOutEmail);
$passwordInput.addEventListener("focusout", checkFocusPassWord);
$loginButton.addEventListener("click", clickButton);
$eyeIcon.addEventListener("click", toggleInputType);
