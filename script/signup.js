const FORM_VALIDATIN = {
  email: {
    value: "",
    required: "이메일 입력해주세요.",
    pattern: "잘못된 이메일 형식입니다.",
    validator: (value) => {
      if (!value) return FORM_VALIDATIN.email.required;
      if (!value.includes("@")) return FORM_VALIDATIN.email.pattern;
      return "";
    },
  },
  nickname: {
    value: "",
    required: "닉네임을 입력해주세요.",
    validator: (value) => {
      if (!value) return FORM_VALIDATIN.nickname.required;
      return "";
    },
  },
  password: {
    value: "",
    required: "비밀번호를 입력해주세요.",
    minLength: "비밀번호는 8자 이상이여야 합니다.",
    validator: (value) => {
      if (!value) return FORM_VALIDATIN.password.required;
      if (value.length < 8) return FORM_VALIDATIN.password.minLength;
      return "";
    },
  },
  passwordCheck: {
    value: "",
    required: "먼저 조건에 맞는 비밀번호를 입력해 주세요",
    match: "비밀번호가 일치하지 않습니다.",
    validator: (value) => {
      if (!value) return FORM_VALIDATIN.passwordCheck.required;
      if (value !== FORM_VALIDATIN.password.value)
        return FORM_VALIDATIN.passwordCheck.match;
      return "";
    },
  },
};

const form = document.querySelector(".login-form");
const inputList = [...form.querySelectorAll("input")];
const submitButton = document.querySelector(".submit-button");

// 버튼이 없을 경우 오류 방지
if (!submitButton) {
  console.error("submit-button 요소를 찾을 수 없습니다.");
}

const showError = ({ node, message }) => {
  // label 요소 내부에서 error-message 찾기
  const errorSpan = node.closest("label").querySelector(".error-message");

  if (!errorSpan) {
    console.error("error-message 요소를 찾을 수 없습니다.", node);
    return;
  }

  if (message) {
    node.classList.add("error");
    errorSpan.innerHTML = message;
  } else {
    node.classList.remove("error");
    errorSpan.innerHTML = "";
  }
};

inputList.forEach(($input) => {
  $input.addEventListener("focusout", (e) => {
    const { name, value } = e.target;

    const errorMessage = FORM_VALIDATIN[name].validator(value);

    showError({ node: e.target, message: errorMessage });
  });
});

inputList.forEach(($input) => {
  $input.addEventListener("input", (e) => {
    const { name, value } = e.target;
    FORM_VALIDATIN[name].value = value;

    const isFormValid = inputList.every(
      ({ name, value }) => FORM_VALIDATIN[name].validator(value) === ""
    );

    const submitButton = document.querySelector(".submit-button");
    submitButton.disabled = !isFormValid;
  });
});

//Event
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  console.log(data);
});
