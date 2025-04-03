const showError = (errorElement, inputElement, errorMessage) => {
  if (!errorElement || !inputElement) return;
  errorElement.textContent = errorMessage;
  errorElement.style.display = "block";
  inputElement.style.border = "1px solid red";
};

const hideError = (errorElement, inputElement) => {
  if (!errorElement || !inputElement) return;
  errorElement.style.display = "none";
  inputElement.style.border = "none";
};

export const validateField = (field) => {
  const { input, error, regex, emptyMessage, invalidMessage } = field;
  const value = input.value.trim();

  if (!value) {
    showError(error, input, emptyMessage);
    field.isValid = false;
  } else if (regex && !regex.test(value)) {
    showError(error, input, invalidMessage);
    field.isValid = false;
  } else {
    hideError(error, input);
    field.isValid = true;
  }
  console.log(field.isValid);
};

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
