import React, { useState } from 'react';
import styles from './CommentList.module.css';
import clsx from 'clsx';
import Button from 'components/ui/Button';
import { deleteComment } from 'api';
import Icon from 'components/ui/Icon';
import CommentItem from './CommentItem';
import Modal from 'components/ui/Modal';



function CommentList({items}) {
  
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDelete = async (id) => {
    try {
      await deleteComment(id);
      console.log(' 댓글 삭제 완료');
      // 예: 목록 다시 불러오기 or 상태 업데이트
    } catch (err) {
      console.error(' 삭제 실패:', err);
    }
  };

  const confirmDelete = (id) => {
    handleDelete(id);
    setShowConfirm(false);
  };
  return (
    <>
      <Modal isOpen={showConfirm} onClose={() => setShowConfirm(false)}>
        <Icon iconName="check" className="bg-[var(--primary_100)] mx-auto mb-6" alt="check icon" />
        <p className="mb-8 text-center">댓글을 삭제하시겠습니까?</p>
        <div className="flex justify-center gap-2">
          <Button variant="lined_btn" onClick={() => setShowConfirm(false)}>아니요</Button>
          <Button variant="roundedS" onClick={() => confirmDelete()}>확인</Button>
        </div>
      </Modal>
      <ul className={clsx(styles.commentList,'flex  flex-col gap-6 mb-16')}>
        {items.map((item) => (
          <CommentItem
            key={item.id} 
            id={item.id} 
            commentItem={item}
            setShowConfirm={setShowConfirm}
            confirmDelete={confirmDelete}
          />
        ))}
      </ul>
    </>
    
  );
}
export default CommentList;
