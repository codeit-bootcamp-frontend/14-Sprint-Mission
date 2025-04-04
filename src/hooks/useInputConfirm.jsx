import { useState } from "react";

function useInputConfirm() {
  const [msg, setMsg] = useState("");

  function onBlur(e) {
    const regEmail =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

    setMsg("");

    if (e.target.id === "email") {
      if (!e.target.value) {
        setMsg("이메일을 입력해주세요");
      } else if (!regEmail.test(e.target.value)) {
        setMsg("잘못된 이메일 형식입니다");
      }
    }

    if (e.target.id === "nickname") {
      if (!e.target.value) {
        setMsg("닉네임을 입력해주세요");
      }
    }

    if (e.target.id === "password") {
      if (!e.target.value) {
        setMsg("비밀번호를 입력해주세요");
      } else if (e.target.value.length < 8) {
        setMsg("비밀번호를 8자 이상 입력해주세요");
      }
    }

    if (e.target.id === "confirm-password") {
      if (e.target.value !== e.target.pw) {
        setMsg("비밀번호가 일치하지 않습니다");
      }
    }
  }

  return { onBlur, msg };
}

export default useInputConfirm;
