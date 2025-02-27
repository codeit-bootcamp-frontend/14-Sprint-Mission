import { useState } from "react";

export default function PwdInput({
  labelText = "비밀번호",
  name = "password",
  placeholder = "비밀번호를 입력해주세요",
  value = "",
  onChange,
  children,
}) {
  const [isVisible, setIsVisible] = useState(false);

  function onInputChange(e) {
    const newValue = e.target.value;
    onChange(name, newValue);
  }
  return (
    <div className="input-field display-grid justify-stretch">
      <label htmlFor={name} className="text-2lg text-bold">
        {labelText}
      </label>
      <div className="input-wrapper display-flex justify-sides radius-12" id="input-wrapper-pwd">
        <input
          id={name}
          {...{ name, value, placeholder }}
          type={isVisible ? "text" : "password"}
          onClick={(e) => name === "password" && onInputChange(e)}
          onChange={onInputChange}
        />
        <button
          type="button"
          aria-label={`${labelText} 입력 보기`}
          className={`visibility ${isVisible ? "checked" : ""}`}
          onClick={() => setIsVisible(!isVisible)}
        />
      </div>
      {children}
    </div>
  );
}
