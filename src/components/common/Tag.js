import './Tag.css';
import { IoIosCloseCircle } from 'react-icons/io';

function Tag({ name, onClick, closeFalse }) {
  return (
    <div className="tag-box">
      <span className="tag-name">#{name}</span>
      {closeFalse ?? (
        <button className="remove-tag-button" onClick={onClick}>
          <IoIosCloseCircle size={20} />
        </button>
      )}
    </div>
  );
}

export default Tag;
