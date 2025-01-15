const emailInputField = document.getElementById("email");
const nicknameInputField = document.getElementById("nickname");

const pwdInputField = document.getElementById("pwd");
const visiblilityBtn = document.getElementById("visibility");

const pwdCheckInputField = document.getElementById("pwd-check");
const visiblilityAgainBtn = document.getElementById("visibility-again");

const signupBtn = document.getElementById("btn-submit-signup");

// 비밀번호 입력 보기 버튼 클릭 로직
visiblilityBtn.addEventListener("click", onVisibilityChange);

function onVisibilityChange(e) {
  if (e.target.classList.value.includes("checked")) {
    visiblilityBtn.classList.remove("checked");
    pwdInputField.setAttribute("type", "password");
  } else {
    visiblilityBtn.classList.add("checked");
    pwdInputField.setAttribute("type", "text");
  }
}
// 비밀번호 확인 입력 버튼 클릭 로직
visiblilityAgainBtn.addEventListener("click", onVisibilityAgainChange);

function onVisibilityAgainChange(e) {
  if (e.target.classList.value.includes("checked")) {
    visiblilityAgainBtn.classList.remove("checked");
    pwdCheckInputField.setAttribute("type", "password");
  } else {
    visiblilityAgainBtn.classList.add("checked");
    pwdCheckInputField.setAttribute("type", "text");
  }
}
// 회원가입 버튼 활성화 로직
emailInputField.addEventListener("change", onSignupInputChange);
nicknameInputField.addEventListener("change", onSignupInputChange);
pwdInputField.addEventListener("change", onSignupInputChange);
pwdCheckInputField.addEventListener("change", onSignupInputChange);

function onSignupInputChange() {
  const email = emailInputField.value;
  const nickname = nicknameInputField.value;
  const pwd = pwdInputField.value;
  const pwdCheck = pwdCheckInputField.value;

  // TODO: 입력 체크 로직
  if (email && nickname && pwd && pwd === pwdCheck) signupBtn.removeAttribute("disabled");
  else signupBtn.setAttribute("disabled", "true");
}
