import {
  emailValidate,
  passwordValidate,
  uiUpdate,
} from "./common/validator.js";

const $input = document.querySelectorAll(".sign-form input");
const $inputList = [...$input];
const $button = document.querySelector(".el-btn[type=submit]");
const VALIDATOR = {
  email: {
    validate: emailValidate,
    errMsg: "이메일을 입력해주세요.",
  },
  password: {
    validate: passwordValidate,
    errMsg: "비밀번호를 입력해주세요.",
  },
};

$input.forEach((input) => {
  input.addEventListener("focusout", (e) => {
    const { name, value } = e.target;
    const errMsg = VALIDATOR[name].validate(value);
    VALIDATOR[name].errMsg = errMsg;

    uiUpdate(e.target, errMsg);

    const isFormValid = $inputList.every(({ name }) => {
      return !VALIDATOR[name].errMsg;
    });

    !isFormValid ? ($button.disabled = true) : ($button.disabled = false);
  });
});

$button.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "/page/items.html";
});

//비밀번호 표시
const $iconBtn = document.querySelector(".btn-password");
const passwordToggle = (e) => {
  const $button = e.target;
  const $passwordInput = $button.previousElementSibling;
  const isActive = $button.classList.contains("active");

  if (isActive) {
    $button.classList.remove("active");
    $passwordInput.setAttribute("type", "password");
  } else {
    $button.classList.add("active");
    $passwordInput.setAttribute("type", "text");
  }
};

$iconBtn.addEventListener("click", passwordToggle);
