// 이메일 유효성 검사
function validateEmail(email){
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

// 에러 메세지 표시
function showError(input, message){
  input.classList.add('error');
  const errorBlock = document.createElement('div');
  errorBlock.className = 'error-message';
  errorBlock.textContent = message;
  input.parentNode.insertBefore(errorBlock, input.nextSibling);
}

// 에러 블럭 제거
function removeError(input){
  const errorBlock = input.parentNode.querySelector('.error-message');
  if(errorBlock){
    input.classList.remove('error');
    errorBlock.remove(); 
  }
}

// 이메일 인풋 검사
function checkEmailInput(input){
  removeError(input);
  if(input.value.trim() === ''){
    showError(input, '이메일을 입력해주세요.')
  } else if(!validateEmail(input.value)){
    showError(input, '잘못된 이메일 형식입니다.')
  }
}

function checkPasswordInput(input){
  removeError(input);
  if(input.value.trim() === ''){
    showError(input, '비밀번호를 입력해주세요.')
  } else if(input.value.length < 8){
    showError(input, '비밀번호를 8자 이상 입력해주세요.')
  }
}

function checkInputs(form, button) {
  const inputs = form.querySelectorAll('input');
  const errorMessage = form.querySelector('.error-message')
  let isFormValid = true;

  for(let input of inputs){
    if(input.value.trim() == ""){
      isFormValid = false;
      break;
    } else if(errorMessage){
      isFormValid = false;
      break;
    }
  }

  button.disabled = !isFormValid;
  button.classList.toggle("valid", isFormValid);
}

export { checkEmailInput,checkPasswordInput, checkInputs};