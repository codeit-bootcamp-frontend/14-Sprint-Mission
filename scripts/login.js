// 비밀번호 확인 버튼 클릭 로직
document.getElementById("visibility").addEventListener("change", onVisibilityChange);
function onVisibilityChange(e) {
  const value = e.target.checked;
  if (value) document.getElementById("pwd").setAttribute("type", "text");
  else document.getElementById("pwd").setAttribute("type", "password");
}
// 로그인 버튼 활성화 로직
document.getElementById("email").addEventListener("change", onchange);
document.getElementById("pwd").addEventListener("change", onchange);
function onchange() {
  const email = document.getElementById("email").value;
  const pwd = document.getElementById("pwd").value;
  if (email && pwd) document.getElementById("btn-submit").removeAttribute("disabled");
  else document.getElementById("btn-submit").setAttribute("disabled", "true");
}
