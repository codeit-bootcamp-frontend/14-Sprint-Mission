import React from 'react';
import styles from './ProductOverview.module.css';
import Image from 'next/image';
import { defaultImg } from '@/lib/imageAssets';
import { FallbackImage } from '../FallbackImage/FallbackImage';


interface ProductOverviewProps {
  img: string[];
}

function ProductOverview({ img }: ProductOverviewProps) {
  return (
    <div className={styles.overview}>
      <div className='relative w-full aspect-[1/1] '>
        <FallbackImage 
          src={img[0] || defaultImg} 
          fill
          className='object-contain border border-[var(--Cool_Gray_200)]' 
          alt='상품이미지' 
        />
      </div>
    </div>
  );
}

export default ProductOverview;