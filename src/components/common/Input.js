import './Input.css';

function Input({ label, id, value, onChange, ...rest }) {
  return (
    <div className="inputContainer">
      <label>{label}</label>
      <input id={id} value={value} {...rest} />
    </div>
  );
}

export default Input;
