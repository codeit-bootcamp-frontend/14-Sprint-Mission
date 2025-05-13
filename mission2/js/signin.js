const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");
const loginButton = document.querySelector('button[type="submit"]');
const loginForm = document.querySelector("form");

// 이메일 유효성 검사 함수
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
  updateLoginButtonState();
  return isValid;
};

// 비밀번호 유효성 검사 함수
const validatePassword = () => {
  const password = passwordInput.value.trim();
  let isValid = true;

  if (password === "") {
    passwordError.textContent = "비밀번호를 입력해주세요.";
    passwordInput.classList.add("input-error"); // 비밀번호 필드에도 에러 클래스 추가
    isValid = false;
  } else if (password.length < 8) {
    passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
    passwordInput.classList.add("input-error");
    isValid = false;
  } else {
    passwordError.textContent = "";
    passwordInput.classList.remove("input-error");
  }
  updateLoginButtonState();
  return isValid;
};

// 로그인 버튼 활성화/비활성화 업데이트 함수
const updateLoginButtonState = () => {
  const isEmailValid =
    !emailInput.classList.contains("input-error") &&
    emailInput.value.trim() !== "";
  const isPasswordValid =
    !passwordInput.classList.contains("input-error") &&
    passwordInput.value.trim() !== "" &&
    passwordInput.value.trim().length >= 8;

  if (isEmailValid && isPasswordValid) {
    loginButton.disabled = false;
  } else {
    loginButton.disabled = true;
  }
};

// 이벤트 리스너 등록
emailInput.addEventListener("blur", validateEmail);
passwordInput.addEventListener("blur", validatePassword);

// 입력 중에도 버튼 상태 업데이트 (선택적, 더 나은 사용자 경험을 위해)
emailInput.addEventListener("input", () => {
  // 에러 메시지는 blur 시에만 명확히 표시되도록 input에서는 초기화 가능
  if (emailInput.classList.contains("input-error")) {
    emailError.textContent = "";
    emailInput.classList.remove("input-error");
  }
  updateLoginButtonState();
});
passwordInput.addEventListener("input", () => {
  if (passwordInput.classList.contains("input-error")) {
    passwordError.textContent = "";
    passwordInput.classList.remove("input-error");
  }
  updateLoginButtonState();
});

// 폼 제출 이벤트 처리
loginForm.addEventListener("submit", (event) => {
  event.preventDefault(); // 기본 폼 제출 방지

  // 최종 유효성 검사
  const isEmailValidOnSubmit = validateEmail();
  const isPasswordValidOnSubmit = validatePassword();

  if (isEmailValidOnSubmit && isPasswordValidOnSubmit) {
    // 유효할 경우 /items.html 로 이동
    window.location.href = "items.html"; // '/items' 대신 'items.html' 사용
  } else {
    // 유효하지 않으면 버튼 비활성화 (이미 updateLoginButtonState에서 처리됨)
    console.log("Login failed: Invalid input");
  }
});

// 페이지 로드 시 초기 버튼 상태 설정
updateLoginButtonState();
