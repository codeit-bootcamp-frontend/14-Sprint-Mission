import React, { useRef, useState } from "react";

function PwInput({
  id,
  name,
  label,
  placeholder,
  value,
  error,
  onChange,
  handleValidate,
}) {
  const inputRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const handleBlur = (e) => {
    const { name, value } = e.target;

    handleValidate(name, value);
  };

  const togglePasswordVisible = () => {
    if (inputRef.current) {
      const nextVisible = !visible;
      inputRef.current.type = visible ? "password" : "text";
      setVisible(nextVisible);
    }
  };

  return (
    <div className={`input-box el-txt-input ${error ? "error" : ""}`}>
      <label htmlFor={id}>{label}</label>
      <div className="has-btn">
        <input
          id={id}
          name={name}
          type="password"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
          ref={inputRef}
        />
        <button
          type="button"
          className={`el-btn btn-password ${visible ? "active" : ""}`}
          aria-label="비밀번호 표시"
          onClick={togglePasswordVisible}
        ></button>
      </div>
      {error && <p className="error-txt">{error}</p>}
    </div>
  );
}

export default PwInput;
