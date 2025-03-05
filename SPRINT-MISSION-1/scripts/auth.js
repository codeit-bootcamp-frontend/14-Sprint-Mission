document.addEventListener("DOMContentLoaded", () => {
  let isEmailValid = false;
  let isPasswordValid = false;
  let isNicknameValid = false;
  let isPasswordConfirmationValid = false;

  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const signupForm = document.getElementById("signupForm");
  const nicknameInput = document.getElementById("nickname");
  const passwordConfirmationInput = document.getElementById(
    "passwordConfirmation"
  );
  const submitButton = document.querySelector(
    '.auth-container form button[type="submit"]'
  );

  function isValidEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailPattern.test(email);
  }

  function UpdateSubmitButtonState() {
    let isFormValid = isEmailValid && isPasswordValid;

    if (signupForm) {
      isFormValid =
        isEmailValid && isNicknameValid & isPasswordConfirmationValid;
    }

    submitButton.disabled = !isFormValid;
  }

  function showError(input, errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.style.display = "block";
    input.style.border = "1px solid #f74747";
  }

  function hideError(input, errorId) {
    const errorElement = document.getElementById(errorId);
    errorElement.style.display = "none";
    input.style.border = "none";
  }

  function checkEmailValidity() {
    isEmailValid = false;
    hideError(emailInput, "emailEmptyError");
    hideError(emailInput, "emailInvalidError");
    const emailValue = emailInput.value.trim();
    if (!emailValue) {
      showError(emailInput, "emailEmptyError");
    } else if (!isValidEmail(emailValue)) {
      showError(emailInput, "emailInvalidError");
    } else {
      isEmailValid = true;
      hideError(emailInput, "emailEmptyError");
      hideError(emailInput, "emailInvalidError");
    }
    UpdateSubmitButtonState();

    if (isPasswordValid) {
      UpdateSubmitButtonState();
    }
  }

  function checkNicknameValidity() {
    hideError(nicknameInput, "nicknameEmptyError");
    const nicknameValue = nicknameInput.value.trim();
    if (!nicknameValue) {
      showError(nicknameInput, "nicknameEmptyError");
    } else {
      isNicknameValid = true;
      hideError(nicknameInput, "nicknameEmptyError");
    }
    UpdateSubmitButtonState();
  }

  function checkPasswordValidity() {
    const passwordValue = passwordInput.value.trim();
    isPasswordValid = false;

    hideError(passwordInput, "passwordEmptyError");
    hideError(passwordInput, "passwordInvalidError");

    if (!passwordValue) {
      showError(passwordInput, "passwordEmptyError");
    } else if (passwordValue.length < 8) {
      showError(passwordInput, "passwordInvalidError");
    } else {
      isPasswordValid = true;
      hideError(passwordInput, "passwordEmptyError");
      hideError(passwordInput, "passwordInvalidError");
    }
    UpdateSubmitButtonState();
  }

  function checkPasswordConfirmationValidity() {
    const passwordConfirmationValue = passwordConfirmationInput.value.trim();
    isPasswordConfirmationValid = false;

    hideError(passwordConfirmationInput, "passwordConfirmationError");
    hideError(passwordConfirmationInput, "passwordConfirmationInitError");

    if (!isPasswordValid) {
      showError(passwordConfirmationInput, "passwordConfirmationInitError");
    } else if (
      !passwordConfirmationValue ||
      passwordConfirmationValue !== passwordInput.value.trim()
    ) {
      showError(passwordConfirmationInput, "passwordConfirmationError");
    } else {
      isPasswordConfirmationValid = true;
      hideError(passwordConfirmationInput, "passwordConfirmationError");
      hideError(passwordConfirmationInput, "passwordConfirmationInitError");
    }
    UpdateSubmitButtonState();
  }

  if (emailInput) {
    emailInput.addEventListener("focusout", checkEmailValidity);
  }

  if (nicknameInput) {
    nicknameInput.addEventListener("focusout", checkNicknameValidity);
  }

  if (passwordInput) {
    passwordInput.addEventListener("focusout", checkPasswordValidity);
    passwordInput.addEventListener("input", checkPasswordValidity);
  }

  if (passwordConfirmationInput) {
    passwordConfirmationInput.addEventListener(
      "input",
      checkPasswordConfirmationValidity
    );
  }

  UpdateSubmitButtonState();

  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      window.location.href = "items.html";
    });
  }

  if (signupForm) {
    signupForm.addEventListener("submit", (e) => {
      e.preventDefault();
      window.location.href = "signin.html";
    });
  }

  function togglePasswordVisibility(e) {
    const button = e.currentTarget;

    const passwordInput = button.parentElement.querySelector("input");
    const toggleIcon = button.querySelector(".password-toggle-icon");

    const isPasswordVisible = passwordInput.type === "text";
    passwordInput.type = isPasswordVisible ? "password" : "text";
    toggleIcon.src = isPasswordVisible
      ? "./images/icon/eye_invisible.png"
      : "./images/icon/eye_visible.png";

    toggleIcon.alt = isPasswordVisible
      ? "비밀번호 숨김 아이콘"
      : "비밀번호 보임 아이콘";
  }

  const toggleButtons = document.querySelectorAll(".password-toggle-btn");
  toggleButtons.forEach((button) =>
    button.addEventListener("click", togglePasswordVisibility)
  );
});
