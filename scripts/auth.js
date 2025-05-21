const emailRegex =
  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
const loginForm = document.getElementById("loginForm");
const signupForm = document.getElementById("signupForm");
const emailInput = document.getElementById("email");
const nicknameInput = document.getElementById("nickname");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const submitButton = document.getElementById("Submit-Button");
let isEmailValid = false;
let isNicknameValid = false;
let isPasswordValid = false;
let isconfirmPasswordValid = false;

function showError(inputElement, errorId) {
  const errorElement = document.getElementById(errorId);
  errorElement.style.display = "block";
  inputElement.style.outline = "1px solid var(--error)";
}
function hideError(inputElement, errorId) {
  const errorElement = document.getElementById(errorId);
  errorElement.style.display = "none";
  inputElement.style.outline = "none";
}

function emailValidation() {
  const emailValue = emailInput.value.trim();
  const emailValidation = emailRegex.test(emailValue);

  isEmailValid = false;
  hideError(emailInput, "email-value-empty");
  hideError(emailInput, "email-value-invalid");

  if (!emailValue) {
    showError(emailInput, "email-value-empty");
  } else if (!emailValidation) {
    showError(emailInput, "email-value-invalid");
  } else {
    isEmailValid = true;
    hideError(emailInput, "email-value-empty");
    hideError(emailInput, "email-value-invalid");
  }

  submitButtonActivation();
}

function nicknameValidation() {
  const nicknameValue = nicknameInput.value.trim();

  isNicknameValid = false;
  hideError(nicknameInput, "nickname-value-empty");

  if (!nicknameValue) {
    showError(nicknameInput, "nickname-value-empty");
  } else {
    isNicknameValid = true;
    hideError(nicknameInput, "nickname-value-empty");
  }

  submitButtonActivation();
}

function passwordValidation() {
  const passwordValue = passwordInput.value.trim();

  isPasswordValid = false;
  hideError(passwordInput, "password-value-empty");
  hideError(passwordInput, "password-value-invalid");

  if (!passwordValue) {
    showError(passwordInput, "password-value-empty");
  } else if (passwordValue.length < 8) {
    showError(passwordInput, "password-value-invalid");
  } else {
    isPasswordValid = true;
    hideError(passwordInput, "password-value-empty");
    hideError(passwordInput, "password-value-invalid");
  }

  submitButtonActivation();
  if (signupForm) {
    confirmPasswordValidation();
  }
}

function confirmPasswordValidation() {
  const confirmPasswordValue = confirmPasswordInput.value.trim();

  isconfirmPasswordValid = false;

  hideError(confirmPasswordInput, "check-password-validation");
  hideError(confirmPasswordInput, "confirmPassword-value-invalid");
  if (!isPasswordValid) {
    showError(confirmPasswordInput, "check-password-validation");
  } else if (
    !confirmPasswordValue ||
    confirmPasswordValue !== passwordInput.value.trim()
  ) {
    showError(confirmPasswordInput, "confirmPassword-value-invalid");
  } else {
    isconfirmPasswordValid = true;
    hideError(confirmPasswordInput, "check-password-validation");
    hideError(confirmPasswordInput, "confirmPassword-value-invalid");
  }

  submitButtonActivation();
}

function submitButtonActivation() {
  let isAuthValid = isEmailValid && isPasswordValid;
  if (signupForm) {
    isAuthValid = isAuthValid && isNicknameValid && isconfirmPasswordValid;
  }

  submitButton.disabled = !isAuthValid;
}

if (emailInput) {
  emailInput.addEventListener("focusout", emailValidation);
}
if (nicknameInput) {
  nicknameInput.addEventListener("focusout", nicknameValidation);
}
if (passwordInput) {
  passwordInput.addEventListener("input", passwordValidation);
}
if (confirmPasswordInput) {
  confirmPasswordInput.addEventListener("input", confirmPasswordValidation);
}

submitButtonActivation();

if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "items.html";
  });
}

if (signupForm) {
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "login.html";
  });
}

function PasswordToggleVisibility(event) {
  const targetButton = event.currentTarget;
  const targetInputField = targetButton.parentElement.querySelector("input");
  const targetToggleIcon = targetButton.querySelector(".password-toggle-icon");

  const isPasswordVisible = targetInputField.type === "text";
  targetInputField.type = isPasswordVisible ? "password" : "text";
  targetToggleIcon.src = isPasswordVisible
    ? "/images/icon/auth/eye-invisible.svg"
    : "/images/icon/auth/eye-visible.svg";

  targetToggleIcon.alt = isPasswordVisible
    ? "비밀번호 숨김 아이콘"
    : "비밀번호 표시 아이콘";

  targetButton.setAttribute(
    "aria-label",
    isPasswordVisible ? "비밀번호 숨김" : "비밀번호 표시"
  );
}

const passwordToggleButtons = document.querySelectorAll(
  ".password-toggle-button"
);
passwordToggleButtons.forEach((passwordToggleButton) =>
  passwordToggleButton.addEventListener("click", PasswordToggleVisibility)
);
