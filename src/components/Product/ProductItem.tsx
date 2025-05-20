'use client';

import React from 'react';
import Link from 'next/link';
import styles from './ProductItem.module.css';
import clsx from 'clsx';
import { ProductSummary, useToggleProductFavorite } from '@/hooks/useItems';
import { FallbackImage } from '../FallbackImage/FallbackImage';
import { defaultImg } from '@/lib/imageAssets';
import { useConfirmModal, useModal } from '@/hooks/useModal';
import ConfirmModal from '../ui/ConfirmModal';
import { useGetUserFavorites } from '@/hooks/useUser';
import LikeButton from '../ui/LikeButton';


interface ProductItemProps {   // ProductSummary 타입정의할때 옵셔널 방식을 사용함   | undefined 필요 
  productItem: ProductSummary;
}

function ProductItem({productItem}: ProductItemProps) {
  // const randomNum = Math.floor(Math.random() * 4) + 1;
  // const randomImg = `../img/img_1.jpg`;

  const productId = productItem.id ?? 0; 

  const { isConfirmOpen, confirmMessage, openConfirmModal, closeConfirmModal } = useConfirmModal();
  const { data } = useGetUserFavorites({});

  const { mutate: toggleFavorite } = useToggleProductFavorite(openConfirmModal, {
  onSuccess: (data) => {
      openConfirmModal(data.isFavorited ? "관심상품 등록되었습니다" :  "관심상품 취소되었습니다");
    },
  });
  const isFavorite = data?.list.some((item) => item.id === productId) ?? false;

  return (
    <li className={styles.listItem}>
      <Link href={`items/${productId}`}>
        <div className={clsx(styles.imgBox,'border border-[var(--Cool_Gray_200)]')}>
          <FallbackImage
            src={productItem.images?.[0] || defaultImg}
            alt="ProductImg"  
          />
        </div>
      </Link>
      <div className={styles.description}>
        <div className={styles.name}>{productItem.name}</div>
        <div className={styles.price}>{productItem.price?.toLocaleString()}원</div>
        
        <LikeButton 
          id={productId} 
          favoriteCount={productItem.favoriteCount} 
          toggleFavorite={toggleFavorite}
          isFavorite={isFavorite}
          />
      </div>
      <ConfirmModal isOpen={isConfirmOpen} onClose={closeConfirmModal} errorMessage={confirmMessage} />
    </li>
  );
}

export default ProductItem;
