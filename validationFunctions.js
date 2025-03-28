//
const showError = (element, errorMessage) => {
  const { error, input } = element;
  if (!error || !input) return;
  error.textContent = errorMessage;
  error.style.display = "block";
  input.style.border = "1px solid red";
};

const hideError = (element) => {
  const { error, input } = element;
  if (!error || !input) return;
  error.style.display = "none";
  input.style.border = "none";
};

export const addErrorEvent = (element) => {
  const { input, error, regex, emptyMessage, invalidMessage } = element;
  input.addEventListener("focusout", () => {
    const value = input.value.trim();
    if (!value) {
      showError(element, emptyMessage);
    } else if (!regex.test(value)) {
      showError(element, invalidMessage);
    } else {
      hideError(element);
    }
  });
};

// email.addEventListener("focusout", () => {
//   const emailError = document.getElementById("emailErrorMessage");
//   const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//   if (!email.value) {
//     showError(emailError, "이메일을 입력해주세요", email);
//   } else if (!emailRegex.test(email.value)) {
//     showError(emailError, "잘못된 이메일 형식입니다", email);
//   } else {
//     hideError(emailError, email);
//   }
// });
