const emailInput = document.getElementById('email');
const pwInput = document.getElementById('password');

const emailError = emailInput.nextElementSibling;
const pwError = pwInput.nextElementSibling;

const loginButton = document.querySelector('.auth__button');

const toggleBtn = document.querySelector('.auth__visible');
const toggleIcon = toggleBtn.querySelector('img');

const form = document.querySelector('.auth__form');

let isPasswordVisible = false;

toggleBtn.addEventListener('click', () => {
  //비밀번호 보이기/숨기기
  isPasswordVisible = !isPasswordVisible;

  if (isPasswordVisible) {
    //비밀번호 보이기
    pwInput.type = 'text';
    toggleIcon.src = '../assets/images/visibility_on.svg';
    toggleIcon.alt = '비밀번호 보기';
  } else {
    //비밀번호 숨기기
    pwInput.type = 'password';
    toggleIcon.src = '../assets/images/visibility_off.svg';
    toggleIcon.alt = '비밀번호 숨김';
  }
});

//둘다 유효한 값일 때 버튼 활성화
function updateButtonState() {
  const email = emailInput.value.trim();
  const password = pwInput.value.trim();

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPwValid = password.length >= 8;

  loginButton.disabled = !(isEmailValid && isPwValid); //둘다 유효할 때 버튼 활성화
}

//이메일 입력값 유효성 검사
emailInput.addEventListener('blur', () => {
  const value = emailInput.value.trim();
  emailInput.classList.remove('error', 'success');

  if (!value) {
    // 입력값이 없을 때
    emailInput.classList.add('error');
    emailError.textContent = '이메일을 입력해주세요';
    emailError.classList.remove('hidden');
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
    // 잘못된 형식일 때
    emailInput.classList.add('error');
    emailError.textContent = '잘못된 이메일 형식입니다.';
    emailError.classList.remove('hidden');
  } else {
    // 정상일 때
    emailInput.classList.add('success');
    emailError.classList.add('hidden');
  }

  updateButtonState();
});

//비밀번호 입력값 유효성 검사
pwInput.addEventListener('blur', () => {
  const value = pwInput.value.trim();
  pwInput.classList.remove('error', 'success');

  if (!value) {
    // 입력값이 없을 때
    pwInput.classList.add('error');
    pwError.textContent = '비밀번호를 입력해주세요';
    pwError.classList.remove('hidden');
  } else if (value.length < 8) {
    // 잘못된 형식일 때
    pwInput.classList.add('error');
    pwError.textContent = '비밀번호를 8자 이상 입력해주세요';
    pwError.classList.remove('hidden');
  } else {
    // 정상일 때
    pwInput.classList.add('success');
    pwError.classList.add('hidden');
  }

  updateButtonState();
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = emailInput.value.trim();
  const password = pwInput.value.trim();

  const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isPwValid = password.length >= 8;

  if (isEmailValid && isPwValid) {
    window.location.href = './items.html';
  }
});
