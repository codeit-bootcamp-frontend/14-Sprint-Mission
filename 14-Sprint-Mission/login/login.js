document.addEventListener("DOMContentLoaded", () => {
  const emailInput = document.getElementById("email");
  const emailError = document.getElementById("email-error");
  const passwordInput = document.getElementById("password");
  const passwordError = document.getElementById("password-error");

  emailInput.addEventListener("blur", () => {
    const value = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!value) {
      emailError.textContent = "이메일을 입력해주세요."; // textContext는 글자를 넣어주는 역할
      emailInput.classList.add("error"); // classList.add는 클래스 추가
    } else if (!emailRegex.test(value)) {
      // test는 정규표현식에 맞는지 검사하는 함수
      emailError.textContent = "잘못된 이메일 형식입니다.";
      emailInput.classList.add("error");
    } else {
      // 올바른 이메일 입력 시
      emailError.textContent = ""; // 에러메시지 삭제
      emailInput.classList.remove("error"); // error 클래스 제거
    }
  });

  passwordInput.addEventListener("blur", () => {
    const value = passwordInput.value.trim();

    if (!value) {
      passwordError.textContent = "비밀번호를 입력해주세요.";
      passwordInput.classList.add("error");
    } else if (value.length < 8) {
      passwordError.textContent = "비밀번호를 8자 이상 입력해주세요.";
      passwordInput.classList.add("error");
    } else {
      passwordError.textContent = "";
      passwordInput.classList.remove("error");
    }
  });

  const loginBtn = document.querySelector(".button-wide"); // querySelector는 선택자

  function updateBtnState() {
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isEmailValid = emailValue && emailRegex.test(emailValue);
    const isPasswordValid = passwordValue && passwordValue.length >= 8;

    if (isEmailValid && isPasswordValid) {
      loginBtn.disabled = false; // 활성화
      loginBtn.style.cursor = "pointer";
    } else {
      loginBtn.disabled = true; // 비활성화
      loginBtn.style.cursor = "not-allowed";
    }
  }

  emailInput.addEventListener("input", updateBtnState);
  passwordInput.addEventListener("input", updateBtnState);

  loginBtn.addEventListener("click", () => {
    if (!loginBtn.disabled) {
      window.location.href = "/items";
    }
  });

  const togglePassword = document.getElementById("toggle-password");

  togglePassword.addEventListener("click", () => {
    const icon = togglePassword.querySelector("img");
    const isHidden = passwordInput.type === "password";

    passwordInput.type = isHidden ? "text" : "password";
    icon.src = isHidden
      ? "/images/btn_visibility_on_24px.png"
      : "/images/btn_visibility_off_24px.png";
  });
});
