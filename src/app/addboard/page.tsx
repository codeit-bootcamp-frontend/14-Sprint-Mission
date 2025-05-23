'use client'
import React, { useState } from 'react'

import ItemsNavVar from '../../components/domain/Nav/ItemsNavVar'
import Button from '../../components/common/Button'
import ButtonImage from '../../components/common/ButtonImageInput'
import TextInputPlaceholder from '../../components/common/TextInputPlaceholder'

import styles from './addboard.module.scss'

const AddBoard = () => {
  const [productTitle, setProductTitle] = useState('')
  const [productDescription, setProductDescription] = useState('')

  const isState = productTitle.length >= 1 && productDescription.length >= 1

  return (
    <>
      <ItemsNavVar isItemsPage={false} isBoardsPage={true} />
      <div className={styles['bone']}>
        <div className={styles['header']}>
          <div className={styles['product-register']}>게시글 쓰기</div>
          <div className={styles['button-wrapper']}>
            <Button
              className={styles['register-button']}
              size={42.5}
              disabled={!isState}
            >
              등록
            </Button>
          </div>
        </div>
        <div className={styles['main']}>
          <div className={styles['display-wrapper']}>
            <div className={styles['product-text']}>제목</div>
            <TextInputPlaceholder
              placeholder={'제목을 입력해주세요'}
              height="58px"
              padding="16px 24px 16px 24px"
              value={productTitle}
              onChange={(e) => setProductTitle(e.target.value)}
            />
          </div>
          <div className={styles['display-wrapper']}>
            <div className={styles['product-text']}>내용</div>
            <TextInputPlaceholder
              placeholder={'내용을 입력해주세요'}
              height="282px"
              padding="16px 24px 240px 24px"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </div>

          <div className={styles['display-wrapper']}>
            <div className={styles['product-text']}>상품 이미지</div>
            <ButtonImage />
          </div>
        </div>
      </div>
    </>
  )
}

export default AddBoard
