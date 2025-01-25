function toggleInputType(e) {
  const eventCurrentTarget = e.currentTarget;
  const inputElement = eventCurrentTarget.parentElement.firstElementChild;
  const [closeEye, openEye] = eventCurrentTarget.children;

  openEye.classList.toggle("none");
  closeEye.classList.toggle("none");
  inputElement.setAttribute(
    "type",
    inputElement.type === "password" ? "text" : "password"
  );
}

export { toggleInputType };
