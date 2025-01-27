import {
  validate,
  resetErrorMessage,
  changeButtonStatus,
} from "./common/validate.mjs";
import { toggleInputType } from "./common/auth.mjs";
import { authValidator } from "./common/validator.mjs";
import { ERROR_MESSAGE } from "./constants/contants.mjs";

const $emailInput = document.querySelector("#email");
const $passwordInput = document.querySelector("#password");
const $submitButton = document.querySelector(".auth-button");
const $eyeIcon = document.querySelector(".eye");

const checkEmptyInputElements = [$emailInput, $passwordInput];

function onFocusoutEmail(e) {
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

function onFocusoutPassword(e) {
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

function onClickButton(e) {
  e.preventDefault();
  location.href = "/items.html";
}

$emailInput.addEventListener("focusout", onFocusoutEmail);
$passwordInput.addEventListener("focusout", onFocusoutPassword);
$eyeIcon.addEventListener("click", toggleInputType);
$submitButton.addEventListener("click", onClickButton);
