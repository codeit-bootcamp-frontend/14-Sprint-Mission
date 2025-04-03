export const togglePassword = (e) => {
  const toggleButtonImg = e.currentTarget.firstElementChild;
  const passwordInput = e.currentTarget.previousElementSibling;

  if (passwordInput) {
    passwordInput.type =
      passwordInput.type === "password" ? "text" : "password";
    toggleButtonImg.src = toggleButtonImg.src.endsWith("btn_visibility_off.svg")
      ? "./images/auth/btn_visibility_on.svg"
      : "./images/auth/btn_visibility_off.svg";
  }
};

export const setupPasswordToggle = () => {
  document.querySelectorAll(".form__password-toggle").forEach((button) => {
    button.addEventListener("mousedown", (e) => {
      e.preventDefault();
      togglePassword(e);
    });
  });
};
