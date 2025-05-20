'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { GetProductIdTypes } from '../types/product'

import ItemsNavVar from '../common/ItemsNavVar'
import BestItems from './BestItems'
import RecentItems from './RecentItems'
import DropDown from '../common/DropDown'
import productService from '../api/services/productService'
import Button from '../common/Button'

import Search from '../../../public/assets/svg/Search.svg'
import ArrowLeft from '../../../public/assets/svg/ArrowLeft.svg'
import ArrowRight from '../../../public/assets/svg/ArrowRight.svg'

import styled, { css } from 'styled-components'
import { theme } from '../styles/theme'
import { textStyle } from '../styles/textStyle'

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

  return (
    <>
      <ItemsNavVar isItemsPage={true} isBoardsPage={false} />
      <Bone>
        <BestItems products={bestProducts} />

        <NavVAr>
          <NavTitle>전체상품</NavTitle>
          <NavRightWrapper>
            <SearchIcon>
              <Image src={Search} alt="검색 아이콘" />
            </SearchIcon>
            <NavSearch placeholder="검색할 상품 입력해주세요" />
            <ButtonWrapper>
              <RegisterButton size={42.5} onClick={handleAdditem}>
                상품 등록하기
              </RegisterButton>
            </ButtonWrapper>
            <DropDown
              left="152px"
              top="-24px"
              selectList={selectList}
              selected={selectedOption}
              onChange={(value) => {
                setSelectedOption(value)
              }}
            />
          </NavRightWrapper>
        </NavVAr>

        <RecentItems products={sortedProducts} />

        <Pagenation>
          <LeftButton onClick={handlePrevPage}>
            <Image src={ArrowLeft} alt="왼쪽 페이지 화살표" />
          </LeftButton>
          {pages.map((page) => (
            <PageButton
              key={page}
              $isActive={currentPage === page}
              onClick={() => {
                setCurrentPage(page)
              }}
            >
              {page}
            </PageButton>
          ))}
          <LeftButton onClick={handleNextPage}>
            <Image src={ArrowRight} alt="오른쪽 페이지 화살표" />
          </LeftButton>
        </Pagenation>
      </Bone>
    </>
  )
}

export default Items

const Bone = styled.div`
  width: 120rem;
  margin: 2.4rem auto;
  @media (max-width: 1023px) {
    width: 69.6rem;
  }
  @media (max-width: 743px) {
    width: 34.4rem;
    margin: 1rem auto;
  }
`
const NavVAr = styled.div`
  height: 4.2rem;
  width: 100%;
  margin: 0 auto 2.4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 743px) {
    flex-wrap: wrap;
    margin: 0 auto 6.6rem;
  }
`
const NavTitle = styled.div`
  ${(props) => textStyle(20, 700)(props)}
  color: ${theme.colors.SecondaryGray[900]};
  @media (max-width: 743px) {
    height: 2.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`
const NavRightWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  position: relative;
  @media (max-width: 743px) {
    flex-wrap: wrap;
  }
`
const SearchIcon = styled.div`
  position: absolute;
  right: 585px;
  z-index: 10;
  display: flex;
  @media (max-width: 1023px) {
    right: 412px;
  }
  @media (max-width: 743px) {
    right: 308px;
    top: 28px;
  }
`
const RegisterButton = styled(Button)`
  padding: 0.8rem 2.3rem;
  width: max-content;
`
const NavSearch = styled.input`
  width: 32.5rem;
  height: 100%;
  padding: 0.9rem 10.7rem 0.9rem 4.4rem;
  border-radius: 1.2rem;
  ${(props) => textStyle(16, 400)(props)}
  color: ${theme.colors.SecondaryGray[400]};
  background-color: ${theme.colors.SecondaryGray[100]};
  border: none;
  margin-right: 1.2rem;
  @media (max-width: 1023px) {
    width: 15.125rem;
    padding: 9px 24px 9px 44px;
  }
  @media (max-width: 743px) {
    position: relative;
    top: 19px;
    padding: 9px 40px 9px 44px;
    width: max-content;
    margin: 0;
  }
`
const ButtonWrapper = styled.div`
  margin-right: 1.2rem;
  @media (max-width: 743px) {
    position: relative;
    width: max-content;
    top: -74px;
    left: 206px;
  }
  button {
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }
  }
`

const Pagenation = styled.div`
  width: 30.4rem;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4.3rem auto 0 auto;
  @media (max-width: 1023px) {
    margin: 2.5rem auto 0 auto;
  }
`
const LeftButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid ${theme.colors.SecondaryGray[200]};
  background: #ffffff;
  color: ${({ theme }) => theme.colors.SecondaryGray[600]};
  border-radius: 40px;
  height: 40px;
  width: 40px;
  padding: 12px;

  &:hover {
    background: ${({ theme }) => theme.colors.PrimaryBlue[200]};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.SecondaryGray[400]};
    cursor: not-allowed;
  }
`

interface PageButtonProps {
  $isActive: boolean
}
const PageButton = styled.button<PageButtonProps>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 1px solid ${theme.colors.SecondaryGray[100]};
  &:hover {
    background: ${({ theme }) => theme.colors.PrimaryBlue[200]};
  }

  ${({ $isActive, theme }) =>
    $isActive &&
    css`
      background-color: ${theme.colors.PrimaryBlue[100]};
      color: ${theme.colors.SecondaryGray[50]};
    `}
`
