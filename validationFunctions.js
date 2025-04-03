// 에러 메시지를 표시해줄 함수 (에러인지 판명하지 않음 => 단순 에러표시기능만 담음)
const showError = (errorElement, inputElement, errorMessage) => {
  if (!errorElement || !inputElement) return;
  errorElement.textContent = errorMessage;
  errorElement.style.display = "block";
  inputElement.style.border = "1px solid red";
};

// 에러 메시지를 숨겨줄 함수
const hideError = (errorElement, inputElement) => {
  if (!errorElement || !inputElement) return;
  errorElement.style.display = "none";
  inputElement.style.border = "none";
};

//폼의 각 영역을 인자로 받아서 검증절차를 하는 함수 에러표시 함수와 분리해서 함수를 분리하려고 함
//isValid를 변경하면서 해당 검증을 통과했는지/하지 못했는지 확인할 수 있도록 함
export const validateField = (field) => {
  const { input, error, regex, emptyMessage, invalidMessage } = field; //사용할 property를 구조분해할당함
  const value = input.value.trim(); //input값의 공백을 잡아내기 위한 trim메서드 사용

  if (!value) { //값이 공백일 경우 비였을 경우의 에러출력
    showError(error, input, emptyMessage);
    field.isValid = false;
  } else if (regex && !regex.test(value)) {  //정규표현식이 있을 경우에 테스트를 통과하지 못했을 경우 에러출력
    showError(error, input, invalidMessage);
    field.isValid = false;
  } else {  //검증을 통과한 경우
    hideError(error, input);
    field.isValid = true;
  }
};

//비밀번호 확인을 진행하는 함수
export const validatePasswordConfirm = (passwordField, confirmField) => {
  const passwordValue = passwordField.input.value;
  const confirmValue = confirmField.input.value;

  if (!confirmValue) {
    showError(
      confirmField.error,
      confirmField.input,
      confirmField.emptyMessage
    );
    confirmField.isValid = false;
  } else if (passwordValue !== confirmValue) {
    showError(
      confirmField.error,
      confirmField.input,
      confirmField.invalidMessage
    );
    confirmField.isValid = false;
  } else {
    hideError(confirmField.error, confirmField.input);
    confirmField.isValid = true;
  }
};
