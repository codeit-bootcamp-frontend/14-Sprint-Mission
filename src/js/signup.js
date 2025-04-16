const emailInput = document.getElementById('email');
const pwInput = document.getElementById('password');
const emailError = emailInput.nextElementSibling;
const pwError = pwInput.nextElementSibling;
const loginButton = document.querySelector('.auth__button');
const toggleBtn = document.querySelector('.auth__visible');
const toggleIcon = toggleBtn.querySelector('img');
const form = document.querySelector('.auth__form');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError(input, error, message) {
  //에러일 때 실행되는 함수
  input.classList.remove('success');
  input.classList.add('error');
  error.textContent = message;
  error.classList.remove('hidden');
}

function showSuccess(input, error) {
  //성공일 때 실행되는 함수
  input.classList.add('success');
  input.classList.remove('error');
  error.classList.add('hidden');
}

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

function validatePassword() {
  const value = pwInput.value.trim();

  if (value === '') {
    //pw가 비어있을 때
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
