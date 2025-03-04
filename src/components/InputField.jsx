import "./input.scss";

export default function InputField({
  labelText,
  name,
  type = "text",
  placeholder = "내용을 입력해주세요",
  value = "",
  onChange,
  children,
  ...props
}) {
  function onInputChange(e) {
    const newValue = e.target.value;
    onChange(name, newValue);
  }
  return (
    <div className="input-field display-grid justify-stretch">
      {labelText?.length > 0 && (
        <label htmlFor={name} className="text-2lg text-bold">
          {labelText}
        </label>
      )}
      <div className="input-wrapper display-flex justify-left radius-12">
        <input
          id={name}
          {...{ name, type, value, placeholder }}
          onClick={onInputChange}
          onChange={onInputChange}
          {...props}
        />
      </div>
      {children}
    </div>
  );
}
