const emailInput = document.getElementById('email');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const passwordConfirmInput = document.getElementById('password-confirm');
const eyeSlashImg = document.getElementById('eye-slash');
const eyeSlashConfirmImg = document.getElementById('eye-slash-confirm');
const signupButton = document.querySelector('.signup-btn');

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
// 비밀번호 확인 표시
function toggleConfirmVisibility(){
	if (passwordConfirmInput.type === 'password') {
			passwordConfirmInput.type = 'text';
			eyeSlashConfirmImg.src = "/images/eye.svg"
	} else {
		passwordConfirmInput.type = 'password';
		eyeSlashConfirmImg.src = "/images/eye-slash.svg"
	}
}

// 모든 필드 값 입력시 버튼 활성화
emailInput.addEventListener('input', changeButtonState);
usernameInput.addEventListener('input', changeButtonState);
passwordInput.addEventListener('input', changeButtonState);
passwordConfirmInput.addEventListener('input', changeButtonState);

function changeButtonState() {
	const isFormValid = emailInput.value.trim() !== '' && passwordInput.value.trim() !== '' && usernameInput.value.trim() !== '' && passwordConfirmInput.value.trim() !== '';

	signupButton.disabled = !isFormValid;
  
	if(isFormValid){
		signupButton.classList.add('valid');
	}
}