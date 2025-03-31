import './Button.css';
import { MouseEvent, ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
}

function Button({ children, onClick, disabled, ...rest }: ButtonProps) {
  return (
    <button className="button" onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}

export default Button;
