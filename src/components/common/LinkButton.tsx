import { MouseEvent, PropsWithChildren } from 'react';
import './LinkButton.css';
import { Link } from 'react-router-dom';

interface LinkButtonValue {
  onClick?: (e: MouseEvent) => void;
  imgSrc?: string;
  imgAlt?: string;
  to: string;
}

function LinkButton({
  children,
  onClick,
  imgSrc,
  imgAlt,
  to,
  ...rest
}: PropsWithChildren<LinkButtonValue>) {
  return (
    <Link to={to} className="LinkButton" onClick={onClick} {...rest}>
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

export default LinkButton;
