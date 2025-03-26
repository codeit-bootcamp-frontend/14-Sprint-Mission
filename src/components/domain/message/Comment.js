import './Comment.css';
import { getTimeDifference } from '../../../utils/date';
import profileImg from '../../../assets/user.png';
import OptionsIcon from '../../../assets/icons/options.svg';
import { useEffect, useRef, useState } from 'react';
import Dropdown from '../../common/Dropdown';
import TextArea from '../../common/TextArea';
import Button from '../../common/Button';

function Comment({ comment }) {
  const [isEditing, setIsEditing] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const dropdownRef = useRef();
  const { content, updatedAt, writer } = comment;
  const [newComment, setNewComment] = useState(content);
  const { image, nickname } = writer;

  const commentTime = getTimeDifference(updatedAt);

  const handleOptionClick = () => {
    setIsOptionsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOptionsOpen(false);
      }
    };

    if (isOptionsOpen) {
      window.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      window.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOptionsOpen]);

  const handleEditClick = () => {
    setIsEditing(true);
    setIsOptionsOpen(false);
  };

  const handleDeleteClick = () => {
    setIsOptionsOpen(false);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
  };

  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  return (
    <div className="commentContainer">
      {!isEditing ? (
        <div className="commentBox">{content}</div>
      ) : (
        <TextArea
          type="text"
          value={newComment}
          onChange={handleCommentChange}
        />
      )}
      <div className="userBox">
        <img src={image || profileImg} alt="profile" width={40} />
        <div className="infoBox">
          <span className="nickname">{nickname}</span>
          <span className="commentTime">{commentTime}</span>
        </div>
        {isEditing && (
          <div className="editButtonContainer">
            <button className="cancelButton" onClick={handleCancelClick}>
              취소
            </button>
            <Button onClick={handleSaveClick}>수정 완료</Button>
          </div>
        )}
      </div>
      {!isEditing && (
        <img
          className="optionsIcon"
          src={OptionsIcon}
          alt="options"
          onClick={() => handleOptionClick()}
        />
      )}
      {isOptionsOpen && (
        <Dropdown
          onEditClick={() => handleEditClick()}
          onDeleteClick={() => handleDeleteClick()}
          dropdownRef={dropdownRef}
        />
      )}
    </div>
  );
}

export default Comment;
