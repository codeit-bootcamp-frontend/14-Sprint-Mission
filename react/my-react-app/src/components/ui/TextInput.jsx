import React from "react";
import styled from "styled-components";
import FormField from "./FormField";

const Input = styled.input`
  width: 100%;
  height: 56px;
  border-radius: 8px;
  border: 1px solid #e5e8ec;
  background-color: #f4f6fa;
  padding: 0 16px;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    border-color: #007aff;
  }

  &::placeholder {
    color: #999;
  }
`;

function TextInput({ label, error, ...props }) {
  return (
    <FormField label={label} error={error}>
      <Input type="text" {...props} />
    </FormField>
  );
}

export default TextInput;
