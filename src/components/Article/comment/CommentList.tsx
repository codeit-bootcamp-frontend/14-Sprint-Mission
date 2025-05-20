import React from 'react';
import CommentItem from './CommentItem';
import LoadingBox from '@/components/ui/LoadingBox';
import EmptyBox from '@/components/ui/EmptyBox';
import { useInfiniteArticleCommentsWithObserver } from '@/hooks/useArticles';
import { replyEmptyImg } from '@/lib/imageAssets';


interface CommentListProps {
  articleId: number;
  className?: string;
}

function CommentList({ articleId,className, ...rest }: CommentListProps) {

  const { 
    data, 
    isLoading, 
    isFetchingNextPage, 
    loadMoreRef } 
  = useInfiniteArticleCommentsWithObserver(articleId);

  return (
    <>
      {isLoading ? <LoadingBox className="h-[202px] mt-12 mb-20"/> :  data?.pages?.[0].list.length ? (
      <div className={`${className}`} {...rest}>
        {data?.pages.map((page, i) => (
          <React.Fragment key={page.nextCursor}>
            {page.list.map((comment) => (
              <div key={comment.id} className='mb-6'>
                <CommentItem articleId={articleId} commentItem={comment}/>               
              </div>
            ))}
          </React.Fragment>
        ))}
        <div ref={loadMoreRef} style={{ height: '20px' }} />
        {isFetchingNextPage && <div>로딩 중...</div>}
      </div>
      ):(
        <EmptyBox context="아직 댓글이 없어요." subText="지금 댓글을 달아 보세요!" className='h-[202px]' imageName={replyEmptyImg}/>
        )
      }
    </>
    
  );
}
export default CommentList;
