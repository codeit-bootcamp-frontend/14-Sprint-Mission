import React from "react";

function TextInput({
  id,
  name,
  label,
  type,
  placeholder,
  value,
  error,
  onChange,
  handleValidate,
}) {
  const handleBlur = (e) => {
    const { name, value } = e.target;

    handleValidate(name, value);
  };
  return (
    <div className={`input-box el-txt-input ${error ? "error" : ""}`}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
      />
      {error && <p className="error-txt">{error}</p>}
    </div>
  );
}

export default TextInput;
