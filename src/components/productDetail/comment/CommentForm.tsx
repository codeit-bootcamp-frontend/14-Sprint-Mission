
import Button from 'components/ui/Button';
import { TextAreaBox } from '@/components/ui/form/InputBox';
import React, { useState } from 'react';
import { useConfirmModal, useModal } from '@/hooks/useModal';
import ConfirmModal from '@/components/ui/ConfirmModal';
import { usePostProductComment } from '@/hooks/useItems';
import { useAuth } from '@/contexts/AuthContext';

type CommentFormProps = {
  productId: number;
};

function CommentForm({productId}: CommentFormProps) {

  const { user } = useAuth();
  const [requestCommentValue, setRequestCommentValue] = useState<string>('');
  const { isConfirmOpen, confirmMessage, openConfirmModal, closeConfirmModal } = useConfirmModal();
  const { mutate: postComment } = usePostProductComment(productId, openConfirmModal);
  
  const handleClick = () => {
    if(!user) {
      openConfirmModal('로그인 후 이용 가능합니다.');
      return;
    }
    postComment(requestCommentValue);
    setRequestCommentValue('');
  };

  return (    
    <div className='w-full mb-6'>
      <h5 className='text-cool-gray-900 mb-2 font-bold ml-2'>문의하기</h5>
      <TextAreaBox
        placeholder='개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.' 
        value={requestCommentValue} 
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setRequestCommentValue(e.target.value)}
        />
      <div className='flex justify-end'>
        <Button variant="roundedSS" disabled={!requestCommentValue}  onClick={handleClick} >등록</Button>
      </div>
      <ConfirmModal isOpen={isConfirmOpen} onClose={closeConfirmModal} errorMessage={confirmMessage} />
    </div>
  );
}
export default CommentForm;