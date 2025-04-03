import "./Select.css";

function Select({ option1, option2, onEditClick, onDeleteClick }) {
  return (
    <div className="select-container">
      <div className="select-option" onClick={onEditClick}>
        {option1}
      </div>
      <div className="select-option" onClick={onDeleteClick}>
        {option2}
      </div>
    </div>
  );
}

export default Select;
