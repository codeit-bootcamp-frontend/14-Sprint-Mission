import React from "react";

function PwInput({ id, label, placeholder, error }) {
  return (
    <div className="input-box el-txt-input">
      <label htmlFor={id}>{label}</label>
      <div className="has-btn">
        <input id={id} type="password" placeholder={placeholder} />
        <button
          type="button"
          className="el-btn btn-password"
          aria-label="비밀번호 표시"
        ></button>
      </div>
      {error && <p className="error-txt">{error}</p>}
    </div>
  );
}

export default PwInput;
