document.addEventListener("DOMContentLoaded", function () {
  const emailCheck = document.querySelector("#email-box");
  const passwordCheck = document.querySelector("#password-box");
  const submitButton = document.querySelector(".login-button");
  const togglePassword = document.querySelector(".password-box-icon");

  emailCheck.addEventListener("focusout", (e) => validateInput(e, "email"));
  passwordCheck.addEventListener("focusout", (e) =>
    validateInput(e, "password")
  );
  emailCheck.addEventListener("input", validButton);
  passwordCheck.addEventListener("input", validButton);

  submitButton.addEventListener("click", (e) => {
    // items 페이지로 이동
    e.preventDefault();
    if (
      emailCheck.value !== "" &&
      emailCheck.checkValidity() &&
      passwordCheck.value !== "" &&
      passwordCheck.value.length >= 8
    ) {
      window.location.href = "../pages/items.html";
    }
  });

  function validateInput(e, type) {
    // 이메일과 비밀번호 조건 함수
    const input = e.target;
    const errorMessage = document.querySelector(`.${type}-error-message`);
    const validMessage = document.querySelector(`.${type}-valid-message`);
    if (type === "email") {
      if (type === "email" && !input.checkValidity()) {
        errorMessage.style.display = "none";
        validMessage.style.display = "block";
        emailCheck.classList.add("error-border");
        emailCheck.style.margin = "0";
      } else if (type === "email" && input.value === "") {
        errorMessage.style.display = "block";
        validMessage.style.display = "none";
        emailCheck.classList.add("error-border");
        emailCheck.style.margin = "0";
      } else {
        errorMessage.style.display = "none";
        validMessage.style.display = "none";
        emailCheck.classList.remove("error-border");
        emailCheck.style.marginBottom = "1.5rem";
      }
    } else if (type === "password") {
      if (type === "password" && input.value === "") {
        errorMessage.style.display = "block";
        validMessage.style.display = "none";
        passwordCheck.classList.add("error-border");
        passwordCheck.style.marginBottom = "0";
      } else if (type === "password" && input.value.length < 8) {
        errorMessage.style.display = "none";
        validMessage.style.display = "block";
        passwordCheck.classList.add("error-border");
        passwordCheck.style.marginBottom = "0";
      } else if (type === "password" && input.value.length >= 8) {
        errorMessage.style.display = "none";
        validMessage.style.display = "none";
        passwordCheck.classList.remove("error-border");
        passwordCheck.style.marginBottom = "1.5rem";
      }
    }
  }

  function validButton() {
    const isEmailValid =
      emailCheck.value.trim() !== "" && emailCheck.checkValidity();
    const isPasswordValid =
      passwordCheck.value.trim() !== "" && passwordCheck.value.length >= 8;

    submitButton.disabled = !(isEmailValid && isPasswordValid);
  }

  if (togglePassword) {
    // 아이콘 비밀번호호
    togglePassword.addEventListener("click", function () {
      if (!passwordCheck) return;
      const isPasswordHidden = passwordCheck.type === "password";
      passwordCheck.type = isPasswordHidden ? "text" : "password";
      togglePassword.src = isPasswordHidden
        ? "../img/Vector2.png"
        : "../img/Property1Default.png";
    });
  }
});
