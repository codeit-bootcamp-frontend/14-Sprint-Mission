
import Button from 'components/ui/Button';
import { TextAreaBox } from '@/components/ui/form/InputBox';
import React, { useState } from 'react';
import { useConfirmModal, useModal } from '@/hooks/useModal';
import ConfirmModal from '@/components/ui/ConfirmModal';
import { usePostArticleComment } from '@/hooks/useArticles';
import { useAuth } from '@/contexts/AuthContext';

type CommentFormProps = {
  articleId: number;
};

function CommentForm({articleId}: CommentFormProps) {
  const { user } = useAuth();
  const [requestCommentValue, setRequestCommentValue] = useState<string>('');
  const { isConfirmOpen, confirmMessage, openConfirmModal, closeConfirmModal } = useConfirmModal();

  const { mutate: postComment } = usePostArticleComment(articleId, openConfirmModal);
  
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
      <h5 className='text-cool-gray-900 mb-2 font-bold ml-1'>댓글달기</h5>
      <TextAreaBox
        placeholder='댓글을 입력해주세요.' 
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