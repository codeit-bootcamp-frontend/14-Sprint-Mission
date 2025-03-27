import './ReturnButton.css';
import returnIcon from '../../assets/icons/return.svg';

function ReturnButton({ children, onClick, ...rest }) {
  return (
    <div className="returnContainer">
      <button className="returnButton" onClick={onClick}>
        {children}
        <img
          className="returnIcon"
          src={returnIcon}
          alt="return"
          width={24}
          height={24}
        />
      </button>
    </div>
  );
}

export default ReturnButton;
