import React, { useEffect, useRef } from 'react';
import { useInfiniteProductsComments } from '@/hooks/useProductsComments';
import CommentItem from './CommentItem';
import LoadingBox from '@/components/ui/LoadingBox';
import EmptyBox from '@/components/ui/EmptyBox';


interface CommentListProps {
  productId: number;
  className?: string;
  [key: string]: any; 
}

function CommentList({ productId,className, ...rest }: CommentListProps) {

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteProductsComments(productId);

  const loadMoreRef = useRef<HTMLDivElement>(null);

  
  useEffect(() => {
    if (!loadMoreRef.current || !hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasNextPage) {
          fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(loadMoreRef.current);

    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [hasNextPage, fetchNextPage]);

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
