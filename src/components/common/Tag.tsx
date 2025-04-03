import { MouseEventHandler } from 'react';
import './Tag.css';
import { IoIosCloseCircle } from 'react-icons/io';

interface TagProps {
  name: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  hasDeleteButton: boolean;
}

function Tag({ name, onClick, hasDeleteButton }: TagProps) {
  return (
    <div className="tag-box">
      <span className="tag-name">#{name}</span>
      {hasDeleteButton && (
        <button className="remove-tag-button" onClick={onClick}>
          <IoIosCloseCircle size={20} />
        </button>
      )}
    </div>
  );
}

export default Tag;
