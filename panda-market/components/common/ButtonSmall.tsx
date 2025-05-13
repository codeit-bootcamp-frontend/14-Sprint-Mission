import { ButtonHTMLAttributes, MouseEvent, PropsWithChildren } from 'react';

interface ButtonSmallProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}

function ButtonSmall({
  children,
  onClick,
  disabled,
  ...props
}: PropsWithChildren<ButtonSmallProps>) {
  return (
    <button
      className="flex items-center justify-center w-88 h-42 rounded-lg px-23 py-12 bg-blue text-white text-16 font-700 disabled:bg-gray-400"
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}

export default ButtonSmall;
