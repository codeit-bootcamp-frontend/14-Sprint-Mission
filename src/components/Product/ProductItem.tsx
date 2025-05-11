'use client';

import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import styles from './ProductItem.module.css';
import Icon from 'components/ui/Icon';
import Button from 'components/ui/Button';
import clsx from 'clsx';
import Image from 'next/image';
import { ProductSummary } from '@/hooks/useItems';
import { FallbackImage } from '../FallbackImage/FallbackImage';
import { defaultImg } from '@/lib/imageAssets';


interface ProductItemProps {   // ProductSummary 타입정의할때 옵셔널 방식을 사용함   | undefined 필요 
  productItem: ProductSummary;
}

function ProductItem({productItem}: ProductItemProps) {
  // const randomNum = Math.floor(Math.random() * 4) + 1;
  // const randomImg = `../img/img_1.jpg`;

  const [isLiked, setIsLiked] = useState(false);
  const handleClick = () => {
    setIsLiked((prev) => !prev);  // 현재 상태를 반전시킴
  };

  if(productItem === undefined) return null;
  return (
    <li className={styles.listItem}>
      <Link href={`items/${productItem.id}`}>
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
        
        <Button onClick={handleClick} variant="btn-heart_S">
          <Icon iconName={isLiked === false ? 'heartOpen' : 'heartClose'}  width="16" height="16"  alt='Like icon' />
          <span>{productItem.favoriteCount}</span>
        </Button>
      </div>
    </li>
  );
}

export default ProductItem;
