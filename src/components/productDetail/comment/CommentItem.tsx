
import React, { useState } from 'react';
import { formatDate } from 'utils/date';
import UserInfo from 'components/ui/UserInfo';
import clsx from 'clsx';
import { TextAreaBox } from '@/components/ui/form/InputBox';
import Button from 'components/ui/Button';
import DropdownMenu from 'components/ui/DropdownMenu';
import Modal from '@/components/ui/Modal';
import { useConfirmModal, useModal } from '@/hooks/useModal';
import ConfirmModal from '@/components/ui/ConfirmModal';
import { useAuth } from '@/contexts/AuthContext';
import { CommentItemUnit, useDeleteProductComment, usePatchProductComment } from '@/hooks/useItems';

interface CommentItemProps {
  productId: number;
  commentItem: CommentItemUnit;
}

function CommentItem({productId,commentItem}:CommentItemProps) {
  const {
    id:commentId,
    content,
    updatedAt,
  } = commentItem;

  const createdAtString = formatDate(updatedAt);

  const [editMode, setEditMode] = useState(false);
  const [requestCommentValue, setRequestCommentValue] = useState<string>(content);

  const { isModalOpen, modalMessage, openModal, closeModal } = useModal();
  const { isConfirmOpen, confirmMessage, openConfirmModal, closeConfirmModal } = useConfirmModal();
  const { mutate: deleteProduct } = useDeleteProductComment(productId,openConfirmModal);
  const { mutate: patchComment } = usePatchProductComment(productId,openConfirmModal);
  const { user } = useAuth();

  const handleOpenModal = () =>{
    if(!user) {
      openConfirmModal('로그인 후 이용 가능합니다.');
      return;
    }
    if(commentItem.writer.id !== user?.id) {
      openConfirmModal('본인의 댓글만 삭제할 수 있습니다.');
      return;
    }
    openModal('정말 삭제하시겠습니까?');
  };
  const handleOpenEdit = () =>{
    if(!user) {
      openConfirmModal('로그인 후 이용 가능합니다.');
      return;
    }
    if(commentItem.writer.id !== user?.id) {
      openConfirmModal('본인의 댓글만 수정할 수 있습니다.');
      return;
    }
    setEditMode(true);
  };

  const handleConfirmDelete = () => {
    deleteProduct(commentId);
    closeConfirmModal();
  };
  const handleUpdate = () =>{
    patchComment({ commentId, requestCommentValue });
    setEditMode(false)
  };

  const dropdownActions = [
    {
      label: '삭제하기',
      onClick: handleOpenModal,
    },
    {
      label: '수정하기',
      onClick:handleOpenEdit,
    },
  ];


  return (
    <li className={clsx('flex gap-4 flex-col border-b border-b-[var(--Cool_Gray_200)] pb-3 relative fade-in' )}>
      {editMode === true ? (
        <div>
          <TextAreaBox 
            height='80px' 
            placeholder='내용을 입력해주세요' 
            value={requestCommentValue} 
            onChange={({ target }: React.ChangeEvent<HTMLTextAreaElement>) => setRequestCommentValue(target.value)}  
          />
          <div className='absolute bottom-4 right-0'>
            <Button onClick={() => setEditMode(false)} variant="none">취소</Button>
            <Button onClick={handleUpdate} variant="roundedSS">수정 완료</Button>
          </div>
        </div>
        ):(              
        <div>
          <span>{requestCommentValue}</span>
          <DropdownMenu dropdownActions={dropdownActions} className='' />
        </div>
       )}
      <UserInfo userImg={commentItem.writer.image} ownerNickname={commentItem.writer.nickname} createdAtString={createdAtString}  className="text-xs"/>
      <Modal isOpen={isModalOpen} closeModal={closeModal} onclick={handleConfirmDelete} message={modalMessage}/>
      <ConfirmModal isOpen={isConfirmOpen} onClose={closeConfirmModal} errorMessage={confirmMessage} />
    </li>
  );
}
export default CommentItem;