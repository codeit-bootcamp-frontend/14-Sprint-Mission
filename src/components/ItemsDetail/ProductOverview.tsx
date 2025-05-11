import React from 'react';
import styles from './ProductOverview.module.css';
import Image from 'next/image';

const defaultImg = '/assets/img/img_default_2x.png';

interface ProductOverviewProps {
  img: string[];
}

function ProductOverview({ img }: ProductOverviewProps) {
  return (
    <div className={styles.overview}>
      <div className='relative w-full aspect-[1/1] '>
        <Image 
          src={img[0] || defaultImg} 
          fill
          priority
          className='object-contain border border-[var(--Cool_Gray_200)]' 
          alt='상품이미지' 
          onError={(e) => (e.target as HTMLImageElement).src = defaultImg} 
        />
      </div>
    </div>
  );
}

export default ProductOverview;