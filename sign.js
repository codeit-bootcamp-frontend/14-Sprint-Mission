document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const passwordConfirmInput = document.getElementById("password-confirm");
    const emailError = document.getElementById("email-error");
    const usernameError = document.getElementById("username-error");
    const passwordError = document.getElementById("password-error");
    const passwordConfirmInputError = document.getElementById(
        "password-confirm-error"
    );
    const form = document.querySelector(".login-form");
    const submitBtn = document.querySelector(".btn-large");

    submitBtn.disabled = true; // 초기 상태에서 버튼 비활성화
    // 유효성 검사 함수
    function validateEmail() {
        const emailValue = emailInput.value.trim();
        if (!emailValue) {
            emailError.textContent = "이메일을 입력해 주세요.";
            emailInput.classList.add("error");
            return false;
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
            emailError.textContent = "잘못된 이메일입니다.";
            emailInput.classList.add("error");
            return false;
        }
        emailError.textContent = ""; // 에러 메시지 초기화
        emailInput.classList.remove("error");
        return true;
    }

    function vaildateUsername() {
        const usernameValue = usernameInput.value.trim();
        if (!usernameValue) {
            usernameError.textContent = "닉네임을 입력해 주세요.";
            usernameInput.classList.add("error");
            return false;
        }
        usernameError.textContent = ""; // 에러 메시지 초기화
        usernameInput.classList.remove("error");
        return true;
    }

    function validatePassword() {
        const passwordValue = passwordInput.value.trim();
        if (!passwordValue) {
            passwordError.textContent = "비밀번호를 입력해 주세요.";
            passwordInput.classList.add("error");
            return false;
        } else if (passwordValue.length < 8) {
            passwordError.textContent = "비밀번호를 8자 이상 입력해 주세요.";
            passwordInput.classList.add("error");
            return false;
        }
        passwordError.textContent = ""; // 에러 메시지 초기화
        passwordInput.classList.remove("error");
        return true;
    }

    function validateConfirmPassword() {
        const passwordConfirmValue = passwordConfirmInput.value.trim();
        const passwordValue = passwordInput.value.trim();
        if (!passwordConfirmValue) {
            passwordConfirmInputError.textContent =
                "비밀번호를 다시 입력해 주세요.";
            passwordConfirmInput.classList.add("error");
            return false;
        } else if (passwordConfirmValue !== passwordValue) {
            passwordConfirmInputError.textContent =
                "비밀번호가 일치하지 않습니다.";
            passwordConfirmInput.classList.add("error");
            return false;
        }
        passwordConfirmInputError.textContent = ""; // 에러 메시지 초기화
        passwordConfirmInput.classList.remove("error");
        return true;
    }
    // 회원가입 상태 업데이트
    function updateSubmitSignupState() {
        const isEmailVaild = validateEmail();
        const isUsernameValid = vaildateUsername();
        const isPasswordValid = validatePassword();
        const isPasswordConfirmValid = validateConfirmPassword();
        submitBtn.disabled = !(
            isEmailVaild &&
            isUsernameValid &&
            isPasswordValid &&
            isPasswordConfirmValid
        );
    }
    // 폼 제출 시 유효성 검사
    form.addEventListener("submit", (event) => {
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (!isEmailValid || !isPasswordValid) {
            event.preventDefault(); // 폼 제출 방지
        } else {
            event.preventDefault(); // 폼 제출 방지
            window.location.href = "/login.html";
        }
        updateSubmitLoginState();
    });

    // 입력 필드에서 포커스가 벗어날 때 유효성 검사
    emailInput.addEventListener("blur", validateEmail);
    usernameInput.addEventListener("blur", vaildateUsername);
    passwordInput.addEventListener("blur", validatePassword);
    passwordConfirmInput.addEventListener("blur", validateConfirmPassword);
    // 입력 필드에서 값이 변경될 때 버튼 상태 업데이트
    emailInput.addEventListener("input", updateSubmitSignupState);
    usernameInput.addEventListener("input", updateSubmitSignupState);
    passwordInput.addEventListener("input", updateSubmitSignupState);
    passwordConfirmInput.addEventListener("input", updateSubmitSignupState);
});
// 로그인 버튼 클릭 시 로그인 처리
