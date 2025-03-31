import { ChangeEvent } from 'react';
import './TextArea.css';

interface TextAreaProps {
  label?: string;
  id?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  placeholder?: string;
}

function TextArea({ label, id, value, onChange, placeholder }: TextAreaProps) {
  return (
    <div className="TextAreaContainer">
      <label>{label}</label>
      <textarea
        id={id}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default TextArea;
