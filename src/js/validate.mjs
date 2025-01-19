const MINIMUM_PASSWORD_LENGTH = 8;
const EMAIL_REG_EXP =
  /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

function addErrorMessage(el, message) {
  const target = el.parentElement.parentElement;
  const $p = document.createElement("p");
  $p.classList.add("error-message");
  $p.textContent = message;
  target.append($p);
}

function removeErrorMessage(e) {
  e.target.parentElement.parentElement.lastElementChild.remove();
}

function addRedBorder(el, { message }) {
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

function removeRedBorder(el) {
  el.parentElement.classList.add("gray-border");
  el.parentElement.classList.remove("red-border");
}

function toggleRedBorder({ el, isValidate, message }) {
  if (isValidate === false) {
    addRedBorder(el, { message });
    return;
  }

  removeRedBorder(el);
}

function resetErrorMessage(e) {
  const parentElement = e.target.parentElement.parentElement;
  const hasError =
    parentElement.lastElementChild.classList.contains("error-message");

  if (hasError) {
    removeErrorMessage(e);
  }
}

function validate(e, { message, validate }) {
  const el = e.target;
  const value = e.target.value;
  const isValidate = validate(value);

  toggleRedBorder({ el, isValidate, message });
}

function checkButton(el, { checkEmptyInputs }) {
  const isEmpty = checkEmptyInputs.some((inputEl) => inputEl.value === "");
  const isError = !!document.querySelectorAll(".error-message").length;

  el.disabled = isEmpty || isError;
}

export { resetErrorMessage, validate, checkButton };
