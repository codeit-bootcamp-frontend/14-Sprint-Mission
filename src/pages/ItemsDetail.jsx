import React, { useState } from 'react';
import useProductsDetail from 'hooks/useProductsDetail';
import ProductDetails from './ItemsDetail/ProductDetails';
import styles from './ItemsDetail.module.css';
import Modal from 'components/ui/Modal';
import { deleteComment } from 'api';
import Icon from 'components/ui/Icon';
import Button from 'components/ui/Button';

function ItemsDetail() {

  const [showConfirm, setShowConfirm] = useState(false);
  const [deleteComment, setDeleteComment] = useState();

  const handleDelete = async () => {
    console.log( '삭제될 코멘트 아이디', deleteComment);
    try {
      await deleteComment(deleteComment);
      console.log(' 댓글 삭제 완료');
    } catch (err) {
      console.error(' 삭제 실패:', err);
    }
  };
  
  const confirmDelete = () => {
    handleDelete(deleteComment);
    setShowConfirm(false);
  };

  const {
    loading,
    data
  } = useProductsDetail();

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
      <div className={styles.items_detail}>
        <ProductDetails detailData={data} setDeleteComment={setDeleteComment} setShowConfirm={setShowConfirm} confirmDelete={confirmDelete}/>
      </div>
      </>
  );
}

export default ItemsDetail;