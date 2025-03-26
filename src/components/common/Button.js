import './Button.css';

function Button({ children, onClick, disabled, ...rest }) {
  return (
    <button className="button" onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}

export default Button;
