document.addEventListener("DOMContentLoaded", () => {
    // 비밀번호 토글 버튼 처리
    document.querySelectorAll(".toggle-password-btn").forEach((button) => {
        button.addEventListener("click", () => {
            const input = button.previousElementSibling; // 버튼 바로 앞의 input 요소
            const img = button.querySelector("img"); // 버튼 내부의 이미지

            if (input.type === "password") {
                input.type = "text"; // 비밀번호 보이기
                img.src = "styles/assets/icons/icon/eyes_on.svg"; // 이미지 변경
                img.alt = "hide-password"; // 접근성 개선
            } else {
                input.type = "password"; // 비밀번호 숨기기
                img.src = "styles/assets/icons/icon/eyes_off.svg"; // 이미지 변경
                img.alt = "show-password"; // 접근성 개선
            }
        });
    });

    // 비밀번호 입력 필드에 따라 버튼 표시/숨기기
    const passwordInput = document.getElementById("password");
    const togglePasswordBtn = document.querySelector(".toggle-password-btn");

    if (passwordInput && togglePasswordBtn) {
        passwordInput.addEventListener("input", () => {
            if (passwordInput.value.length > 0) {
                togglePasswordBtn.style.display = "block";
            } else {
                togglePasswordBtn.style.display = "none";
            }
        });
    }
});
