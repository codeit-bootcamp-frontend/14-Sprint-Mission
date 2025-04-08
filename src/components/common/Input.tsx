import {
  ChangeEvent,
  FocusEventHandler,
  InputHTMLAttributes,
  Ref,
} from 'react';
import './Input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  ref?: Ref<HTMLInputElement>;
  onBlur?: FocusEventHandler<HTMLInputElement>;
}

function Input({ label, id, value, onChange, onBlur, ...rest }: InputProps) {
  return (
    <div className="inputContainer">
      <label>{label}</label>
      <input
        id={id}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        {...rest}
      />
    </div>
  );
}

export default Input;
