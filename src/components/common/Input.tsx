import { ChangeEvent, FocusEventHandler, Ref } from 'react';
import './Input.css';

interface InputProps {
  label: string;
  id: string;
  value: string;
  type: string;
  placeholder?: string;
  ref?: Ref<HTMLInputElement>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
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
