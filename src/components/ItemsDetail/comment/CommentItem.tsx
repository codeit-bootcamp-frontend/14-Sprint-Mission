
import React, { useState } from 'react';
import styles from './CommentList.module.css';
import { formatDate } from 'utils/date';
import UserInfo from 'components/ui/UserInfo';
import clsx from 'clsx';
import { TextAreaBox } from 'components/ui/InputBox';
import Button from 'components/ui/Button';
import Icon from 'components/ui/Icon';
import DropdownMenu from 'components/ui/DropdownMenu';
import Modal from '@/components/ui/Modal';
import { CommentItemUnit, useDeleteProductMutation } from '@/hooks/useProductsComments';

interface CommentItemProps {
  productId: number;
  commentItem: CommentItemUnit;
}

function CommentItem({productId,commentItem}:CommentItemProps) {
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

  const [isModalOpen, setIsModalOpen] = useState(false);

  const { mutate: deleteProduct } = useDeleteProductMutation()
  const handleDelete = async () => {
    deleteProduct(productId);
  };
  
  const confirmDelete = () => {
    handleDelete();
    setIsModalOpen(false);
  };

  return (
    <li className={clsx(styles.commentItem,'flex gap-4 flex-col border-b border-b-[var(--Cool_Gray_200)] pb-3 relative fade-in' )}>
      {editMode === true ? (
          <div>
            <TextAreaBox 
              height='80px' 
              placeholder='내용을 입력해주세요' 
              defaultValue={content} 
              value={editValue} 
              onChange={({ target }: React.ChangeEvent<HTMLTextAreaElement>) => setEditValue(target.value)}  
            />
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
                <Icon iconName='ic_kebab'  width="24" height="24"  alt='드롭다운 버튼'/>
              </div>
              <DropdownMenu isOpen={isOpen}>
                <div onClick={() => setIsOpen(!isOpen)}>
                  <button 
                    onClick={() => {
                      setIsModalOpen(true);
                    }}>
                    삭제하기
                  </button>
                </div>
                <div onClick={() => setIsOpen(!isOpen)}><button onClick={() => setEditMode(true)}>수정하기</button></div>
              </DropdownMenu> 
            </div>
          </div>
       )}
      <UserInfo userImg={commentItem.writer.image} ownerNickname={commentItem.writer.nickname} createdAtString={createdAtString} fontSize='12px'/>
      <Modal isOpen={isModalOpen}>
        <Icon iconName="check"  width="12" height="12"  className="bg-[var(--primary_100)] mx-auto mb-6" alt="check icon" />
        <p className="mb-8 text-center">댓글을 삭제하시겠습니까?</p>
        <div className="flex justify-center gap-2">
          <Button variant="lined_btn" onClick={() => setIsModalOpen(false)}>아니요</Button>
          <Button variant="roundedS" onClick={() => confirmDelete()}>확인</Button>
        </div>
      </Modal>
    </li>
  );
}
export default CommentItem;