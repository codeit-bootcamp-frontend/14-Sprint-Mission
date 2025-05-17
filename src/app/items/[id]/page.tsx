'use client';
import React from 'react';
import styles from './ItemsDetail.module.css';
import ProductDetails from '@/components/productDetail/ProductDetails';

function ItemsDetail() {

  return (
    <>
      <div className={styles.items_detail}>
        <ProductDetails />
      </div>
    </>
  );
}

export default ItemsDetail;