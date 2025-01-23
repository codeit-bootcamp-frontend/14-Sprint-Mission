import { onInputFocusOut, onVisibilityChange } from "./common/members.js";

const emailInputField = document.getElementById("input-wrapper-email");
const pwdInputField = document.getElementById("input-wrapper-pwd");
const visiblilityBtn = document.getElementById("visibility");
// const loginBtn = document.getElementById("btn-submit-login");

visiblilityBtn.addEventListener("click", onVisibilityChange);
emailInputField.addEventListener("focusout", onInputFocusOut);
pwdInputField.addEventListener("focusout", onInputFocusOut);

// if (
//   emailInputField.value?.length > 0 &&
//   pwdInputField.value?.length > 0 &&
//   isEmailError &&
//   isPwdError
// )
//   loginBtn.removeAttribute("disabled");
