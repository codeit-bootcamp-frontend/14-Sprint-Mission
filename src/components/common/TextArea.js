import './TextArea.css';

function TextArea({ label, id, value, type, onChange, placeholder }) {
  return (
    <div className="textAreaContainer">
      <label>{label}</label>
      <textarea id={id} value={value} type={type} placeholder={placeholder} />
    </div>
  );
}

export default TextArea;
