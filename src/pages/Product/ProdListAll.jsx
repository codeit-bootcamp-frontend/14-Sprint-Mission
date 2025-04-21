
import React from 'react';
import clsx from 'clsx';
import ProductItem from './ProductItem'
import styles from './ProdListAll.module.css';
import Container from 'components/layout/Container';

function ProdListAll({ itemsData, pageColumn }) {
  return (
    <>
      <Container>
        <ul className={clsx(styles.prodList, styles[`Column_${pageColumn}`])}>
          {itemsData.map((item) => (
            <ProductItem 
              key={item.id} 
              id={item.id} 
              images={item.images} 
              name={item.name} 
              price={item.price} 
              favoriteCount={item.favoriteCount}
            />
          ))}
        </ul>
      </Container>
    </>
  );
}

export default ProdListAll;