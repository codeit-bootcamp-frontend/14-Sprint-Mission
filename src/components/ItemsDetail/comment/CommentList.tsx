import React from 'react';
import {  useInfiniteProductsComments } from '@/hooks/useProductsComments';
import Image from 'next/image';


const emptyImg = '/assets/img/Img_inquiry_empty_2x.png';

interface CommentListProps {
  productId: number;
  [key: string]: any; 
}

function CommentList({ productId, ...rest }: CommentListProps) {

  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteProductsComments(productId);

  return (
    <>
      {data ? (
        <div>
        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {page.list.map((comment) => (
              <div key={comment.id}>
                <p>{comment.writer.nickname}: {comment.content}</p>
              </div>
            ))}
          </React.Fragment>
        ))}

        {hasNextPage && (
          <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? '불러오는 중...' : '더 보기'}
          </button>
        )}
      </div>
      // <ul className={clsx(styles.commentList,'flex  flex-col gap-6 mb-16')}>
      //             {data?.pages.map((page, i) => (
      //   {data..list.map((item) => (
      //     <li key={item.id} >
      //     <CommentItem
      //       productId={productId}
      //       commentItem={item} 
      //     />
      //     </li>
      //   ))}
      // </ul>
        ):(
          <div className='mt-12 mb-20 text-center'>
            <Image src={emptyImg} className='w-[174px] mx-auto' alt='빈페이지' />
            <span className='text-center mx-auto text-cool-gray-400'>아직 문의가 없어요</span>
          </div>
        )}
    </>
    
  );
}
export default CommentList;
