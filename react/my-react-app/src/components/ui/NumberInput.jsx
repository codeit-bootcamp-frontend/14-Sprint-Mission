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

  /* Remove spinner buttons */
  &::-webkit-inner-spin-button,
  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  &[type="number"] {
    -moz-appearance: textfield;
  }
`;

function NumberInput({ label, error, onChange, onKeyDown, ...props }) {
  const handleChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    onChange?.({ ...e, target: { ...e.target, value } });
  };

  return (
    <FormField label={label} error={error}>
      <Input 
        type="number" 
        onChange={handleChange} 
        onKeyDown={onKeyDown}
        {...props} 
      />
    </FormField>
  );
}

export default NumberInput;
