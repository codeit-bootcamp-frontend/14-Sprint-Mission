import React from "react";

function TextArea({
  placeholder,
  value,
  onChange,
  maxLength,
  style,
  rows = 4,
}) {
  const baseStyle = {
    width: "100%",
    minHeight: 120,
    borderRadius: 8,
    border: "none",
    background: "#F4F6FA",
    padding: "12px 16px",
    fontSize: 16,
    resize: "vertical",
  };

  return (
    <textarea
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      maxLength={maxLength}
      rows={rows}
      style={{
        ...baseStyle,
        ...style,
      }}
    />
  );
}

export default TextArea;
