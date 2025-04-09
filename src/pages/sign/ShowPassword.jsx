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
  top: 64%;
  transform: translateY(-65%);
  background-image: url(${EyeOpen});
  width: 24px;
  height: 24px;

  &.password-hide {
    background-image: url(${EyeClose});
  }
`;

function ShowPassword() {
  const btnRef = useRef(null);

  btnRef.current?.addEventListener("mousedown", (e) => {
    const sibling = e.target.previousElementSibling;
    e.target.classList.remove("password-hide");
    sibling.type = "text";
  });

  btnRef.current?.addEventListener("mouseup", (e) => {
    const sibling = e.target.previousElementSibling;
    e.target.classList.add("password-hide");
    sibling.type = "password";
  });

  btnRef.current?.addEventListener("mouseleave", (e) => {
    const sibling = e.target.previousElementSibling;
    e.target.classList.add("password-hide");
    sibling.type = "password";
  });

  return (
    <Button
      class="show-password password-hide"
      type="button"
      ref={btnRef}
    ></Button>
  );
}

export default ShowPassword;
