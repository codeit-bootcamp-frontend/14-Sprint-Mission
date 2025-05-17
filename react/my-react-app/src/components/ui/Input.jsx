import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 8px;
  border: none;
  background: #f4f6fa;
  padding: 0 16px;
  font-size: 16px;
  ${(props) =>
    props.style &&
    Object.entries(props.style)
      .map(([key, value]) => `${key}: ${value};`)
      .join(" ")}
`;

function Input({
  type = "text",
  placeholder,
  value,
  onChange,
  maxLength,
  min,
  style,
  onKeyDown,
  onBlur,
  className,
}) {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      min={min}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      className={className}
      style={style}
    />
  );
}

export default Input;
