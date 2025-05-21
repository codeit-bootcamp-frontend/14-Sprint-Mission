import React from "react";
import styled from "styled-components";
import FormField from "./FormField";

const StyledTextArea = styled.textarea`
  width: 100%;
  height: 282px;
  border-radius: 8px;
  border: 1px solid #e5e8ec;
  background-color: #f4f6fa;
  padding: 16px;
  font-size: 16px;
  resize: none;
  box-sizing: border-box;

  &:focus {
    border-color: #007aff;
  }

  &::placeholder {
    color: #666;
    opacity: 1;
  }
`;

function TextArea({ label, error, ...props }) {
  return (
    <FormField label={label} error={error}>
      <StyledTextArea {...props} />
    </FormField>
  );
}

export default TextArea;
