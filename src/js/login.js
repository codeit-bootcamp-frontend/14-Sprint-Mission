const emailInput = document.getElementById('email');
const pwInput = document.getElementById('password');
const emailError = emailInput.nextElementSibling;
const pwError = pwInput.nextElementSibling;
const loginButton = document.querySelector('.auth__button');
const toggleBtn = document.querySelector('.auth__visible');
const toggleIcon = toggleBtn.querySelector('img');
const form = document.querySelector('.auth__form');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateEmail() {
  const value = emailInput.value.trim();

  if (value === '') {
    //email이 비어있을 때
    emailInput.classList.remove('success');
    emailInput.classList.add('error');
    emailError.classList.remove('hidden');
    emailError.textContent = '이메일을 입력해주세요';
  } else if (!emailRegex.test(value)) {
    emailInput.classList.remove('success');
    emailInput.classList.add('error');
    emailError.classList.remove('hidden');
    emailError.textContent = '잘못된 이메일 형식입니다';
  } else {
    emailInput.classList.add('success');
    emailInput.classList.remove('error');
    emailError.classList.add('hidden');
  }
}

emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('input', validateEmail);
pwInput.addEventListener('blur', validatePassword);
pwInput.addEventListener('input', validatePassword);

function validatePassword() {
  const value = pwInput.value.trim();

  if (value === '') {
    //pw가 비어있을 때
    pwInput.classList.remove('success');
    pwInput.classList.add('error');
    pwError.classList.remove('hidden');
    pwError.textContent = '비밀번호를 입력해주세요';
  } else if (pwInput.value.length < 8) {
    pwInput.classList.remove('success');
    pwInput.classList.add('error');
    pwError.classList.remove('hidden');
    pwError.textContent = '비밀번호를 8자 이상 입력해주세요';
  } else {
    pwInput.classList.add('success');
    pwInput.classList.remove('error');
    pwError.classList.add('hidden');
  }
}
