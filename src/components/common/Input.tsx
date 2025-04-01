import { ChangeEvent, Ref, RefAttributes } from 'react';
import './Input.css';

interface InputProps {
  label: string;
  id: string;
  value: string;
  type: string;
  placeholder?: string;
  ref?: Ref<HTMLInputElement>;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ label, id, value, onChange, ...rest }: InputProps) {
  return (
    <div className="inputContainer">
      <label>{label}</label>
      <input id={id} value={value} onChange={onChange} {...rest} />
    </div>
  );
}

export default Input;
