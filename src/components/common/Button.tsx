import './Button.css';
import { ButtonHTMLAttributes, MouseEvent, PropsWithChildren } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

function Button({
  children,
  onClick,
  disabled,
  ...rest
}: PropsWithChildren<ButtonProps>) {
  return (
    <button className="button" onClick={onClick} disabled={disabled} {...rest}>
      {children}
    </button>
  );
}

export default Button;
