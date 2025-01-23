const emailInputField = document.getElementById("email");
const pwdInputField = document.getElementById("pwd");
const visiblilityBtn = document.getElementById("visibility");
const loginBtn = document.getElementById("btn-submit-login");

visiblilityBtn.addEventListener("click", onVisibilityChange);

emailInputField.addEventListener("change", onLoginInputChange);
pwdInputField.addEventListener("change", onLoginInputChange);

/**
 * 비밀번호 입력 보기 버튼 클릭 로직
 * @param {*} e - 클릭 이벤트
 */
function onVisibilityChange(e) {
  if (e.target.classList.value.includes("checked")) {
    visiblilityBtn.classList.remove("checked");
    pwdInputField.setAttribute("type", "password");
  } else {
    visiblilityBtn.classList.add("checked");
    pwdInputField.setAttribute("type", "text");
  }
}

/**
 * 로그인 버튼 활성화 로직
 */
function onLoginInputChange() {
  if (!loginBtn) return;
  const email = emailInputField.value;
  const pwd = pwdInputField.value;

  // TODO: 입력 체크 로직
  if (email && pwd) loginBtn.removeAttribute("disabled");
  else loginBtn.setAttribute("disabled", "true");
}
