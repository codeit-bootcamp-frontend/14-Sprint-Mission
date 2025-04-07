document.addEventListener("DOMContentLoaded", () => {
  // 요소 선택
  const emailInput = document.getElementById("email");
  const nicknameInput = document.getElementById("nickname");
  const passwordInput = document.getElementById("password");
  const passwordCheckInput = document.getElementById("password-confirm");
  const signupBtn = document.querySelector(".button-wide");

  // 에러 발생 시, 에러 메시지를 보여주는 div 요소 생성 함수
  const createErrorMessage = (input, id) => {
    let error = document.createElement("div");
    error.className = "error-message";
    error.id = id;
    // insertAdjacentElement : 기준이 되는 요소 줍녀에 새 노드를 정확한 위치에 삽입
    // 기준요소.insertAdjacentElement(삽입위치문자열로, 삽입할노드)
    input.insertAdjacentElement("afterend", error);
    return error;
  };

  // 에러 메시지 DOM 만들기
  const emailError = createErrorMessage(emailInput, "email-error");
  const nicknameError = createErrorMessage(nicknameInput, "nickname-error");
  const passwordError = createErrorMessage(passwordInput, "password-error");
  const passwordCheckError = createErrorMessage(
    passwordCheckInput,
    "password-confirm-error"
  );

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // 에러 보여주는 함수
  const showError = (input, errorElement, message) => {
    errorElement.textContent = message; // 에러 메세지 div에 추가
    input.classList.add("error");
  };

  // 에러 지우는 함수
  const clearError = (input, errorElement) => {
    errorElement.textContent = "";
    input.classList.remove("error");
  };

  // 버튼 활성화 상태 체크
  const updateButtonState = () => {
    const emailValid =
      emailInput.value.trim() && emailRegex.test(emailInput.value.trim());
    const nicknameValid = nicknameInput.value.trim();
    const passwordValid = passwordInput.value.trim().length >= 8;
    const confirmValid =
      !!passwordCheckInput.value.trim() &&
      passwordCheckInput.value.trim() === passwordInput.value.trim();

    // 에러 메세지 유무 검사
    const noErrors =
      !emailError.textContent &&
      !nicknameError.textContent &&
      !passwordError.textContent &&
      !passwordCheckError.textContent;

    if (
      emailValid &&
      nicknameValid &&
      passwordValid &&
      confirmValid &&
      noErrors
    ) {
      signupBtn.disabled = false; // 활성화
    } else {
      signupBtn.disabled = true; // 하나라도 어긋날 시 비활성화
    }
  };

  // 이메일 blur
  emailInput.addEventListener("blur", () => {
    const value = emailInput.value.trim();
    if (!value) {
      showError(emailInput, emailError, "이메일을 입력해주세요.");
    } else if (!emailRegex.test(value)) {
      showError(emailInput, emailError, "잘못된 이메일 형식입니다.");
    } else {
      clearError(emailInput, emailError);
    }
    updateButtonState(); // 버튼 활성화 여부 재판단
  });

  // 닉네임 blur
  nicknameInput.addEventListener("blur", () => {
    const value = nicknameInput.value.trim();
    if (!value) {
      showError(nicknameInput, nicknameError, "닉네임을 입력해주세요.");
    } else {
      clearError(nicknameInput, nicknameError);
    }
    updateButtonState();
  });

  // 비밀번호 blur
  passwordInput.addEventListener("blur", () => {
    const value = passwordInput.value.trim();
    if (!value) {
      showError(passwordInput, passwordError, "비밀번호를 입력해주세요.");
    } else if (value.length < 8) {
      showError(
        passwordInput,
        passwordError,
        "비밀번호를 8자 이상 입력해주세요."
      );
    } else {
      clearError(passwordInput, passwordError);
    }
    updateButtonState();
  });

  // 비밀번호 확인 blur
  passwordCheckInput.addEventListener("blur", () => {
    const pw = passwordInput.value.trim();
    const pwCheck = passwordCheckInput.value.trim();
    if (pw !== pwCheck) {
      showError(
        passwordCheckInput,
        passwordCheckError,
        "비밀번호가 일치하지 않습니다."
      );
    } else {
      clearError(passwordCheckInput, passwordCheckError);
    }
    updateButtonState();
  });

  // 실시간 입력 시 버튼 상태 체크
  [emailInput, nicknameInput, passwordInput, passwordCheckInput].forEach(
    (input) => input.addEventListener("input", updateButtonState)
  );

  // 버튼 클릭 시 로그인 페이지 이동
  signupBtn.addEventListener("click", () => {
    if (!signupBtn.disabled) {
      window.location.href = "/login/login.html";
    }
  });

  // 비밀번호 보기/숨기기 토글 (비밀번호)
  const togglePassword = document.getElementById("toggle-password");
  togglePassword.addEventListener("click", () => {
    const icon = togglePassword.querySelector("img");
    const isHidden = passwordInput.type === "password";

    passwordInput.type = isHidden ? "text" : "password";
    icon.src = isHidden
      ? "/images/btn_visibility_on_24px.png"
      : "/images/btn_visibility_off_24px.png";
  });

  // 비밀번호 확인 보기/숨기기 토글
  const togglePasswordConfirm = document.getElementById(
    "toggle-password-confirm"
  );
  togglePasswordConfirm.addEventListener("click", () => {
    const icon = togglePasswordConfirm.querySelector("img");
    const confirmInput = document.getElementById("password-confirm");
    const isHidden = confirmInput.type === "password";

    confirmInput.type = isHidden ? "text" : "password";
    icon.src = isHidden
      ? "/images/btn_visibility_on_24px.png"
      : "/images/btn_visibility_off_24px.png";
  });

  // 초기 상태는 비활성화
  signupBtn.disabled = true;
});
