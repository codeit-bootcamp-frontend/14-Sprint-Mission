import "./InputGroup.css";

function InputGroup({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  isTextarea = false,
}) {
  return (
    <div className="formGroup">
      <label className="label">{label}</label>
      {isTextarea ? (
        <textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="textarea"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="input"
        />
      )}
    </div>
  );
}

export default InputGroup;
