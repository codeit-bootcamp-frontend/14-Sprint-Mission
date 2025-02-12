import {
  emailCheck,
  passwordCheck,
  setPasswordView,
  nickNameCheck,
} from "./common.js";

emailCheck();
passwordCheck();
setPasswordView();
nickNameCheck();

const againPasswordCheck = document.getElementById("password-check");

againPasswordCheck.addEventListener("blur", (e) => {
  const password = document.getElementById("password");
  const againPasswordMessage = document.getElementById(
    "password-again-message"
  );
  if (againPasswordCheck.value.trim() !== password.value.trim()) {
    againPasswordCheck.style.border = "1px solid #F74747";
    againPasswordMessage.classList.add("error-message");
    againPasswordMessage.style.display = "block";
  } else {
    againPasswordCheck.style.border = "1px solid #3692FF";
    againPasswordMessage.style.display = "none";
  }
});
{
  const loginButton = document.getElementById("active-button");
  const email = document.getElementById("useremail");
  const password = document.getElementById("password");
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  const checkTwoPassword = () => {
    if (
      email.value.trim() === "" ||
      !emailPattern.test(email.value) ||
      password.value.trim() === "" ||
      password.value.length < 8 ||
      againPasswordCheck.value.trim() !== password.value.trim()
    ) {
      loginButton.disabled = true;
    } else {
      loginButton.disabled = false;
    }
  };
  againPasswordCheck.addEventListener("input", checkTwoPassword);
}

const eyes = document.getElementById("second-eyes");
const password = document.getElementById("password-check");

eyes.addEventListener("click", () => {
  if (password.type === "password") {
    password.type = "text";
    eyes.src = "../assets/eyes-on.png";
  } else {
    password.type = "password";
    eyes.src = "../assets/eyes.png";
  }
});
