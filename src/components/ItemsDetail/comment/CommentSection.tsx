import React from 'react';
import Button from 'components/ui/Button';
import Icon from 'components/ui/Icon';
import CommentList from './CommentList';
import CommentForm from './CommentForm';
import { useRouter } from 'next/navigation';


type CommentSectionProps = {
  productId: number;
};

function CommentSection({productId}: CommentSectionProps) {
  const router = useRouter();

  const handleGoBack = () => {
    router.back(); // ← 이전 페이지로 이동
  };

  return (
    <>
        <CommentForm productId={productId} />
        <CommentList productId={productId} className='w-full'/>
        <div className='flex justify-center align-middle w-full '>
          <Button onClick={handleGoBack} variant="roundedL">
            <span>목록으로 돌아가기</span>
            <Icon iconName='back'  alt='back icon'/>
          </Button>
        </div>

    </>
  );
}
export default CommentSection;
