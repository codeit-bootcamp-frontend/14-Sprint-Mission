import {
  validate,
  resetErrorMessage,
  changeButtonStatus,
} from "./utils/validate.mjs";
import { toggleInputType } from "./utils/auth.mjs";
import { authValidator } from "./constants/validator.mjs";
import { ERROR_MESSAGE } from "./constants/contants.mjs";

const $emailInput = document.querySelector("#email");
const $nicknameInput = document.querySelector("#nickname");
const $passwordInput = document.querySelector("#password");
const $repasswordInput = document.querySelector("#repassword");
const $submitButton = document.querySelector(".auth-button");
const $eyeIcon = document.querySelectorAll(".eye");

const checkEmptyInputElements = [
  $emailInput,
  $nicknameInput,
  $passwordInput,
  $repasswordInput,
];

function checkFocusoutEmail(e) {
  resetErrorMessage(e);
  validate(e, {
    validator: authValidator.isEmptyInput,
    message: ERROR_MESSAGE.IS_EMPTY_EMAIL,
  });
  validate(e, {
    validator: authValidator.isWrongEmailFormat,
    message: ERROR_MESSAGE.IS_WRONG_EMAIL_FORMAT,
  });

  changeButtonStatus($submitButton, { checkEmptyInputElements });
}

function checkFocusoutNickname(e) {
  resetErrorMessage(e);
  validate(e, {
    validator: authValidator.isEmptyInput,
    message: ERROR_MESSAGE.IS_EMPTY_NICKNAME,
  });

  changeButtonStatus($submitButton, { checkEmptyInputElements });
}

function onFocusoutPassWord(e) {
  resetErrorMessage(e);
  validate(e, {
    validator: authValidator.isEmptyInput,
    message: ERROR_MESSAGE.IS_EMPTY_PASSWORD,
  });
  validate(e, {
    validator: authValidator.isMoreThanEight,
    message: ERROR_MESSAGE.IS_MORE_THAN_EIGHT_PASSWORD,
  });

  changeButtonStatus($submitButton, { checkEmptyInputElements });
}

function onFocusoutRepassWord(e) {
  resetErrorMessage(e);
  validate(e, {
    validator: authValidator.isEmptyInput,
    message: ERROR_MESSAGE.IS_EMPTY_REPASSWORD,
  });
  validate(e, {
    validator: authValidator.isMoreThanEight,
    message: ERROR_MESSAGE.IS_MORE_THAN_EIGHT_PASSWORD,
  });
  validate(e.target, {
    targetEl: $passwordInput,
    validator: authValidator.isMatch,
    message: ERROR_MESSAGE.IS_NOT_MATCH_PASSWORD,
  });

  changeButtonStatus($submitButton, { checkEmptyInputElements });
}

function onClickButton(e) {
  e.preventDefault();
  location.href = "/signin.html";
}

$emailInput.addEventListener("focusout", checkFocusoutEmail);
$nicknameInput.addEventListener("focusout", checkFocusoutNickname);
$passwordInput.addEventListener("focusout", onFocusoutPassWord);
$repasswordInput.addEventListener("focusout", onFocusoutRepassWord);
$eyeIcon.forEach(($eyeEl) => $eyeEl.addEventListener("click", toggleInputType));
$submitButton.addEventListener("click", onClickButton);
