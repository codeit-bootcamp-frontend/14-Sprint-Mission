const emailInput = document.getElementById("emailInput");
const nicknameInput = document.getElementById("nicknameInput");
const passwordInput = document.getElementById("passwordInput");
const passwordConfirmInput = document.getElementById("passwordConfirmInput");
const signupButton = document.getElementById("signup-button");

const emailError = document.getElementById("emailError");
const nicknameError = document.getElementById("nicknameError");
const passwordError = document.getElementById("passwordError");
const passwordConfirmError = document.getElementById("passwordConfirmError");

/* 이메일 정규표현식 */
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* 유효성 상태 */
let isEmailValid = false;
let isNicknameValid = false;
let isPasswordValid = false;
let isPasswordMatch = false;

/* 📌 유효성 검사 함수 */
const validateEmail = () => {
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
};

const validateNickname = () => {
  const value = nicknameInput.value.trim();
  if (!value) {
    nicknameInput.classList.add("error");
    nicknameError.textContent = "닉네임을 입력해주세요.";
    nicknameError.style.display = "block";
    isNicknameValid = false;
  } else {
    nicknameInput.classList.remove("error");
    nicknameError.style.display = "none";
    isNicknameValid = true;
  }
};

const validatePassword = () => {
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
};

const validatePasswordConfirm = () => {
  const value = passwordConfirmInput.value.trim();
  if (value !== passwordInput.value.trim()) {
    passwordConfirmInput.classList.add("error");
    passwordConfirmError.textContent = "비밀번호가 일치하지 않습니다.";
    passwordConfirmError.style.display = "block";
    isPasswordMatch = false;
  } else {
    passwordConfirmInput.classList.remove("error");
    passwordConfirmError.style.display = "none";
    isPasswordMatch = true;
  }
};

/* 📌 입력 변경 시 실시간 검증 */
emailInput.addEventListener("focusout", () => {
  validateEmail();
  updateButtonState();
});

nicknameInput.addEventListener("focusout", () => {
  validateNickname();
  updateButtonState();
});

passwordInput.addEventListener("focusout", () => {
  validatePassword();
  updateButtonState();
});

passwordConfirmInput.addEventListener("focusout", () => {
  validatePasswordConfirm();
  updateButtonState();
});

/* 📌 유효성 검사 후 버튼 활성화 체크 */
const updateButtonState = () => {
  if (isEmailValid && isNicknameValid && isPasswordValid && isPasswordMatch) {
    signupButton.disabled = false;
  } else {
    signupButton.disabled = true;
  }
};

/* 📌 회원가입 버튼 클릭 시 페이지 이동 */
signupButton.addEventListener("click", () => {
  if (isEmailValid && isNicknameValid && isPasswordValid && isPasswordMatch) {
    window.location.href = "./login.html";
  }
});
