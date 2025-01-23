/**
 * 비밀번호 입력 보기 버튼 클릭 로직
 * @param {*} e - 클릭 이벤트
 */
export function onVisibilityChange(e) {
  if (e.target.localName !== "button") return;
  const button = e.target;
  const input = document.getElementById(button.id).previousElementSibling;
  if (input.type === "password") {
    button.classList.add("checked");
    input.setAttribute("type", "text");
  } else {
    button.classList.remove("checked");
    input.setAttribute("type", "password");
  }
}

/**
 * 포커스 아웃 시 입력값 체크 이벤트
 * @param {*} e
 * @returns
 */
export function onInputFocusOut(e) {
  if (e.target.localName !== "input") return;
  const input = e.target;
  if (!checkValidation(input)) input.classList.add("error");
  else input.classList.remove("error");
}

/**
 * 입력값 유효성 검사
 * @param {*} input
 * @returns
 */
function checkValidation(input) {
  const { id: type, value } = input;
  let result = false,
    className = "",
    errorMsg = "";

  switch (type) {
    case "email":
      // TODO: RegExp 사용으로 변경
      result = input.validity.valid;
      className = "error-email";
      if (!result)
        errorMsg = value.length === 0 ? "이메일을 입력해주세요." : "잘못된 이메일 형식입니다";
      break;
    case "nickname":
      result = value.length > 0;
      className = "error-nickname";
      if (!result) errorMsg = "닉네임을 입력해주세요.";
      break;
    case "pwd":
      result = value.length >= 8;
      className = "error-pwd";
      if (!result)
        errorMsg =
          value.length === 0 ? "비밀번호를 입력해주세요." : "비밀번호를 8자 이상 입력해주세요";
      break;
    case "pwd-check":
      result = value === document.getElementById("pwd").value;
      className = "error-pwd-check";
      if (!result) errorMsg = "비밀번호가 일치하지 않습니다.";
      break;
    default:
      return;
  }

  const inputField = input.parentElement?.parentElement;
  const errorParagraph = document.getElementsByClassName(className)[0];

  if (result) errorParagraph && inputField?.removeChild(errorParagraph);
  else if (errorParagraph) errorParagraph.textContent = errorMsg;
  else {
    const newErrorParagraph = document.createElement("p");
    newErrorParagraph.classList.add("text-error", "text-md", "text-semibold", className);
    newErrorParagraph.textContent = errorMsg;
    inputField?.append(newErrorParagraph);
  }
  return result;
}
