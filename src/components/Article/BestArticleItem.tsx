import { PostItem, useToggleArticlesFavorite } from "@/hooks/useArticles";
import { useConfirmModal } from "@/hooks/useModal";
import { formatDate } from "@/utils/date";
import { FallbackImage } from "../FallbackImage/FallbackImage";
import LikeButton from "../ui/LikeButton";
import ConfirmModal from "../ui/ConfirmModal";
import BestBadge from "../ui/BestBadge";
import { useEffect } from "react";
import { useRouter } from "next/navigation";


interface ArticleListItemProps {
  postItem: PostItem
}
function BestArticleItem({ postItem }: ArticleListItemProps) {
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
      <li className="relative flex-1 bg-secondary-50 rounded-lg pt-[46px] pb-[9px] px-6">
       
        <div className="flex w-full flex-col gap-4">
          <BestBadge className="absolute top-0 left-6"/>
          <div className="flex justify-between w-full">
            <div className="font-semibold text-lg"> <a href={href}>{postItem.title}</a></div>
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
            <div className="flex gap-2">
              <span className="text-sm text-secondary-600">{postItem.writer.nickname}</span>
              <LikeButton 
                id={postItem.id} 
                favoriteCount={postItem.likeCount} 
                toggleFavorite={toggleFavorite}
                isFavorite={false} 
                />
            </div>
            <div className="text-sm text-secondary-400">
              {createdAtString}
            </div>
          </div>
          <ConfirmModal isOpen={isConfirmOpen} onClose={closeConfirmModal} errorMessage={confirmMessage} />
        </div>
      </li>
    </>
  );
}

export default BestArticleItem;
