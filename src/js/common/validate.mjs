function addErrorMessage(el, message) {
  const target = el.parentElement.parentElement;
  const pElement = document.createElement("p");
  pElement.classList.add("error-message");
  pElement.textContent = message;
  target.append(pElement);
}

function onInputError(el, { message }) {
  const parentElement = el.parentElement;
  parentElement.classList.add("red-border");
  parentElement.classList.remove("gray-border");

  const hasError =
    parentElement.parentElement.lastElementChild.classList.contains(
      "error-message"
    );

  if (!hasError) {
    addErrorMessage(el, message);
  }
}

function offInputError(el) {
  el.parentElement.classList.add("gray-border");
  el.parentElement.classList.remove("red-border");
}

function checkValidation({ el, isValidate, message }) {
  if (isValidate === true) {
    offInputError(el);
  } else {
    onInputError(el, { message });
  }
}

function validate(e, { targetEl, message, validator }) {
  const el = e?.target ? e.target : e;
  const value1 = el.value;
  const value2 = targetEl?.value;
  const isValidate = validator(value1, value2);

  checkValidation({ el, isValidate, message });
}

function resetErrorMessage(e) {
  const errorCandidateElement =
    e.target.parentElement.parentElement.lastElementChild;
  const hasError = errorCandidateElement.classList.contains("error-message");

  if (hasError) {
    errorCandidateElement.remove();
  }
}

function changeButtonStatus(el, { checkEmptyInputElements }) {
  const isEmpty = checkEmptyInputElements.some(
    (inputElement) => inputElement.value === ""
  );
  const isError = document.querySelectorAll(".error-message").length > 0;

  el.disabled = isEmpty || isError;
}

export { resetErrorMessage, validate, changeButtonStatus };
