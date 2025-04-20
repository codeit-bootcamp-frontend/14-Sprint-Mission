import React from 'react';
import useProductsDetail from 'hooks/useProductsDetail';
import ProductDetails from './ItemsDetail/ProductDetails';
import styles from './ItemsDetail.module.css';

function ItemsDetail() {

  const {
    loading,
    data
  } = useProductsDetail();

  return (
    <div className={styles.items_detail}>
      <ProductDetails detailData={data}/>
    </div>
  );
}

export default ItemsDetail;