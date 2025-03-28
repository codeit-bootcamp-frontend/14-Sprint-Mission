import './TextArea.css';

function TextArea({ label, id, value, type, onChange, placeholder }) {
  return (
    <div className="TextAreaContainer">
      <label>{label}</label>
      <textarea
        id={id}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default TextArea;
