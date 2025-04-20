
import React, { useState } from 'react';
import styles from './CommentList.module.css';
import { formatDate } from 'utils/date';
import UserInfo from 'components/ui/UserInfo';
import clsx from 'clsx';
import { TextAreaBox } from 'components/ui/InputBox';
import Button from 'components/ui/Button';
import { updateComment } from 'api';
import Icon from 'components/ui/Icon';
import DropdownMenu from 'components/ui/DropdownMenu';



function CommentItem({commentItem, setShowConfirm, setDeleteComment}) {
  const {
    id,
    content,
    updatedAt,
  } = commentItem;

  const [editMode, setEditMode] = useState(false);
  const [editValue, setEditValue] = useState(content);
  const [isOpen, setIsOpen] = useState(false);

  const createdAtString = formatDate(updatedAt);

  const handleUpdate = async () => {
    setEditMode(false);
    try {
      const updated = await updateComment(id, editValue);
      console.log('수정된 댓글:', updated);
    } catch (err) {
      console.error(' 수정 실패:', err);
    }
  };
  return (
    <li className={clsx(styles.commentItem,'flex gap-4 flex-col border-b border-b-[var(--Cool_Gray_200)] pb-3 relative fade-in' )}>
      {editMode === true ? (
          <div>
            <TextAreaBox height='80px' placeholder='내용을 입력해주세요' defaultValue={content} value={editValue} onChange={({ target }) => setEditValue(target.value)}  />
            <div className='absolute bottom-4 right-0'>
              <Button onClick={() => setEditMode(false)} variant="none">취소</Button>
              <Button onClick={handleUpdate} variant="roundedSS">수정 완료</Button>
            </div>
          </div>
        ):(              
          <div>
            <span>{content}</span>
            <div className='absolute top-0 right-0 cursor-pointer'>
              <div onClick={() => setIsOpen(!isOpen)}>
                <Icon iconName='ic_kebab' alt='드롭다운 버튼'/>
              </div>
              <DropdownMenu isOpen={isOpen}>
                <div onClick={() => setIsOpen(!isOpen)}>
                  <button 
                    variant="none"
                    onClick={() => {
                      setShowConfirm(true);
                      setDeleteComment(id);
                    }}>
                    삭제하기
                  </button>
                </div>
                <div onClick={() => setIsOpen(!isOpen)}><button onClick={() => setEditMode(true)} variant="none">수정하기</button></div>
              </DropdownMenu> 
            </div>
          </div>
       )}
      <UserInfo UserImg={commentItem.writer?.image} ownerNickname={commentItem.writer?.nickname} createdAtString={createdAtString} fontSize='12px'/>
    </li>
  );
}
export default CommentItem;