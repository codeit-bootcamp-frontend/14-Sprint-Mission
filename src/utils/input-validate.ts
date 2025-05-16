import { inputType } from "@/components/input";

const inputValidate = (
  type: inputType,
  inputValue: string,
  regex?: RegExp
): boolean => {
  // 빈 입력 값은 false 처리
  if (!inputValue) return false;

  switch (type) {
    case "email":
      // regex가 주어지면 해당 regex를 사용, 없으면 기본 이메일 형식 검증
      return regex
        ? regex.test(inputValue)
        : /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(inputValue);

    case "password":
      // 예시: 비밀번호는 최소 6자리 이상
      return inputValue.length >= 8;

    default:
      // type에 따른 특수 검증이 없다면, regex가 있으면 검증, 없으면 true 반환
      return regex ? regex.test(inputValue) : true;
  }
};

export default inputValidate;
