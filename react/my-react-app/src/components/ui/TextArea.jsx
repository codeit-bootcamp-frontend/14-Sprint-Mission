import React from "react";
import styled from "styled-components";

const StyledTextArea = styled.textarea`
  width: 100%;
  min-height: 120px;
  border-radius: 8px;
  border: none;
  background: #f4f6fa;
  padding: 12px 16px;
  font-size: 16px;
  resize: vertical;
  ${(props) =>
    props.style &&
    Object.entries(props.style)
      .map(([key, value]) => `${key}: ${value};`)
      .join(" ")}
`;

function TextArea({
  placeholder,
  value,
  onChange,
  maxLength,
  style,
  rows = 4,
  className,
}) {
  return (
    <StyledTextArea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      rows={rows}
      className={className}
      style={style}
    />
  );
}

export default TextArea;
