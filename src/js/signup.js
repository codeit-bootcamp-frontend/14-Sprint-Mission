const emailInput = document.getElementById('email');
const nicknameInput = document.getElementById('nickname');
const pwInput = document.getElementById('password');
const pwcheckInput = document.getElementById('passwordcheck');

const emailError = emailInput.nextElementSibling;
const nicknameError = nicknameInput.nextElementSibling;
const pwError = pwInput.nextElementSibling;
const pwcheckError = pwcheckInput.nextElementSibling;

const signupButton = document.querySelector('.auth__button');
const form = document.querySelector('.auth__form');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* 에러 메시지 */
function showError(input, error, message) {
  input.classList.remove('success');
  input.classList.add('error');
  error.textContent = message;
  error.classList.remove('hidden');
}

/* 성공 메시지 */
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
  updateButton();
}

/* 닉네임 유효성 검사 */
function validateNickname() {
  const value = nicknameInput.value.trim();

  if (value === '') {
    showError(nicknameInput, nicknameError, '닉네임을 입력해주세요');
  } else {
    showSuccess(nicknameInput, nicknameError);
  }
  updateButton();
}

/* 비밀번호 유효성 검사 */
function validatePassword() {
  const value = pwInput.value.trim();

  if (value === '') {
    showError(pwInput, pwError, '비밀번호를 입력해주세요');
  } else if (value.length < 8) {
    showError(pwInput, pwError, '비밀번호를 8자 이상 입력해주세요');
  } else {
    showSuccess(pwInput, pwError);
  }
  updateButton();
}

/* 비밀번호 확인 유효성 검사 */
function validatePasswordcheck() {
  const pwValue = pwInput.value.trim();
  const pwcheckValue = pwcheckInput.value.trim();

  if (!(pwValue === pwcheckValue)) {
    showError(pwcheckInput, pwcheckError, '비밀번호가 일치하지 않습니다.');
  } else {
    showSuccess(pwcheckInput, pwcheckError);
  }
  updateButton();
}

/* 모든 입력값이 유효한지 확인 */
function isAllValid() {
  return (
    emailInput.classList.contains('success') &&
    nicknameInput.classList.contains('success') &&
    pwInput.classList.contains('success') &&
    pwcheckInput.classList.contains('success')
  );
}

/* 로그인 버튼 활성화 */
function updateButton() {
  signupButton.disabled = !isAllValid();
}

/* 버튼 이동 */
signupButton.addEventListener('click', () => {
  if (isAllValid()) {
    window.location.href = '../html/login.html';
  }
});

emailInput.addEventListener('blur', validateEmail);
emailInput.addEventListener('input', validateEmail);
nicknameInput.addEventListener('blur', validateNickname);
nicknameInput.addEventListener('input', validateNickname);
pwInput.addEventListener('blur', validatePassword);
pwInput.addEventListener('input', validatePassword);
pwcheckInput.addEventListener('blur', validatePasswordcheck);
pwcheckInput.addEventListener('input', validatePasswordcheck);
