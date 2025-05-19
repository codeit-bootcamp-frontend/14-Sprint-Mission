'use client';
import CommentSection from '@/components/Article/comment/CommentSection';
import Container from '@/components/layout/Container';
import ConfirmModal from '@/components/ui/ConfirmModal';
import LikeButton from '@/components/ui/LikeButton';
import UserInfo from '@/components/ui/UserInfo';
import { useArticleDetails, useToggleArticlesFavorite } from '@/hooks/useArticles';
import { useConfirmModal } from '@/hooks/useModal';
import { formatDate } from '@/utils/date';
import { useParams } from 'next/navigation';
import React from 'react';

function PostDetail() {
 
   const { id } = useParams(); // URL에서 [id] 추출
   const articleId = Number(id);
 
  const { isConfirmOpen, confirmMessage, openConfirmModal, closeConfirmModal } = useConfirmModal();
  const { mutate: toggleFavorite } = useToggleArticlesFavorite(openConfirmModal, {
  onSuccess: (data) => {
      openConfirmModal(data.isFavorited ? "관심상품 등록되었습니다" :  "관심상품 취소되었습니다");
    },
  });
   const { data } = useArticleDetails(articleId);
  if ( data === undefined) return;

   const createdAtString = formatDate( data.createdAt );

   return (
    <div>
      <div className='flex flex-col mt-[32px]'>
        <Container className='flex flex-col w-full gap-6 '>
          { data && (
            <>    
              <div className="flex flex-col gap-4 border-b border-b-secondary-200 pb-4">
                <strong className="text-xl font-bold">{data.title}</strong>
                <div className="flex flex-row gap-6 items-center">
                  <UserInfo ownerNickname={data.writer.nickname} createdAtString={createdAtString} width={40} className="!text-[18px]" childrenClassName=" !flex-row"/>
                  <span className='w-[1px] h-[34px] bg-secondary-200'></span>
                  <LikeButton 
                    id={data.id} 
                    favoriteCount={data.likeCount} 
                    toggleFavorite={toggleFavorite}
                    isFavorite={false} 
                    className="border rounded-full border-secondary-200 py-[7px] px-[12px]"
                    childrenClassName='gap-0 text-[16px]' width="24" height="24"/>
                </div>
              </div>
              <div>
                <span>{data.content}</span>
              </div>  
            </>
          )}
        </Container>
        <Container className="mb-[151px] mt-8">
          <CommentSection articleId={articleId} />
        </Container>
        <ConfirmModal isOpen={isConfirmOpen} onClose={closeConfirmModal} errorMessage={confirmMessage} />
      </div>
     </div>
   );
}

export default PostDetail;