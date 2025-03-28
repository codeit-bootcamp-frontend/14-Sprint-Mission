import './ButtonLarge.css';

function ButtonLarge({ children, onClick, imgSrc, imgAlt, ...rest }) {
  return (
    <button className="ButtonLarge" onClick={onClick} {...rest}>
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
  );
}

export default ButtonLarge;
