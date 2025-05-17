import React, { useState } from 'react';
import styles from './ProductDescription.module.css';
import UserInfo from 'components/ui/UserInfo';
import { formatDate } from 'utils/date';
import Icon from 'components/ui/Icon';
import Button from 'components/ui/Button';
import clsx from 'clsx';
import { ProductDetail } from '@/hooks/useProductsDetail';
import LikeButton from '../ui/LikeButton';
import { useGetUserFavorites } from '@/hooks/useUser';
import { useToggleProductFavorite } from '@/hooks/useItems';
import { useConfirmModal } from '@/hooks/useModal';
import ConfirmModal from '../ui/ConfirmModal';

function ProductDescription(detailData:ProductDetail) {
  
  const {
    createdAt,
    description,
    favoriteCount,
    // isFavorite,
    name,
    ownerNickname,
    price,
    tags
  } = detailData;

  const { data } = useGetUserFavorites({});
  const isFavorite = data?.list.some((item) => item.id === detailData.id) ?? false;

  // '2025-04-08T01:00:06+09:00'  '2025-04-07T01:00:06+09:00'
  const createdAtString = formatDate(createdAt);
  // console.log(createdAtString);
  const { isConfirmOpen, confirmMessage, openConfirmModal, closeConfirmModal } = useConfirmModal();
  const { mutate: toggleFavorite } = useToggleProductFavorite(openConfirmModal, {
  onSuccess: (data) => {
    openConfirmModal(data.isFavorited ? "관심상품 등록되었습니다" :  "관심상품 취소되었습니다");
  },
});

  return (
    <div className={styles.description}>
      <div className='mobile:mb-10'>
        <div className={clsx(styles.title,'tablet:gap-2')}>
          <h2 className='desktop:text-xl tablet:text-xl mobile:text-base '>{name}</h2>
          <h3 className='desktop:text-4xl tablet:text-3xl mobile:text-2xl'>{price?.toLocaleString()}원</h3>
        </div>
        <ul>
          <li>
            <h4>상품 소개</h4>
            <p>{description}</p>
          </li>
          {tags?.length > 0 && (
            <li>
              <h4>상품 태그</h4>
              <div>
                {tags.map((tag, index) => (
                  <p key={index}>{tag}</p> 
                ))}
              </div>
            </li> 
          )}
        </ul>
      </div>
      <div className={styles.UserInfo}>
        <UserInfo ownerNickname={ownerNickname} createdAtString={createdAtString}/>
        <div className={styles.likeBtnBox}>
           <LikeButton variant="btn-heart_L" 
            id={detailData.id} 
            favoriteCount={detailData.favoriteCount} 
            isFavorite={isFavorite} 
            toggleFavorite={toggleFavorite}
            childrenClassName='gap-2' width="24" height="24"/>
        </div>
      </div>
      <ConfirmModal isOpen={isConfirmOpen} onClose={closeConfirmModal} errorMessage={confirmMessage} />
    </div>
  );
}

export default ProductDescription;