const emailInput = document.getElementById('email');
const pwInput = document.getElementById('password');
const emailError = emailInput.nextElementSibling;
const pwError = pwInput.nextElementSibling;
const loginButton = document.querySelector('.auth__button');
const form = document.querySelector('.auth__form');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/*에러 메시지*/
function showError(input, error, message) {
  input.classList.remove('success');
  input.classList.add('error');
  error.textContent = message;
  error.classList.remove('hidden');
}

/*성공 메시지*/
function showSuccess(input, error) {
  input.classList.add('success');
  input.classList.remove('error');
  error.classList.add('hidden');
}

/* 이메일 유효성 검사 */
function validateEmail() {
  const value = emailInput.value.trim();

  if (value === '') {
    showError(emailInput, emailError, '이메일을 입력해주세요');
  } else if (!emailRegex.test(value)) {
    showError(emailInput, emailError, '잘못된 이메일 형식입니다');
  } else {
    showSuccess(emailInput, emailError);
  }
}

/* 비밀번호 유효성 검사 */
function validatePassword() {
  const value = pwInput.value.trim();

  if (value === '') {
    showError(pwInput, pwError, '비밀번호를 입력해주세요');
  } else if (pwInput.value.length < 8) {
    showError(pwInput, pwError, '비밀번호를 8자 이상 입력해주세요');
  } else {
    showSuccess(pwInput, pwError);
  }
}

emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('input', validateEmail);
pwInput.addEventListener('blur', validatePassword);
pwInput.addEventListener('input', validatePassword);
