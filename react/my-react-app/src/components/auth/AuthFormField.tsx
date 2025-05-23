import React, { ChangeEvent, FocusEvent } from "react";

interface AuthFormFieldProps {
  id: string;
  label: string;
  name: string;
  type: "email" | "text" | "password";
  placeholder: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void; // onBlur는 선택적
  error?: string; // 에러 메시지도 선택적
  showPasswordToggle?: boolean; // 비밀번호 표시/숨김 토글 여부
  showPassword?: boolean; // 현재 비밀번호 표시 상태
  onToggleShowPassword?: () => void; // 토글 함수
}

const AuthFormField: React.FC<AuthFormFieldProps> = ({
  id,
  label,
  name,
  type,
  placeholder,
  value,
  onChange,
  onBlur,
  error,
  showPasswordToggle = false,
  showPassword = false,
  onToggleShowPassword,
}) => {
  return (
    <div className={`input-item ${error ? "input-error-active" : ""}`}>
      <label htmlFor={id}>{label}</label>
      <div className="input-wrapper">
        {" "}
        {/* 비밀번호 토글 아이콘을 위해 wrapper 추가 */}
        <input
          id={id}
          name={name}
          type={
            showPasswordToggle && type === "password" && showPassword
              ? "text"
              : type
          }
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          className={error ? "input-error" : ""}
        />
        {showPasswordToggle && type === "password" && onToggleShowPassword && (
          <img
            src={
              showPassword
                ? "/images/icons/eye-visible.svg"
                : "/images/icons/eye-invisible.svg"
            }
            alt={showPassword ? "비밀번호 보임" : "비밀번호 숨김"}
            className="toggle-password"
            onClick={onToggleShowPassword}
          />
        )}
      </div>
      {error && <p className={`error-message ${name}-error`}>{error}</p>}
    </div>
  );
};

export default AuthFormField;
