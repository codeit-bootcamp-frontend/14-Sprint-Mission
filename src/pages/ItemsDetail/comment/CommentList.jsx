import React, { useState } from 'react';
import styles from './CommentList.module.css';
import clsx from 'clsx';
import Button from 'components/ui/Button';
import { deleteComment } from 'api';
import Icon from 'components/ui/Icon';
import CommentItem from './CommentItem';
import Modal from 'components/ui/Modal';



function CommentList({items,prodId, setDeleteComment, setShowConfirm,  confirmDelete}) {
  

  return (
    <>
      <ul className={clsx(styles.commentList,'flex  flex-col gap-6 mb-16')}>
        {items.map((item) => (
          <CommentItem
            key={item.id} 
            id={item.id} 
            prodId={prodId}
            commentItem={item} 
            setDeleteComment={setDeleteComment} 
            setShowConfirm={setShowConfirm} 
          />
        ))}
      </ul>
    </>
    
  );
}
export default CommentList;
