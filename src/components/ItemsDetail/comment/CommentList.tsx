import React from 'react';
import { useInfiniteProductsCommentsWithObserver } from '@/hooks/useProductsComments';
import CommentItem from './CommentItem';
import LoadingBox from '@/components/ui/LoadingBox';
import EmptyBox from '@/components/ui/EmptyBox';


interface CommentListProps {
  productId: number;
  className?: string;
}

function CommentList({ productId,className, ...rest }: CommentListProps) {

  const { 
    data, 
    isLoading, 
    isFetchingNextPage, 
    loadMoreRef } 
  = useInfiniteProductsCommentsWithObserver(productId);

  return (
    <>
      {isLoading ? <LoadingBox className="h-[372px]"/> :  data?.pages?.[0].list.length ? (
      <div className={`${className}`} {...rest}>
        {data?.pages.map((page, i) => (
          <React.Fragment key={page.nextCursor}>
            {page.list.map((comment) => (
              <div key={comment.id} className='mb-6'>
                <CommentItem productId={productId} commentItem={comment}/>               
              </div>
            ))}
          </React.Fragment>
        ))}
        <div ref={loadMoreRef} style={{ height: '20px' }} />
        {isFetchingNextPage && <div>로딩 중...</div>}
      </div>
      ):(
        <EmptyBox context="아직 문의가 없어요" className='h-[372px]' />
        )
      }
    </>
    
  );
}
export default CommentList;
