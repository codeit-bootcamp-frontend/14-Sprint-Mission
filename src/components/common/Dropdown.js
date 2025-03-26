import './Dropdown.css';

function Dropdown({ onEditClick, onDeleteClick, dropdownRef }) {
  return (
    <ul className="commentDropdown" ref={dropdownRef}>
      <li onClick={onEditClick}>수정하기</li>
      <li onClick={onDeleteClick}>삭제하기</li>
    </ul>
  );
}

export default Dropdown;
