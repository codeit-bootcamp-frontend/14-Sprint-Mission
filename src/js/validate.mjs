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

function validate(e, { targetEl, message, callback }) {
  const el = e?.target ? e.target : e;
  const value1 = el.value;
  const value2 = targetEl?.value;
  const isValidate = callback(value1, value2);

  toggleRedBorder({ el, isValidate, message });
}

function checkButton(el, { checkEmptyInputs }) {
  const isEmpty = checkEmptyInputs.some((inputEl) => inputEl.value === "");
  const isError = !!document.querySelectorAll(".error-message").length;

  el.disabled = isEmpty || isError;
}

export { resetErrorMessage, validate, checkButton };
