import React from 'react';
import styles from './ProductOverview.module.css';
import defaultImg from 'assets/img/img_default_2x.png';

function ProductOverview({img}) {
  return (
    <div className={styles.overview}>
      <div>
        <img src={img} className='border border-[var(--Cool_Gray_200)]' alt='상품이미지' onError={(e) => e.target.src = defaultImg} />
      </div>
    </div>
  );
}

export default ProductOverview;