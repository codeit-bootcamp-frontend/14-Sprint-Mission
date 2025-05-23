'use client'

import React from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'

import { useGetProductId } from '../../../hooks/useProductService'
import Tag from '../../../components/common/Tag'
import { formatDate } from '../../../utils/datetime'

import Setting from '../../../../public/assets/svg/setting_icon.svg'
import ProfileIcon from '../../../../public/assets/svg/profile_icon.svg'
import HeartInactive from '../../../../public/assets/image/heart_inactive.png'

import styles from './ItemsDetailDescription.module.scss'

const ItemsDetailDescription = () => {
  const params = useParams()
  const productId = Number(params.productId)

  // 커스텀 훅으로 데이터 fetch
  const product = useGetProductId(productId)

  if (!product) {
    return <div>상품 정보를 불러오는 중입니다...</div>
  }
  return (
    <div className={styles['bone']}>
      <img
        className={styles['product-image']}
        src={product.images[0]}
        alt={product.name}
      />
      <div className={styles['title-description']}>
        <div className={styles['product-title-wrapper']}>
          <div className={styles['product-title']}>
            <div className={styles['product-name']}>{product.name}</div>
            <Image src={Setting} alt="상품설정버튼" />
          </div>
          <div className={styles['product-price']}>
            {product.price.toLocaleString()}원
          </div>
        </div>
        <div className={styles['product-description-wrapper']}>
          <div className={styles['product-description-text']}>상품 소개</div>
          <div className={styles['product-description']}>
            {product.description}
          </div>
        </div>
        <div className={styles['product-tag-wrapper']}>
          <div className={styles['product-description-text']}>상품 태그</div>
          <div className={styles['product-tag']}>
            {product.tags?.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </div>
        </div>
        <div className={styles['product-footer']}>
          <div className={styles['product-footer-left']}>
            <Image src={ProfileIcon} alt="프로필아이콘" />
            <div>
              <div className={styles['owner-nickname']}>
                {product.ownerNickname}
              </div>
              <div className={styles['updatedat']}>
                {formatDate(product.createdAt)}
              </div>
            </div>
          </div>
          <div className={styles['product-footer-right']}>
            <Image src={HeartInactive} alt="하트활성화/비활성화" />
            <div>{product.favoriteCount}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemsDetailDescription
