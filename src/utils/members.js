export function checkValidation(type, value = "") {
  switch (type) {
    case "email":
      if (value.length === 0) return "이메일을 입력해주세요.";
      else if (!/\w{1,20}@\w{1,20}(\.\w{2,3})+$/.test(value)) return "잘못된 이메일 형식입니다";
      break;
    case "nickname":
      if (value.length === 0) return "닉네임을 입력해주세요.";
      break;
    case "pwd":
      if (value.length === 0) return "비밀번호를 입력해주세요.";
      else if (value.length < 8) return "비밀번호를 8자 이상 입력해주세요";
      break;
    case "pwd-check":
      return "비밀번호가 일치하지 않습니다.";
    default:
      break;
  }
  return "";
}
