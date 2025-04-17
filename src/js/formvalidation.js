export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* 에러 메시지 */
export function showError(input, error, message) {
  input.classList.remove('success');
  input.classList.add('error');
  error.textContent = message;
  error.classList.remove('hidden');
}

/* 성공 메시지 */
export function showSuccess(input, error) {
  input.classList.add('success');
  input.classList.remove('error');
  error.classList.add('hidden');
}

/* 이메일 유효성 검사 */
export function validationEmail(input, error) {
  const value = input.value.trim();

  if (value === '') {
    showError(input, error, '이메일을 입력해주세요');
  } else if (!emailRegex.test(value)) {
    showError(input, error, '잘못된 이메일 형식입니다');
  } else {
    showSuccess(input, error);
  }
}

/* 비밀번호 유효성 검사 */
export function validationPassword(input, error) {
  const value = input.value.trim();

  if (value === '') {
    showError(input, error, '비밀번호를 입력해주세요');
  } else if (value.length < 8) {
    showError(input, error, '비밀번호를 8자 이상 입력해주세요');
  } else {
    showSuccess(input, error);
  }
}

/* 모든 입력값이 유효한지 확인 */
export function inputsValid(input) {
  for (let i = 0; i < input.length; i++) {
    if (!input[i].classList.contains('success')) {
      return false;
    }
  }
  return true;
}

/* 버튼 활성화 */
export function updateButtonState(input, button) {
  button.disabled = !inputsValid(input);
}

/* 버튼 누르면 페이지 이동 */
export function goToPage(input, button, url) {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    if (inputsValid(input)) {
      window.location.href = url;
    }
  });
}
