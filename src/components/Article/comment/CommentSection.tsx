import React from 'react';
import Button from 'components/ui/Button';
import Icon from 'components/ui/Icon';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { useRouter } from 'next/navigation';


type CommentSectionProps = {
  articleId: number;
};

function CommentSection({articleId}: CommentSectionProps) {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // ← 이전 페이지로 이동
  };

  return (
    <>
        <CommentForm articleId={articleId} />
        <CommentList articleId={articleId} className='w-full mb-16'/>
        <div className='flex justify-center align-middle w-full '>
          <Button onClick={handleGoBack} variant="roundedL" childrenClassName='gap-2'>
            <span>목록으로 돌아가기</span>
            <Icon iconName='back' alt='back icon'/>
          </Button>
        </div>

    </>
  );
}
export default CommentSection;
