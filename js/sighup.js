document.addEventListener("DOMContentLoaded", function () {
  const emailCheck = document.querySelector("#email-box");
  const passwordCheck = document.querySelector("#password-box");
  const nameCheck = document.querySelector("#name-box");
  const passwordTwoCheck = document.querySelector("#password-check-box");
  const submitButton = document.querySelector(".login-button");
  const togglePassword = document.querySelector(".password-box-icon");
  const togglePasswordTwo = document.querySelector(".password-check-box-icon");

  emailCheck.addEventListener("focusout", (e) => validateInput(e, "email"));
  passwordCheck.addEventListener("focusout", (e) =>
    validateInput(e, "password")
  );
  nameCheck.addEventListener("focusout", (e) => validateInput(e, "text"));
  passwordTwoCheck.addEventListener("focusout", (e) =>
    validateInput(e, "password")
  );

  emailCheck.addEventListener("input", validButton);
  passwordCheck.addEventListener("input", validButton);
  nameCheck.addEventListener("input", validButton);
  passwordTwoCheck.addEventListener("input", validButton);

  submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    if (
      emailCheck.value !== "" &&
      emailCheck.checkValidity() &&
      passwordCheck.value !== "" &&
      passwordCheck.value.length >= 8 &&
      nameCheck.value !== "" &&
      passwordCheck.value === passwordTwoCheck.value
    ) {
      window.location.href = "../pages/login.html";
    }
  });

  function validateInput(e, type) {
    const input = e.target;
    const errorMessage = document.querySelector(`.${type}-error-message`);
    const validMessage = document.querySelector(`.${type}-valid-message`);
    const passwordErrorMessage = document.querySelector(
      ".passwordTwo-error-message"
    );

    if (type === "email") {
      if (input.value === "") {
        errorMessage.style.display = "block";
        validMessage.style.display = "none";
        emailCheck.classList.add("error-border");
        emailCheck.style.margin = "0";
      } else if (!input.checkValidity()) {
        validMessage.style.display = "block";
        errorMessage.style.display = "none";
        emailCheck.classList.add("error-border");
        emailCheck.style.margin = "0";
      } else {
        errorMessage.style.display = "none";
        validMessage.style.display = "none";
        emailCheck.classList.remove("error-border");
        emailCheck.classList.add("success-border");
        emailCheck.style.marginBottom = "1.5rem";
      }
    } else if (type === "text") {
      if (input.value === "") {
        errorMessage.style.display = "block";
        nameCheck.classList.add("error-border");
        nameCheck.style.margin = "0";
      } else {
        errorMessage.style.display = "none";
        nameCheck.classList.remove("error-border");
        nameCheck.classList.add("success-border");
        nameCheck.style.marginBottom = "1.5rem";
      }
    } else if (type === "password") {
      if (input.value === "") {
        errorMessage.style.display = "block";
        validMessage.style.display = "none";
        passwordCheck.classList.add("error-border");
        passwordCheck.style.marginBottom = "0";
      } else if (input.value.length < 8) {
        validMessage.style.display = "block";
        errorMessage.style.display = "none";
        passwordCheck.classList.add("error-border");
        passwordCheck.style.marginBottom = "0";
      } else {
        errorMessage.style.display = "none";
        validMessage.style.display = "none";
        passwordCheck.classList.remove("error-border");
        passwordCheck.classList.add("success-border");
        passwordCheck.style.marginBottom = "1.5rem";
      }
    }

    if (passwordCheck.value !== passwordTwoCheck.value) {
      passwordErrorMessage.style.display = "block";
      passwordTwoCheck.classList.add("error-border");
      passwordTwoCheck.style.marginBottom = "0";
    } else if (
      passwordCheck.value === passwordTwoCheck.value &&
      passwordTwoCheck.value !== ""
    ) {
      passwordErrorMessage.style.display = "none";
      passwordTwoCheck.classList.remove("error-border");
      passwordTwoCheck.classList.add("success-border");
      passwordTwoCheck.style.marginBottom = "1.5rem";
    }
  }

  function validButton() {
    if (
      emailCheck.value !== "" &&
      emailCheck.checkValidity() &&
      passwordCheck.value !== "" &&
      passwordCheck.value.length >= 8 &&
      nameCheck.value !== "" &&
      passwordCheck.value === passwordTwoCheck.value
    ) {
      submitButton.disabled = false;
    } else {
      submitButton.disabled = true;
    }
  }

  if (togglePassword) {
    togglePassword.addEventListener("click", function () {
      if (!passwordCheck) return;
      const isPasswordHidden = passwordCheck.type === "password";
      passwordCheck.type = isPasswordHidden ? "text" : "password";
      togglePassword.src = isPasswordHidden
        ? "../img/Vector2.png"
        : "../img/Property1Default.png";
    });
  }

  if (togglePasswordTwo) {
    togglePasswordTwo.addEventListener("click", function () {
      if (!passwordTwoCheck) return;
      const isPasswordHidden = passwordTwoCheck.type === "password";
      passwordTwoCheck.type = isPasswordHidden ? "text" : "password";
      togglePasswordTwo.src = isPasswordHidden
        ? "../img/Vector2.png"
        : "../img/Property1Default.png";
    });
  }
});
