import { MouseEvent, ReactNode } from 'react';
import './ButtonLarge.css';
import { Link } from 'react-router-dom';

interface ButtonLargeValue {
  children: ReactNode;
  onClick?: (e: MouseEvent) => void;
  imgSrc?: string;
  imgAlt?: string;
  to: string;
}

function ButtonLarge({
  children,
  onClick,
  imgSrc,
  imgAlt,
  to,
  ...rest
}: ButtonLargeValue) {
  return (
    <Link to={to} className="ButtonLarge" onClick={onClick} {...rest}>
      {children}
      {imgSrc && (
        <img
          className="buttonIcon"
          src={imgSrc}
          alt={imgAlt}
          width={24}
          height={24}
        />
      )}
    </Link>
  );
}

export default ButtonLarge;
