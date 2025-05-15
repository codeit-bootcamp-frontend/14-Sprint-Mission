import { InputHTMLAttributes, forwardRef } from 'react';
import './Input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, id, value, onChange, onBlur, error, ...rest }, ref) => {
    return (
      <div className="inputContainer">
        <label htmlFor={id}>{label}</label>
        <input
          id={id}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          ref={ref}
          {...rest}
        />
        {error && <p className="error-message">{error}</p>}
      </div>
    );
  }
);

export default Input;
