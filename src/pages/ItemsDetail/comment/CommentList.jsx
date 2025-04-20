import React from 'react';
import styles from './CommentList.module.css';
import clsx from 'clsx';
import CommentItem from './CommentItem';



function CommentList({items,prodId, setDeleteComment, setShowConfirm}) {
  

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
