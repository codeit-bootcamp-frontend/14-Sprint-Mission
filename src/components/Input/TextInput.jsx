import React, { useRef, useState } from "react";

function TextInput({
  id,
  name,
  label,
  type,
  placeholder,
  value,
  visibleBtn = false,
  error,
  onChange,
  onBlur,
  onSearch,
}) {
  const inputRef = useRef(null);
  const [visible, setVisible] = useState(false);

  const togglePasswordVisible = () => {
    if (inputRef.current) {
      const nextVisible = !visible;
      inputRef.current.type = visible ? "password" : "text";
      setVisible(nextVisible);
    }
  };

  return (
    <div
      className={`input-box el-txt-input ${error ? "error" : ""} ${
        type === "search" ? "search" : ""
      }`}
    >
      {label && <label htmlFor={id}>{label}</label>}
      <div className="el-input">
        {type === "search" && (
          <button
            type="submit"
            className="el-btn btn-search"
            aria-label="검색"
            onClick={onSearch}
          ></button>
        )}
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          ref={inputRef}
        />
        {visibleBtn && (
          <button
            type="button"
            className={`el-btn btn-password ${visible ? "active" : ""}`}
            aria-label="비밀번호 표시"
            onClick={togglePasswordVisible}
          ></button>
        )}
      </div>

      {error && <p className="error-txt">{error}</p>}
    </div>
  );
}

export default TextInput;
