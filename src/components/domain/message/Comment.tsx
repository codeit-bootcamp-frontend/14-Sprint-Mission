import './Comment.css';
import { getTimeDifference } from '../../../utils/date';
import profileImg from '../../../assets/images/user.png';
import OptionsIcon from '../../../assets/icons/options.svg';
import { ChangeEvent, useState } from 'react';
import Dropdown from '../../common/Dropdown';
import TextArea from '../../common/TextArea';
import Button from '../../common/Button';
import { CommentType } from '../../../types/types';

interface CommentProps {
  comment: CommentType;
}

function Comment({ comment }: CommentProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const { content, updatedAt, writer } = comment;
  const [newComment, setNewComment] = useState(content);
  const { image, nickname } = writer;
  const commentTime = getTimeDifference(updatedAt);
  const dropdownItems = [
    { label: '수정하기', onClick: () => handleEditClick() },
    { label: '삭제하기', onClick: () => handleDeleteClick() },
  ];

  // dropdown 열기/닫기
  const handleOptionClick = () => {
    setIsOptionsOpen((prev) => !prev);
  };
  // dropdown 닫기
  const handleDropdownClose = () => {
    setIsOptionsOpen(false);
    console.log('close');
  };
  // comment 수정
  const handleEditClick = () => {
    setIsEditing(true);
    setIsOptionsOpen(false);
  };
  // comment 삭제
  const handleDeleteClick = () => {
    setIsOptionsOpen(false);
  };
  // comment 저장
  const handleSaveClick = () => {
    setIsEditing(false);
  };
  // comment 수정 취고
  const handleCancelClick = () => {
    setIsEditing(false);
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewComment(e.target.value);
  };

  return (
    <div className="commentContainer">
      {!isEditing ? (
        <div className="commentBox">{content}</div>
      ) : (
        <TextArea value={newComment} onChange={handleCommentChange} />
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
      <Dropdown
        items={dropdownItems}
        isOpen={isOptionsOpen}
        onClose={handleDropdownClose}
      />
    </div>
  );
}

export default Comment;
