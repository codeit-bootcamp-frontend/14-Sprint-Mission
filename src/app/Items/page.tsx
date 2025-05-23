'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { GetProductIdTypes } from '../../types/product'

import ItemsNavVar from '../../components/domain/Nav/ItemsNavVar'
import BestItems from './BestItems'
import RecentItems from './RecentItems'
import DropDown from '../../components/common/DropDown'
import productService from '../../lib/api/service/productService'
import Button from '../../components/common/Button'

import Search from '../../../public/assets/svg/search.svg'
import ArrowLeft from '../../../public/assets/svg/arrow_left.svg'
import ArrowRight from '../../../public/assets/svg/arrow_right.svg'

import styles from './items.module.scss'

type SelectOption = {
  value: string
  name: string
}

const Items = () => {
  const [bestProducts, setBestProducts] = useState<GetProductIdTypes[]>([])
  const [sortedProducts, setSortedProducts] = useState<GetProductIdTypes[]>([])
  const [totalItems, setTotalItems] = useState(0) // 전체 상품 개수 저장
  const router = useRouter()
  const selectList: SelectOption[] = [
    { value: 'recent', name: '최신순' },
    { value: 'favorite', name: '좋아요순' },
  ]
  const [selectedOption, setSelectedOption] = useState(selectList[0].value)
  const itemsPerPage = 10 // 페이지 네이션
  const [currentPage, setCurrentPage] = useState(1)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const queryParams = new URLSearchParams()
    const orderBy = queryParams.get('orderBy') ?? 'recent'
    const page = parseInt(queryParams.get('page') ?? '1', 10)

    setSelectedOption(orderBy)
    setCurrentPage(page)
  }, [])

  const handleAdditem = () => {
    router.push('/additem')
  }
  useEffect(() => {
    productService
      .getProduct(1, 5, 'favorite', '')
      .then((response) => {
        const sorted = [...(response.data.list || [])].sort((a, b) => {
          if (selectedOption === 'recent') {
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            ) // Date 쓸 때는 getTime을 써야 함함
          } else if (selectedOption === 'favorite') {
            return b.favoriteCount - a.favoriteCount
          }
          return 0
        })
        console.log(sorted)
        setBestProducts(sorted)
        console.log('bestList:', sorted)
      })
      .catch((error) => {
        console.error('베스트 상품 불러오기 실패:', error)
      })
  }, [])
  // 페이지네이션
  useEffect(() => {
    productService
      .getProduct(currentPage, 10, selectedOption, '')
      .then((response) => {
        const sorted = [...(response.data.list || [])].sort((a, b) => {
          if (selectedOption === 'recent') {
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            ) // Date 쓸 때는 getTime을 써야 함함
          } else if (selectedOption === 'favorite') {
            return b.favoriteCount - a.favoriteCount
          }
          return 0
        })

        setSortedProducts(sorted)
        setTotalItems(response.data.totalCount)
      })
  }, [currentPage, selectedOption])

  const totalPages = Math.ceil(totalItems / itemsPerPage)

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
    setCurrentPage((prev) => {
      const nextPage = prev + 1

      return nextPage
    })
  }

  const handlePrevPage = () => {
    setCurrentPage((prev) => {
      const prevPage = prev > 1 ? prev - 1 : 1

      return prevPage
    })
  }
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 743)
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])
  return (
    <>
      <ItemsNavVar isItemsPage={true} isBoardsPage={false} />
      <div className={styles['bone']}>
        <BestItems products={bestProducts} />

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
              />
            </div>
            <div className={styles['button-wrapper']}>
              <Button
                size={48.5}
                className={styles['register-button']}
                onClick={handleAdditem}
              >
                상품 등록하기
              </Button>
            </div>
            <DropDown
              left={isMobile ? '150px' : '0'}
              top={isMobile ? '-44px' : '0'}
              selectList={selectList}
              selected={selectedOption}
              onChange={(value) => {
                setSelectedOption(value)
              }}
            />
          </div>
        </div>

        <RecentItems products={sortedProducts} />

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
      </div>
    </>
  )
}

export default Items
