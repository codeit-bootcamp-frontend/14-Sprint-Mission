const emailInput = document.getElementById("email");
const nicknameInput = document.getElementById("nickname");
const passwordInput = document.getElementById("password");
const passwordConfirmationInput = document.getElementById(
  "passwordConfirmation"
);

const emailError = document.querySelector(".email-error");
const nicknameError = document.querySelector(".nickname-error");
const passwordError = document.querySelector(".password-error");
const passwordConfirmationError = document.querySelector(
  ".password-confirmation-error"
);

const signupButton = document.querySelector('button[type="submit"]');
const signupForm = document.querySelector("form");
const togglePasswordButtons = document.querySelectorAll(
  ".input-wrapper .toggle-password"
);

// 이메일 유효성 검사 함수 (signin.js와 동일)
const validateEmail = () => {
  const email = emailInput.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  let isValid = true;

  if (email === "") {
    emailError.textContent = "이메일을 입력해주세요.";
    emailInput.classList.add("input-error");
    isValid = false;
  } else if (!emailRegex.test(email)) {
    emailError.textContent = "잘못된 이메일 형식입니다";
    emailInput.classList.add("input-error");
    isValid = false;
  } else {
    emailError.textContent = "";
    emailInput.classList.remove("input-error");
  }
  updateSignupButtonState();
  return isValid;
};

// 닉네임 유효성 검사 함수
const validateNickname = () => {
  const nickname = nicknameInput.value.trim();
  let isValid = true;

  if (nickname === "") {
    nicknameError.textContent = "닉네임을 입력해주세요.";
    nicknameInput.classList.add("input-error");
    isValid = false;
  } else {
    nicknameError.textContent = "";
    nicknameInput.classList.remove("input-error");
  }
  updateSignupButtonState();
  return isValid;
};

// 비밀번호 유효성 검사 함수
const validatePassword = () => {
  const password = passwordInput.value.trim();
  let isValid = true;

  if (password === "") {
    passwordError.textContent = "비밀번호를 입력해주세요.";
    passwordInput.classList.add("input-error");
    isValid = false;
  } else if (password.length < 8) {
    passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
    passwordInput.classList.add("input-error");
    isValid = false;
  } else {
    passwordError.textContent = "";
    passwordInput.classList.remove("input-error");
  }
  // 비밀번호 확인 필드도 함께 검증
  validatePasswordConfirmation();
  updateSignupButtonState();
  return isValid;
};

// 비밀번호 확인 유효성 검사 함수
const validatePasswordConfirmation = () => {
  const password = passwordInput.value.trim();
  const passwordConfirmation = passwordConfirmationInput.value.trim();
  let isValid = true;

  // 먼저 비밀번호 확인 자체의 빈 값 체크
  if (passwordConfirmation === "") {
    passwordConfirmationError.textContent =
      "비밀번호를 다시 한 번 입력해 주세요."; // 요구사항에는 없었지만 추가
    passwordConfirmationInput.classList.add("input-error");
    isValid = false;
  } else if (password !== passwordConfirmation) {
    passwordConfirmationError.textContent = "비밀번호가 일치하지 않습니다.";
    passwordConfirmationInput.classList.add("input-error");
    isValid = false;
  } else {
    passwordConfirmationError.textContent = "";
    passwordConfirmationInput.classList.remove("input-error");
  }
  updateSignupButtonState();
  return isValid;
};

// 회원가입 버튼 활성화/비활성화 업데이트 함수
const updateSignupButtonState = () => {
  const isEmailValid =
    !emailInput.classList.contains("input-error") &&
    emailInput.value.trim() !== "";
  const isNicknameValid =
    !nicknameInput.classList.contains("input-error") &&
    nicknameInput.value.trim() !== "";
  const isPasswordValid =
    !passwordInput.classList.contains("input-error") &&
    passwordInput.value.trim() !== "" &&
    passwordInput.value.trim().length >= 8;
  const isPasswordConfirmationValid =
    !passwordConfirmationInput.classList.contains("input-error") &&
    passwordConfirmationInput.value.trim() !== "" &&
    passwordInput.value.trim() === passwordConfirmationInput.value.trim();

  if (
    isEmailValid &&
    isNicknameValid &&
    isPasswordValid &&
    isPasswordConfirmationValid
  ) {
    signupButton.disabled = false;
  } else {
    signupButton.disabled = true;
  }
};

// 이벤트 리스너 등록
emailInput.addEventListener("blur", validateEmail);
nicknameInput.addEventListener("blur", validateNickname);
passwordInput.addEventListener("blur", validatePassword);
passwordConfirmationInput.addEventListener(
  "blur",
  validatePasswordConfirmation
);

// 입력 중에도 버튼 상태 업데이트
emailInput.addEventListener("input", () => {
  if (emailInput.classList.contains("input-error")) {
    emailError.textContent = "";
    emailInput.classList.remove("input-error");
  }
  updateSignupButtonState();
});
nicknameInput.addEventListener("input", () => {
  if (nicknameInput.classList.contains("input-error")) {
    nicknameError.textContent = "";
    nicknameInput.classList.remove("input-error");
  }
  updateSignupButtonState();
});
passwordInput.addEventListener("input", () => {
  if (passwordInput.classList.contains("input-error")) {
    passwordError.textContent = "";
    passwordInput.classList.remove("input-error");
  }
  // 비밀번호 입력 시 확인 필드 에러도 업데이트
  if (
    passwordConfirmationInput.value.trim() !== "" &&
    passwordInput.value.trim() === passwordConfirmationInput.value.trim()
  ) {
    if (passwordConfirmationInput.classList.contains("input-error")) {
      passwordConfirmationError.textContent = "";
      passwordConfirmationInput.classList.remove("input-error");
    }
  }
  updateSignupButtonState();
});
passwordConfirmationInput.addEventListener("input", () => {
  if (passwordConfirmationInput.classList.contains("input-error")) {
    passwordConfirmationError.textContent = "";
    passwordConfirmationInput.classList.remove("input-error");
  }
  // 확인 입력 시, 원본 비밀번호 유효성에 영향은 없지만, 일치 여부는 확인해야 함
  if (
    passwordInput.value.trim() !== "" &&
    passwordInput.value.trim() === passwordConfirmationInput.value.trim()
  ) {
    // 일치하면 에러 제거 (위 blur 로직과 유사하게)
    passwordConfirmationError.textContent = "";
    passwordConfirmationInput.classList.remove("input-error");
  }
  updateSignupButtonState();
});

// 폼 제출 이벤트 처리
signupForm.addEventListener("submit", (event) => {
  event.preventDefault(); // 기본 폼 제출 방지

  // 최종 유효성 검사
  const isEmailValidOnSubmit = validateEmail();
  const isNicknameValidOnSubmit = validateNickname();
  const isPasswordValidOnSubmit = validatePassword();
  const isPasswordConfirmationValidOnSubmit = validatePasswordConfirmation();

  if (
    isEmailValidOnSubmit &&
    isNicknameValidOnSubmit &&
    isPasswordValidOnSubmit &&
    isPasswordConfirmationValidOnSubmit
  ) {
    // 유효할 경우 signin.html 로 이동
    window.location.href = "signin.html";
  } else {
    console.log("Signup failed: Invalid input");
  }
});

// 페이지 로드 시 초기 버튼 상태 설정
updateSignupButtonState();

// 비밀번호 보이기/숨기기 토글 함수 ( signup.html 용)
const setupPasswordToggle = (passwordField, toggleButton) => {
  if (toggleButton && passwordField) {
    toggleButton.addEventListener("click", () => {
      const type =
        passwordField.getAttribute("type") === "password" ? "text" : "password";
      passwordField.setAttribute("type", type);

      if (type === "password") {
        toggleButton.src = "images/icons/eye-invisible.svg";
        toggleButton.alt = "비밀번호 숨김";
      } else {
        toggleButton.src = "images/icons/eye-visible.svg";
        toggleButton.alt = "비밀번호 보임";
      }
    });
  }
};

// 각 비밀번호 필드에 토글 기능 설정
if (togglePasswordButtons.length > 0) {
  setupPasswordToggle(passwordInput, togglePasswordButtons[0]); // 첫 번째 아이콘은 passwordInput 용
  if (togglePasswordButtons.length > 1) {
    // 두 번째 아이콘이 있는 경우 (비밀번호 확인 필드용)
    setupPasswordToggle(passwordConfirmationInput, togglePasswordButtons[1]);
  }
}
