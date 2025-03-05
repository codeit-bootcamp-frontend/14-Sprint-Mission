import { useState } from "react";
import "./input.scss";

export default function InputField({
  labelText,
  name,
  type = "text",
  placeholder = "내용을 입력해주세요",
  value = "",
  onChange,
  errMsg,
  children,
  ...props
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
      <div className="input-wrapper display-flex justify-left radius-12">
        {type === "textarea" ? (
          <textarea
            id={name}
            onChange={onInputChange}
            {...{ name, value, placeholder, ...props }}
          />
        ) : (
          <>
            <input
              id={name}
              type={isVisible ? "text" : type}
              onChange={onInputChange}
              {...{ name, value, placeholder, ...props }}
            />
            {type === "password" && (
              <button
                type="button"
                onClick={() => setIsVisible(!isVisible)}
                className={`visibility ${isVisible ? "checked" : ""}`}
                aria-label={`${labelText} 입력 보기`}
              />
            )}
          </>
        )}
      </div>
      <p className={`${errMsg?.length > 0 ? "text-error " : ""}text-md text-semibold`}>{errMsg}</p>
      {children}
    </div>
  );
}
