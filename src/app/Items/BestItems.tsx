'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { GetProductIdTypes } from '../../types/product'

import HeartInactive from '../../../public/assets/image/heart_inactive.png'

import styles from './BestItems.module.scss'

interface BestItemsProps {
  products: GetProductIdTypes[]
}

const BestItems = ({ products }: BestItemsProps) => {
  const [itemsDisplay, setItemsDisplay] = useState(1)
  const list = products || []
  console.log(products)
  useEffect(() => {
    const handleReasize = () => {
      if (window.innerWidth <= 743) {
        setItemsDisplay(1)
      } else if (window.innerWidth <= 1023) {
        setItemsDisplay(2)
      } else {
        setItemsDisplay(4)
      }
    }
    handleReasize()
    window.addEventListener('resize', handleReasize)

    return () => window.removeEventListener('resize', handleReasize)
  }, [])

  return (
    <div className={styles['bone']}>
      {/* 점 표기법이 아니고 [] 사용한 이유는 클래스명에 - 하이픈이 있을 수도 있고  동적일 때도 []를 쓰지만 여기서는 하이픈 이유 때문에 []를 씀*/}
      <div className={styles['title']}>베스트 상품</div>

      <div className={styles['best-items-display']}>
        {list.slice(0, itemsDisplay).map((product) => (
          <Link key={product.id} href={`/items/${product.id}`} prefetch={true}>
            <div className={styles['best-item']}>
              <img
                className={styles['best-item-image']}
                src={
                  Array.isArray(product.images) && product.images.length > 0
                    ? product.images[0]
                    : ''
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

export default BestItems
