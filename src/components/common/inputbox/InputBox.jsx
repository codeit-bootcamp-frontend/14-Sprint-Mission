import "./inputBox.css";

export default function InputBox({
  title,
  placeholder,
  value,
  name,
  onChange,
  onKeyDown,
  isInput = true,
  height,
}) {
  return (
    <div className="input-wrapper">
      <label>{title}</label>
      {isInput ? (
        <input
          type="text"
          name={name ? name : null}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onKeyDown={onKeyDown ? onKeyDown : null}
          style={height ? { height } : undefined}
        />
      ) : (
        <textarea
          name={name ? name : null}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      )}
    </div>
  );
}
