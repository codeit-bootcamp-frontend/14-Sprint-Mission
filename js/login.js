const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const eyeSlashImg = document.getElementById('eye-slash');
const loginButton = document.querySelector('.login-btn');


// 비밀번호 표시
function toggleVisibility(){
	if (passwordInput.type === 'password') {
		passwordInput.type = 'text';
		eyeSlashImg.src = "/images/eye.svg"
	} else {
		passwordInput.type = 'password';
		eyeSlashImg.src = "/images/eye-slash.svg"
	}
}

// 모든 필드 값 입력시 버튼 활성화
emailInput.addEventListener('input', changeButtonState);
passwordInput.addEventListener('input', changeButtonState);

function changeButtonState() {
  const isFormValid = emailInput.value.trim() !== '' && passwordInput.value.trim() !== '';

  loginButton.disabled = !isFormValid;

  if(isFormValid){
	loginButton.classList.add('valid');
  }
}