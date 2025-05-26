'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'

import { useItemsList } from '../../hooks/useItemsList'
import { GetProductIdTypes } from '../../types/product'
import DropDown from '@/components/common/DropDown'
import productService from '@/lib/api/service/productService'

import HeartInactive from '../../../public/assets/image/heart_inactive.png'
import NoImage from '../../../public/assets/image/no_image.png'
import Search from '../../../public/assets/svg/search.svg'
import ArrowLeft from '../../../public/assets/svg/arrow_left.svg'
import ArrowRight from '../../../public/assets/svg/arrow_right.svg'

import styles from './ProductListItems.module.scss'

type SelectOption = {
  value: string
  name: string
}

const ProductListItems = () => {
  const [itemsDisplay, setItemsDisplay] = useState(1)
  const [isMobile, setIsMobile] = useState(false)
  const selectList: SelectOption[] = [
    { value: 'recent', name: '최신순' },
    { value: 'favorite', name: '좋아요순' },
  ]
  const itemsPerPage = 10
  const [selectedOption, setSelectedOption] = useState(selectList[0].value)
  const [currentPage, setCurrentPage] = useState(1)
  const [searchTerm, setSearchTerm] = useState('')

  // 상품리스트 가져오는 useQuery 훅
  const { productListAll } = useItemsList({
    itemsDisplay,
    page: 1,
    orderBy: 'recent',
    keyword: searchTerm,
    enabled: true,
  })

  // 페이지네이션
  const totalPages = Math.ceil(productListAll.data?.totalCount / itemsPerPage)
  const pages = (() => {
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1)
    }
    if (currentPage <= 3) {
      return [1, 2, 3, 4, 5]
    }
    if (currentPage >= totalPages - 2) {
      return Array.from({ length: 5 }, (_, i) => totalPages - 4 + i)
    }
    return Array.from({ length: 5 }, (_, i) => currentPage - 2 + i)
  })()

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1)
  }

  // 화면 크기에 따라 표시할 아이템 수를 조정하는 useEffect & 드롭다운
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 743) {
        setItemsDisplay(4)
        setIsMobile(true)
      } else if (window.innerWidth >= 744 && window.innerWidth <= 1023) {
        setItemsDisplay(6)
        setIsMobile(false)
      } else {
        setItemsDisplay(10)
        setIsMobile(false)
      }
    }
    handleResize()
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (productListAll.isLoading) return <div>로딩 중...</div>
  if (productListAll.isError)
    return <div>에러 발생: {productListAll.error.message}</div>
  return (
    <>
      <div className={styles['nav-var']}>
        <div className={styles['nav-title']}>전체상품</div>
        <div className={styles['nav-right-wrapper']}>
          <div className={styles['search-icon']}>
            <Image src={Search} alt="검색 아이콘" />
          </div>
          <div className={styles['nav-search']}>
            <input
              type="text"
              placeholder="검색할 상품 입력해주세요"
              className={styles['search-input']}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  setCurrentPage(1)
                }
              }}
            />
          </div>
          <div className={styles['button-wrapper']}>
            <Link href="/additem" className={styles['register-button']}>
              상품 등록하기
            </Link>
          </div>
          <DropDown
            left={isMobile ? '150px' : '0'}
            top={isMobile ? '-44px' : '0'}
            selectList={selectList}
            selected={selectedOption}
            onChange={(value) => {
              setSelectedOption(value)
              setCurrentPage(1)
            }}
          />
        </div>
      </div>
      <div className={styles['recent-item']}>
        <div className={styles['recent-items-display']}>
          {productListAll.data?.list
            .slice(0, itemsDisplay)
            .map((product: GetProductIdTypes) => (
              <Link key={product.id} href={`/items/${product.id}`}>
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
      <div className={styles['pagination']}>
        <div className={styles['arrow-button']} onClick={handlePrevPage}>
          <Image src={ArrowLeft} alt="왼쪽 페이지 화살표" />
        </div>
        {pages.map((page) => (
          <div
            key={page}
            className={`${styles['page-button']} ${
              currentPage === page ? styles['active'] : ''
            }`}
            onClick={() => {
              setCurrentPage(page)
            }}
          >
            {page}
          </div>
        ))}
        <div className={styles['arrow-button']} onClick={handleNextPage}>
          <Image src={ArrowRight} alt="오른쪽 페이지 화살표" />
        </div>
      </div>
    </>
  )
}

export default ProductListItems
