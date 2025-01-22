const emailInput = document.getElementById("email");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const passwordConfirmInput = document.getElementById("password-confirm");
const eyeSlashImg = document.getElementById("eye-slash");
const eyeSlashConfirmImg = document.getElementById("eye-slash-confirm");
const signupButton = document.querySelector(".signup-btn");
const showPassword = document.querySelector(".eye-slash");

// 비밀번호 표시
eyeSlashImg.addEventListener('click', () => {
  toggleVisibility(passwordInput, eyeSlashImg);
});
eyeSlashConfirmImg.addEventListener('click', () => {
  toggleVisibility(passwordConfirmInput, eyeSlashConfirmImg);
});

function toggleVisibility(inputElement, eyeElement) {
  if (inputElement.type === "password") {
    inputElement.type = "text";
    eyeElement.src = "/images/eye.svg";
  } else {
    inputElement.type = "password";
    eyeElement.src = "/images/eye-slash.svg";
  }
}

// 모든 필드 값 입력시 버튼 활성화
emailInput.addEventListener("input", changeButtonState);
usernameInput.addEventListener("input", changeButtonState);
passwordInput.addEventListener("input", changeButtonState);
passwordConfirmInput.addEventListener("input", changeButtonState);

function changeButtonState() {
  const isFormValid =
    emailInput.value.trim() !== "" &&
    passwordInput.value.trim() !== "" &&
    usernameInput.value.trim() !== "" &&
    passwordConfirmInput.value.trim() !== "";

  signupButton.disabled = !isFormValid;

  signupButton.classList.toggle("valid", isFormValid);
}
