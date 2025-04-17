const toggleButtons = document.querySelectorAll('.auth__visible');

for (let i = 0; i < toggleButtons.length; i++) {
  const toggleBtn = toggleButtons[i];
  const wrapper = toggleBtn.parentElement;
  const input = wrapper.querySelector('input');
  const icon = toggleBtn.querySelector('img');
  let isVisible = false;

  toggleBtn.addEventListener('click', () => {
    isVisible = !isVisible;

    input.type = isVisible ? 'text' : 'password';
    icon.src = isVisible
      ? '../assets/images/visibility_on.svg'
      : '../assets/images/visibility_off.svg';
    icon.alt = isVisible ? '비밀번호 보기' : '비밀번호 숨김';
  });
}
