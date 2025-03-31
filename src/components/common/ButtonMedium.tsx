import './ButtonMedium.css';
import { MouseEvent, ReactNode } from 'react';

interface ButtonMediumProps {
  children: ReactNode;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  imgSrc: string;
  imgAlt: string;
}

function ButtonMedium({
  children,
  onClick,
  imgSrc,
  imgAlt,
  ...rest
}: ButtonMediumProps) {
  return (
    <div className="ButtonMediumContainer">
      <button className="ButtonMedium" onClick={onClick}>
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
      </button>
    </div>
  );
}

export default ButtonMedium;
