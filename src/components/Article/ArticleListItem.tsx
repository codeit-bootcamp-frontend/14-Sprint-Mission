import React, { useEffect } from 'react';
import LikeButton from '../ui/LikeButton';
import UserInfo from '../ui/UserInfo';
import { formatDate } from '@/utils/date';
import { FallbackImage } from '../FallbackImage/FallbackImage';
import { PostItem, useToggleArticlesFavorite } from '@/hooks/useArticles';
import ConfirmModal from '../ui/ConfirmModal';
import { useConfirmModal } from '@/hooks/useModal';
import { useRouter } from 'next/navigation';

interface ArticleListItemProps {
  postItem: PostItem
}
function ArticleListItem({ postItem }: ArticleListItemProps) {
  const router = useRouter();
  const href = `boards/${postItem.id}`;
  useEffect(() => {
    router.prefetch(href);
  }, [href, router]);

  const { isConfirmOpen, confirmMessage, openConfirmModal, closeConfirmModal } = useConfirmModal();
  // '2025-04-08T01:00:06+09:00'  '2025-04-07T01:00:06+09:00'
  const createdAtString = formatDate(postItem.createdAt);
  // console.log(createdAtString);
    const { mutate: toggleFavorite } = useToggleArticlesFavorite(openConfirmModal, {
    onSuccess: (data) => {
        openConfirmModal(data.isFavorited ? "관심상품 등록되었습니다" :  "관심상품 취소되었습니다");
      },
    });
  return (
    <>
      <li className="border-b border-secondary-200 my-6 pb-6">
        <div className="flex w-full flex-col gap-4">
          <div className="flex justify-between w-full">
            <div className="font-semibold text-lg"><a href={href}>{postItem.title}</a></div>
            <div className="relative w-[72px] border border-secondary-100 rounded-lg overflow-hidden aspect-[1/1]">
              <FallbackImage
                src={postItem.image}
                alt={postItem.content}
                sizes="sm:100vw, 33vw"
                className={`absolute inset-0 object-cover scale-105 transition-opacity duration-300 $`}
                aria-hidden="true"
              />
            </div> 
          </div>
          <div className="flex justify-between w-full">
            <UserInfo ownerNickname={postItem.writer.nickname} createdAtString={createdAtString} width={24} className="gap-[8px]" childrenClassName="!flex-row items-center" fontSize='12px'/>
            <LikeButton 
              id={postItem.id} 
              favoriteCount={postItem.likeCount} 
              toggleFavorite={toggleFavorite}
              isFavorite={false} 
              />
          </div>
          <ConfirmModal isOpen={isConfirmOpen} onClose={closeConfirmModal} errorMessage={confirmMessage} />
        </div>
      </li>
    </>
  );
}

export default ArticleListItem;