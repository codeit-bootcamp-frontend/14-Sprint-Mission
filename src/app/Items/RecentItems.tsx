'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { GetProductIdTypes } from '../../types/product'

import HeartInactive from '../../../public/assets/image/heart_inactive.png'
import NoImage from '../../../public/assets/image/no_image.png'

import styles from './RecentItems.module.scss'

const RecentItems = ({ products }: { products: GetProductIdTypes[] }) => {
  const [itemsDisplay, setItemsDisplay] = useState(1)

  useEffect(() => {
    const handleReasize = () => {
      if (window.innerWidth <= 743) {
        setItemsDisplay(4)
      } else if (window.innerWidth >= 744 && window.innerWidth <= 1023) {
        setItemsDisplay(6)
      } else {
        setItemsDisplay(10)
      }
    }
    handleReasize()
    window.addEventListener('resize', handleReasize)

    return () => window.removeEventListener('resize', handleReasize)
  }, [])
  return (
    <div className={styles['recent-item']}>
      <div className={styles['recent-items-display']}>
        {products.slice(0, itemsDisplay).map((product) => (
          <Link key={product.id} href={`/items/${product.id}`} prefetch={true}>
            <div className={styles['recent-item-key']} key={product.id}>
              <img
                className={styles['recent-item-image']}
                src={
                  Array.isArray(product.images) && product.images.length > 0
                    ? product.images[0]
                    : NoImage.src
                }
                alt={product.name}
              />
              <div className={styles['product-description']}>
                <div className={styles['product-name']}>{product.name}</div>
                <div className={styles['product-price']}>
                  {product.price.toLocaleString('ko-KR')}원
                </div>
                <div className={styles['product-favorite-count']}>
                  <Image src={HeartInactive} alt="HeartInactive" />
                  {product.favoriteCount}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default RecentItems
