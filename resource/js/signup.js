import {
  emailValidate,
  nickNameValidate,
  passwordValidate,
  passwordChkValidate,
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
  nickName: {
    validate: nickNameValidate,
    errMsg: "닉네임을 입력해주세요.",
  },
  password: {
    validate: passwordValidate,
    errMsg: "비밀번호를 입력해주세요.",
  },
  passwordChk: {
    validate: passwordChkValidate,
    errMsg: "비밀번호를 다시 한 번 입력해주세요",
  },
};

$input.forEach((input) => {
  input.addEventListener("focusout", (e) => {
    const { name, value } = e.target;
    let errMsg;

    if (name === "passwordChk") {
      const password = document.querySelector('input[name="password"]').value;
      errMsg = VALIDATOR[name].validate(password, value);
    } else {
      errMsg = VALIDATOR[name].validate(value);
    }

    VALIDATOR[name].errMsg = errMsg;
    uiUpdate(e.target, errMsg);

    const isFormValid = $inputList.every(({ name }) => {
      return !VALIDATOR[name].errMsg;
    });

    $button.disabled = !isFormValid;
  });
});

$button.addEventListener("click", (e) => {
  e.preventDefault();
  window.location.href = "/page/login.html";
});

//비밀번호 표시
const $iconBtn = document.querySelectorAll(".btn-password");
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

$iconBtn.forEach((iconBtn) => {
  iconBtn.addEventListener("click", passwordToggle);
});
