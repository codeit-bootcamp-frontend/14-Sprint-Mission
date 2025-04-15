document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const emailError = document.getElementById("email-error");
    const passwordError = document.getElementById("password-error");
    const form = document.querySelector(".login-form");
    const submitBtn = document.querySelector(".btn-large");

    submitBtn.disabled = true; // 초기 상태에서 버튼 비활성화

    // 필드별로 touched 상태를 추적
    let emailTouched = false;
    let passwordTouched = false;

    // 유효성 검사 함수
    function validateEmail() {
        if (!emailTouched) return true;
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

    function validatePassword() {
        if (!passwordTouched) return true;
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

    function updateSubmitLoginState() {
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();
        submitBtn.disabled = !(
            emailTouched &&
            passwordTouched &&
            isEmailValid &&
            isPasswordValid
        );
    }

    // 폼 제출 시 유효성 검사
    form.addEventListener("submit", (event) => {
        const isEmailValid = validateEmail();
        const isPasswordValid = validatePassword();

        if (!isEmailValid || !isPasswordValid) {
            event.preventDefault(); // 폼 제출 방지
        } else {
            event.preventDefault(); // 기본 제출 방지
            window.location.href = "/items";
        }
        updateSubmitLoginState();
    });

    // 입력 필드에서 포커스가 벗어날 때 유효성 검사
    emailInput.addEventListener("blur", () => {
        emailTouched = true;
        validateEmail();
    });
    passwordInput.addEventListener("blur", () => {
        passwordTouched = true;
        validatePassword();
    });
    // 입력 필드에서 값이 변경될 때 버튼 상태 업데이트
    emailInput.addEventListener("input", updateSubmitLoginState);
    passwordInput.addEventListener("input", updateSubmitLoginState);
});
// 로그인 버튼 클릭 시 로그인 처리
