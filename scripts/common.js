export function emailCheck() {
  const email = document.getElementById("useremail");
  email.addEventListener("blur", (e) => {
    const emailValue = e.target.value.trim();
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    let emailMessage = document.getElementById("email-message");

    if (emailValue === "") {
      email.style.border = "1px solid #F74747";
      emailMessage.classList.add("error-message");
      emailMessage.style.display = "block";
      emailMessage.textContent = "이메일을 입력해주세요.";
    } else if (emailPattern.test(emailValue)) {
      email.style.border = "1px solid #3692FF";
      emailMessage.style.display = "none";
    } else {
      email.classList.add("error");
      email.style.border = "1px solid #F74747";
      emailMessage.classList.add("error-message");
      emailMessage.style.display = "block";
      emailMessage.textContent = "잘못된 이메일 형식입니다.";
    }
    setLoginButton();
  });
}

export function passwordCheck() {
  const password = document.getElementById("password");

  password.addEventListener("blur", (e) => {
    const passwordValue = e.target.value.trim();
    let passwordMessage = document.getElementById("password-message");

    if (passwordValue.length === 0) {
      password.style.border = "1px solid #F74747";
      passwordMessage.classList.add("error-message");
      passwordMessage.style.display = "block";
      passwordMessage.textContent = "비밀번호를 입력해주세요.";
    } else if (passwordValue.length < 8) {
      password.style.border = "1px solid #F74747";
      passwordMessage.classList.add("error-message");
      passwordMessage.style.display = "block";
      passwordMessage.textContent = "비밀번호를 8자 이상 입력해주세요.";
    } else {
      password.style.border = "1px solid #3692FF";
      passwordMessage.style.display = "none";
    }
    setLoginButton();
  });
}

export function setLoginButton() {
  const loginButton = document.getElementById("active-button");
  const email = document.getElementById("useremail");
  const password = document.getElementById("password");
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (
    email.value.trim() === "" ||
    !emailPattern.test(email.value) ||
    password.value.trim() === "" ||
    password.value.length < 8
  ) {
    loginButton.disabled = true;
  } else {
    loginButton.disabled = false;
  }
}

export function setPasswordView() {
  const eyes = document.getElementById("eyes");
  const password = document.getElementById("password");

  eyes.addEventListener("click", () => {
    if (password.type === "password") {
      password.type = "text";
      eyes.src = "../assets/eyes-on.png";
    } else {
      password.type = "password";
      eyes.src = "../assets/eyes.png";
    }
  });
}

export function nickNameCheck() {
  const nickName = document.getElementById("nickname");

  nickName.addEventListener("blur", (e) => {
    const nickNameMessage = document.getElementById("nickname-message");
    if (nickName.value === "") {
      nickName.style.border = "1px solid #F74747";
      nickNameMessage.classList.add("error-message");
      nickNameMessage.style.display = "block";
    } else {
      nickName.style.border = "1px solid #3692FF";
      nickNameMessage.style.display = "none";
    }
  });
}
