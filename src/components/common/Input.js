import './Input.css';

function Input({ label, id, value, type, onChange, placeholder }) {
  return (
    <div className="inputContainer">
      <label>{label}</label>
      <input id={id} value={value} type={type} placeholder={placeholder} />
    </div>
  );
}

export default Input;
