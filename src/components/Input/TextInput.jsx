import React from "react";

function TextInput({ id, label, type, placeholder, error }) {
  return (
    <div className="input-box el-txt-input">
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} />
      {error && <p className="error-txt">{error}</p>}
    </div>
  );
}

export default TextInput;
