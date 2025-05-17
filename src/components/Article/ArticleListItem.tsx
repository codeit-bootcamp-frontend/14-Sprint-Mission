import { PostItem } from '@/hooks/useArticles';
import React from 'react';
import LikeButton from '../ui/LikeButton';
import UserInfo from '../ui/UserInfo';
import { formatDate } from '@/utils/date';
import { FallbackImage } from '../FallbackImage/FallbackImage';

interface ArticleListItemProps {
  postItem: PostItem
}
function ArticleListItem({ postItem }: ArticleListItemProps) {

  // '2025-04-08T01:00:06+09:00'  '2025-04-07T01:00:06+09:00'
  const createdAtString = formatDate(postItem.createdAt);
  // console.log(createdAtString);
  return (
    <>
      <li>
        <div className="flex justify-between w-full my-6 mx-auto">
          <div>
            <div>{postItem.title}</div>
            <div className="relative w-[72px] border border-secondary-100 rounded-lg aspect-[1/1]">
              <FallbackImage
                src={postItem.image}
                alt={postItem.content}
                fill
                priority
                sizes="sm:100vw, 33vw"
                className={`absolute inset-0 object-cover blur-sm scale-105 transition-opacity duration-300 $`}
                aria-hidden="true"
              />
            </div> 
          </div>
          <div>
            <UserInfo ownerNickname={postItem.writer.nickname} createdAtString={createdAtString} fontSize='12px'/>
            <LikeButton 
              productId={postItem.id} 
              favoriteCount={postItem.likeCount} 
              likedMessage = "관심 게시물 등록되었습니다"
              unLikedMessage = "관심 게시물 취소되었습니다"/>
          </div>
        </div>
      </li>
    </>
  );
}

export default ArticleListItem;