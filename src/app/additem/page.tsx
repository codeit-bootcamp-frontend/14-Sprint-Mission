'use client'
import React, { useState } from 'react'

import ItemsNavVar from '../../components/domain/Nav/ItemsNavVar'
import Button from '../../components/common/Button'
import ButtonImage from '../../components/common/ButtonImageInput'
import TextInputPlaceholder from '../../components/common/TextInputPlaceholder'
import Tag from '../../components/common/Tag'

import styles from './additem.module.scss'

const AddItem = () => {
  const [productName, setProductName] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [tagInput, setTagInput] = useState('')
  const [productTags, setProductTags] = useState<string[]>([])

  const handleAddTag = () => {
    const trimmedInput = tagInput.trim()
    if (trimmedInput && !productTags.includes(trimmedInput)) {
      setProductTags([...productTags, trimmedInput])
      setTagInput('')
    }
  }

  const handleDeleteTag = (tagToDelete: string) => {
    setProductTags(productTags.filter((tag) => tag !== tagToDelete))
  }
  // TextInputPlaceholder는 textarea 컴포넌트 -> onKeyDown에 전달한 함수는 HTMLInputElement용 타입이라 교체
  const handleEnterDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAddTag()
    }
  }

  const isState =
    productName.length >= 1 &&
    productDescription.length >= 1 &&
    productPrice.length >= 1 &&
    tagInput.length >= 1

  return (
    <>
      <ItemsNavVar isItemsPage={true} isBoardsPage={false} />
      <div className={styles['bone']}>
        <div className={styles['header']}>
          <div className={styles['product-register']}>상품 등록하기</div>
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
            <div className={styles['product-text']}>상품 이미지</div>
            <ButtonImage />
          </div>
          <div className={styles['display-wrapper']}>
            <div className={styles['product-text']}>상품명</div>
            <TextInputPlaceholder
              placeholder={'상품명을 입력해주세요'}
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>
          <div className={styles['display-wrapper']}>
            <div className={styles['product-text']}>상품 소개</div>
            <TextInputPlaceholder
              placeholder={'상품 소개를 입력해주세요'}
              height="282px"
              padding="16px 24px 240px 24px"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </div>
          <div className={styles['display-wrapper']}>
            <div className={styles['product-text']}>판매 가격</div>
            <TextInputPlaceholder
              placeholder={'판매 가격을 입력해주세요'}
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </div>
          <div className={styles['display-wrapper']}>
            <div className={styles['product-text']}>태그</div>
            <TextInputPlaceholder
              placeholder={'태그를 입력해주세요'}
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleEnterDown}
            />
          </div>
          <div className={styles['tag-display']}>
            {productTags.map((tag, index) => (
              <Tag
                key={index}
                tag={tag}
                showDelete={true}
                onClick={() => handleDeleteTag(tag)}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default AddItem
