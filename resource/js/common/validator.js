export function emailValidate(email) {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) return "이메일을 입력해주세요.";
  if (!emailPattern.test(email)) return "잘못된 이메일 형식입니다.";

  return false;
}

export function nickNameValidate(nickName) {
  if (!nickName) return "닉네임을 입력해주세요.";

  return false;
}

export function passwordValidate(password, minLength = 8) {
  if (!password || password.length === 0) {
    return `비밀번호를 입력해주세요.`;
  } else if (password.length < minLength)
    return `비밀번호를 ${minLength}자 이상 입력해주세요.`;

  return false;
}

export function passwordChkValidate(password, passwordChk) {
  if (password !== passwordChk) return "비밀번호가 일치하지 않습니다.";

  return false;
}

export function uiUpdate(target, errMsg) {
  const $inputBox = target.closest(".input-box");

  const $errorTxt = $inputBox.lastElementChild;

  if (errMsg) {
    $inputBox.classList.add("error");
    $errorTxt.textContent = errMsg;
  } else {
    $inputBox.classList.remove("error");
    $errorTxt.textContent = "";
  }
}
