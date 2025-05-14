
'use client';

import React from 'react';
import clsx from 'clsx';
import ProductItem from './ProductItem'
import styles from './ProdListAll.module.css';
import Container from 'components/layout/Container';
import { ProductListResponse } from '@/hooks/useItems';

interface ProdListAllProps {
  itemsData: ProductListResponse;
  pageColumn: number;
  className?: string;
}

export function ProdListAll({ itemsData, pageColumn, className }: ProdListAllProps) {

  return (
    <>
      <Container className={className}>
        <ul className={clsx(styles.prodList, styles[`Column_${pageColumn}`])}>
          { itemsData.totalCount !== 0 && (
            itemsData.list.map((item) => (
              <ProductItem 
                key={item.id} 
                productItem={item} 
              />
            ))
          )}
        </ul>
      </Container>
    </>
  );
}
