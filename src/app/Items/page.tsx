'use client'

import React from 'react'

import ItemsNavVar from '../../components/domain/Nav/ItemsNavVar'
import BestItems from './BestItems'
import ProductListItems from './ProductListItems'

import styles from './items.module.scss'

const Items = () => {
  return (
    <>
      <ItemsNavVar isItemsPage={true} isBoardsPage={false} />
      <div className={styles['bone']}>
        <BestItems />

        <ProductListItems />
      </div>
    </>
  )
}

export default Items
