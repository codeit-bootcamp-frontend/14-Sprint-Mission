import { checkButton, resetErrorMessage, validate } from "./validate.mjs";
import { AUTH_VALIDATOR } from "./validator.mjs";

const $emailInput = document.querySelector("#email");
const $nicknameInput = document.querySelector("#nickname");
const $passwordInput = document.querySelector("#password");
const $repasswordInput = document.querySelector("#repassword");
const $loginButton = document.querySelector(".login-button");
const $eyeIcon = document.querySelectorAll(".eye");

function checkFocusOutEmail(e) {
  resetErrorMessage(e);
  validate(e, {
    message: "이메일을 입력해주세요.",
    callback: AUTH_VALIDATOR.IS_EMPTY_INPUT,
  });
  validate(e, {
    message: "잘못된 이메일입니다.",
    callback: AUTH_VALIDATOR.IS_WRONG_EMAIL_FORMAT,
  });

  checkButton($loginButton, {
    checkEmptyInputs: [
      $emailInput,
      $nicknameInput,
      $passwordInput,
      $repasswordInput,
    ],
  });
}

function checkFocusOutNickname(e) {
  resetErrorMessage(e);
  validate(e, {
    message: "닉네임을 입력해주세요.",
    callback: AUTH_VALIDATOR.IS_EMPTY_INPUT,
  });

  checkButton($loginButton, {
    checkEmptyInputs: [
      $emailInput,
      $nicknameInput,
      $passwordInput,
      $repasswordInput,
    ],
  });
}

function checkFocusPassWord(e) {
  resetErrorMessage(e);
  validate(e, {
    message: "비밀번호를 입력해주세요.",
    callback: AUTH_VALIDATOR.IS_EMPTY_INPUT,
  });
  validate(e, {
    message: "비밀번호를 8자 이상 입력해주세요.",
    callback: AUTH_VALIDATOR.IS_MORT_THAN_EIGHT,
  });

  checkButton($loginButton, {
    checkEmptyInputs: [
      $emailInput,
      $nicknameInput,
      $passwordInput,
      $repasswordInput,
    ],
  });
}

function checkFocusRepassWord(e) {
  resetErrorMessage(e);
  validate(e, {
    message: "비밀번호를 입력해주세요.",
    callback: AUTH_VALIDATOR.IS_EMPTY_INPUT,
  });
  validate(e, {
    message: "비밀번호를 8자 이상 입력해주세요.",
    callback: AUTH_VALIDATOR.IS_MORT_THAN_EIGHT,
  });
  validate(e.target, {
    targetEl: $passwordInput,
    message: "비밀번호가 일치하지 않습니다.",
    callback: AUTH_VALIDATOR.IS_MATCH,
  });

  checkButton($loginButton, {
    checkEmptyInputs: [
      $emailInput,
      $nicknameInput,
      $passwordInput,
      $repasswordInput,
    ],
  });
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
