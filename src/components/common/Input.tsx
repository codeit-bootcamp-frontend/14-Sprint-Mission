import { ChangeEvent } from 'react';
import './Input.css';

interface InputProps {
  label: string;
  id: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function Input({ label, id, value, onChange, ...rest }: InputProps) {
  return (
    <div className="inputContainer">
      <label>{label}</label>
      <input id={id} value={value} {...rest} />
    </div>
  );
}

export default Input;
