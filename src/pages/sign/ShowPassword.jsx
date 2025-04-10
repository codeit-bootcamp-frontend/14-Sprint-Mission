import { useRef } from "react";
import styled from "styled-components";
import EyeOpen from "@/assets/icons/ico_eye-Open.svg";
import EyeClose from "@/assets/icons/ico_eye-close.svg";

const Button = styled.button`
  position: absolute;
  background: none;
  border: none;
  right: 24px;
  left: auto;
  top: 50%;
  transform: translateY(-50%);
  background-image: url(${EyeOpen});
  width: 24px;
  height: 24px;

  &.password-hide {
    background-image: url(${EyeClose});
  }
`;

function ShowPassword({ setShowPw }) {
  const btnRef = useRef(null);

  btnRef.current?.addEventListener("mousedown", (e) => {
    e.target.classList.remove("password-hide");
    setShowPw(true);
  });

  btnRef.current?.addEventListener("mouseup", (e) => {
    e.target.classList.add("password-hide");
    setShowPw(false);
  });

  btnRef.current?.addEventListener("mouseleave", (e) => {
    e.target.classList.add("password-hide");
    setShowPw(false);
  });

  return (
    <Button
      className="show-password password-hide"
      type="button"
      ref={btnRef}
    ></Button>
  );
}

export default ShowPassword;
