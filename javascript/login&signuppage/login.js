const emailInput = document.getElementById("emailInput");
const emailError = document.getElementById("emailError");
const passwordInput = document.getElementById("passwardinput");
const passwordError = document.getElementById("passwordError");
const loginButton = document.getElementById("loginButton");
const togglePassword = document.getElementById("togglePassword");

/* 이미지 파일 경로 설정 */
const eyeOpenSrc = "./images/anyicons/passwardeye.svg";
const eyeSlashSrc = "./images/anyicons/passwardcancel.svg";

/* 초기 상태 설정 */
let isPasswordVisible = false;

/* 이메일 정규표현식 */
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* 유효성 검사 상태 변수 */
let isEmailValid = false;
let isPasswordValid = false;

/* 📌 유효성 검사 후 버튼 활성화 체크 */
const updateButtonState = () => {
  if (isEmailValid && isPasswordValid) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
};

/* 📌 이메일 Focus Out 체크 */
emailInput.addEventListener("focusout", () => {
  const value = emailInput.value.trim();

  if (!value) {
    emailInput.classList.add("error");
    emailError.textContent = "이메일을 입력해주세요.";
    emailError.style.display = "block";
    isEmailValid = false;
  } else if (!emailPattern.test(value)) {
    emailInput.classList.add("error");
    emailError.textContent = "잘못된 이메일 형식입니다.";
    emailError.style.display = "block";
    isEmailValid = false;
  } else {
    emailInput.classList.remove("error");
    emailError.style.display = "none";
    isEmailValid = true;
  }
  updateButtonState();
});

/* 📌 비밀번호 Focus Out 체크 */
passwordInput.addEventListener("focusout", () => {
  const value = passwordInput.value.trim();

  if (!value) {
    passwordInput.classList.add("error");
    passwordError.textContent = "비밀번호를 입력해주세요.";
    passwordError.style.display = "block";
    isPasswordValid = false;
  } else if (value.length < 8) {
    passwordInput.classList.add("error");
    passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
    passwordError.style.display = "block";
    isPasswordValid = false;
  } else {
    passwordInput.classList.remove("error");
    passwordError.style.display = "none";
    isPasswordValid = true;
  }
  updateButtonState();
});

/* 📌 버튼 클릭 시 페이지 이동 */
loginButton.addEventListener("click", () => {
  if (isEmailValid && isPasswordValid) {
    window.location.href = "/items";
  }
});

/* 클릭 이벤트 */
togglePassword.addEventListener("click", () => {
  isPasswordVisible = !isPasswordVisible;
  if (isPasswordVisible) {
    passwordInput.type = "text";
    togglePassword.src = eyeOpenSrc;
  } else {
    passwordInput.type = "password";
    togglePassword.src = eyeSlashSrc;
  }
});
