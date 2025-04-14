import React from "react";

const FormInput = ({
  id,
  type = "text",
  label,
  placeholder,
  onBlur,
  error,
  hidden = false,
  className = "",
  rightIcon,
  accept,
  ref,
  ...rest
}) => {
  return (
    <div className={`${hidden ? "hidden" : "mb-[24px]"}`}>
      {label && !hidden && (
        <label htmlFor={id} className="label-primary block mb-2">
          {label}
        </label>
      )}
      <div className="relative">
        {type === "textarea" ? (
          <textarea
            id={id}
            ref={ref}
            type={type}
            placeholder={placeholder}
            onBlur={onBlur}
            accept={accept}
            {...rest}
            className={`input-primary resize-none px-4 py-3 h-[282px] ${
              error ? "border border-red-500 mb-[8px]" : ""
            } ${className}`}
          />
        ) : (
          <input
            id={id}
            ref={ref}
            type={type}
            placeholder={placeholder}
            onBlur={onBlur}
            accept={accept}
            {...rest}
            className={`input-primary tablet:h-[64px] pc:h-[72px] ${
              error ? "border border-red-500 mb-[8px]" : ""
            } ${className}`}
          />
        )}
        {rightIcon && (
          <div className="absolute top-[16px] right-[24px] tablet:top-[20px] pc:top-[24px]">
            {rightIcon}
          </div>
        )}
      </div>
      {error && !hidden && (
        <p className="text-red-500 text-sm mt-[4px] ml-[16px]">{error}</p>
      )}
    </div>
  );
};

export default FormInput;
