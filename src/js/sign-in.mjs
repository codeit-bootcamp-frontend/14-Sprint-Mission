import { checkButton, resetErrorMessage, validate } from "./validate.mjs";
import { AUTH_VALIDATOR } from "./validator.mjs";

const $emailInput = document.querySelector("#email");
const $passwordInput = document.querySelector("#password");
const $loginButton = document.querySelector(".login-button");
const $eyeIcon = document.querySelector(".eye");

function checkFocusOutEmail(e) {
  resetErrorMessage(e);
  validate(e, {
    message: "이메일을 입력해주세요.",
    validate: AUTH_VALIDATOR.IS_EMPTY_INPUT,
  });
  validate(e, {
    message: "잘못된 이메일입니다.",
    validate: AUTH_VALIDATOR.IS_WRONG_EMAIL_FORMAT,
  });

  checkButton($loginButton, {
    checkEmptyInputs: [$emailInput, $passwordInput],
  });
}

function checkFocusPassWord(e) {
  resetErrorMessage(e);
  validate(e, {
    message: "비밀번호를 입력해주세요.",
    validate: AUTH_VALIDATOR.IS_EMPTY_INPUT,
  });
  validate(e, {
    message: "비밀번호를 8자 이상 입력해주세요.",
    validate: AUTH_VALIDATOR.IS_MORT_THAN_EIGHT,
  });

  checkButton($loginButton, {
    checkEmptyInputs: [$emailInput, $passwordInput],
  });
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
