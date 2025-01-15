// 비밀번호 확인 버튼 클릭 로직
document.getElementById("visibility").addEventListener("change", onVisibilityChange);
function onVisibilityChange(e) {
  const value = e.target.checked;
  if (value) document.getElementById("pwd").setAttribute("type", "text");
  else document.getElementById("pwd").setAttribute("type", "password");
}
document.getElementById("visibility-again").addEventListener("change", onVisibilityAgainChange);
function onVisibilityAgainChange(e) {
  const value = e.target.checked;
  if (value) document.getElementById("pwd-check").setAttribute("type", "text");
  else document.getElementById("pwd-check").setAttribute("type", "password");
}
// 로그인 버튼 활성화 로직
document.getElementById("email").addEventListener("change", onchange);
document.getElementById("nickname").addEventListener("change", onchange);
document.getElementById("pwd").addEventListener("change", onchange);
document.getElementById("pwd-check").addEventListener("change", onchange);
function onchange() {
  const email = document.getElementById("email").value;
  const nickname = document.getElementById("nickname").value;
  const pwd = document.getElementById("pwd").value;
  const pwdCheck = document.getElementById("pwd-check").value;
  if (email && nickname && pwd && pwd === pwdCheck)
    document.getElementById("btn-submit").removeAttribute("disabled");
  else document.getElementById("btn-submit").setAttribute("disabled", "true");
}
