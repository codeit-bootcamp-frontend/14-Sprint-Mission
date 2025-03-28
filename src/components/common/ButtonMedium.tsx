import './ButtonMedium.css';

function ButtonMedium({ children, onClick, imgSrc, imgAlt, ...rest }) {
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
