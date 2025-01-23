import { onInputFocusOut, onVisibilityChange } from "./common/members.js";

const nicknameInputField = document.getElementById("input-wrapper-nickname");
const pwdCheckInputField = document.getElementById("input-wrapper-pwd-check");
const visiblilityAgainBtn = document.getElementById("visibility-again");
// const signupBtn = document.getElementById("btn-submit-signup");

visiblilityAgainBtn.addEventListener("click", onVisibilityChange);
nicknameInputField.addEventListener("focusout", onInputFocusOut);
pwdCheckInputField.addEventListener("focusout", onInputFocusOut);
