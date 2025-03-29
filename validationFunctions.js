export const showError = (element, errorMessage) => {
  const { error, input } = element;
  if (!error || !input) return;
  error.textContent = errorMessage;
  error.style.display = "block";
  input.style.border = "1px solid red";
};

export const hideError = (element) => {
  const { error, input } = element;
  if (!error || !input) return;
  error.style.display = "none";
  input.style.border = "none";
};

export const addErrorEvent = (element) => {
  const { input, error, regex, emptyMessage, invalidMessage } = element;
  input.addEventListener("focusout", () => {
    const value = input.value.trim();
    if (!value) {
      showError(element, emptyMessage);
    } else if (regex && !regex.test(value)) {
      showError(element, invalidMessage);
    } else {
      hideError(element);
    }
  });
};
