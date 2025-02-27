export default function TextInput({
  labelText = "이메일",
  name = "email",
  type = "email",
  placeholder = "이메일을 입력해주세요",
  value = "",
  onChange,
  children,
}) {
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
        <input
          id={name}
          {...{ name, type, value, placeholder }}
          onClick={onInputChange}
          onChange={onInputChange}
        />
      </div>
      {children}
    </div>
  );
}
