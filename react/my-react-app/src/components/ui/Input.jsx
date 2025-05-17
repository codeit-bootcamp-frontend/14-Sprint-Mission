import React from "react";

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
}) {
  const baseStyle = {
    width: "100%",
    height: 40,
    borderRadius: 8,
    border: "none",
    background: "#F4F6FA",
    padding: "0 16px",
    fontSize: 16,
  };

  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      min={min}
      onKeyDown={onKeyDown}
      onBlur={onBlur}
      style={{
        ...baseStyle,
        ...style,
      }}
    />
  );
}

export default Input;
