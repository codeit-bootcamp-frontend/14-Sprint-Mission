import React, { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import ItemsNavVar from '../../component/common/ItemsNavVar'
import BestItems from './BestItems'
import RecentItems from './RecentItems'
import DropDown from '../../component/common/DropDown'
import productService from '../../api/services/productService'
import Button from '../../component/common/Button'
import styled, { css } from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'
import Search from '../../assets/svg/Search.svg'
import ArrowLeft from '../../assets/svg/ArrowLeft.svg'
import ArrowRight from '../../assets/svg/ArrowRight.svg'

const Bone = styled.div`
  width: 75rem;
  margin: 1.5rem auto;
  @media (max-width: 1199px) {
    width: 43.5rem;
    margin: 1.5rem 1.5rem 2.5rem 1.5rem;
  }
  @media (max-width: 743px) {
    width: 21.437rem;
    margin: 1rem;
  }
`
const NavVAr = styled.div`
  height: 2.625rem;
  width: 100%;
  margin: 1.5rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 743px) {
    flex-wrap: wrap;
    margin: 1.5rem auto 4.5rem;
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
  @media (max-width: 743px) {
    flex-wrap: wrap;
  }
`
const SearchIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  right: -38px;
  @media (max-width: 743px) {
    left: 8px;
    z-index: 1;
    top: 10px;
  }
`
const NavSearch = styled.input`
  width: 20.313rem;
  height: 100%;
  padding: 9px 107px 9px 44px;
  border-radius: 12px;
  ${(props) => textStyle(16, 400)(props)}
  color: ${theme.colors.SecondaryGray[400]};
  background-color: ${theme.colors.SecondaryGray[100]};
  border: none;
  margin-right: 1.3333rem;
  @media (max-width: 1199px) {
    width: 15.125rem;
    padding: 9px 24px 9px 44px;
  }
  @media (max-width: 743px) {
    position: relative;
    left: -28px;
    top: 10px;
  }
`
const ButtonWrapper = styled.div`
  margin-right: 1.3333rem;
  @media (max-width: 743px) {
    position: absolute;
    top: 546px;
    left: 226px;
  }
`
const Pagenation = styled.div`
  width: 19rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2.688rem auto 0 auto;
  @media (max-width: 1199px) {
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

const PageButton = styled.button`
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

const Items = () => {
  const navigate = useNavigate()
  const location = useLocation() // location을 써서 url 주소를 가져와 선택된 옵션에 맞게 변경경

  const [bestProducts, setBestProducts] = useState([])
  const [sortedProducts, setSortedProducts] = useState([])
  const [totalItems, setTotalItems] = useState(0) // 전체 상품 개수 저장

  const selectList = [
    { value: 'recent', name: '최신순' },
    { value: 'favorite', name: '좋아요순' },
  ]

  const [selectedOption, setSelectedOption] = useState(selectList[0].value)
  const itemsPerPage = 10 // 페이지 네이션
  const [currentPage, setCurrentPage] = useState(1)

  const isItemsPage =
    location.pathname === '/items' || location.pathname === '/additem'
  const isBoardsPage = location.pathname === '/boards'

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search)
    const orderBy = queryParams.get('orderBy') || 'recent'
    const page = parseInt(queryParams.get('page'), 10) || 1

    setSelectedOption(orderBy)
    setCurrentPage(page)
  }, [location.search])

  const updateURL = (orderBy, page) => {
    navigate(`?orderBy=${orderBy}&page=${page}`)
  }

  const handleAdditem = () => {
    navigate(`/additem`)
  }
  // BestItems 데이터 불러오기, bestProducts
  useEffect(() => {
    productService.getProduct(1, 10, 'favorite', '').then((response) => {
      setBestProducts(response.data)
    })
  }, [])

  // 페이지네이션
  useEffect(() => {
    productService
      .getProduct(currentPage, 10, selectedOption, '')
      .then((response) => {
        const sorted = [...(response.data.list || [])].sort((a, b) => {
          if (selectedOption === 'recent') {
            return new Date(b.createdAt) - new Date(a.createdAt)
          } else if (selectedOption === 'favorite') {
            return b.favoriteCount - a.favoriteCount
          }
          return 0
        })
        console.log(sorted)
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
      updateURL(selectedOption, nextPage)
      return nextPage
    })
  }

  const handlePrevPage = () => {
    setCurrentPage((prev) => {
      const prevPage = prev > 1 ? prev - 1 : 1
      updateURL(selectedOption, prevPage)
      return prevPage
    })
  }

  return (
    <>
      <ItemsNavVar isItemsPage={isItemsPage} isBoardsPage={isBoardsPage} />

      <Bone>
        <BestItems products={bestProducts} />

        <NavVAr>
          <NavTitle>전체상품</NavTitle>
          <NavRightWrapper>
            <SearchIcon src={Search} alt={`검색 아이콘`} />
            <NavSearch placeholder="검색할 상품 입력해주세요" />
            <ButtonWrapper>
              <Button
                variant="primary"
                width={133}
                size={42.5}
                onClick={handleAdditem}
              >
                상품 등록하기
              </Button>
            </ButtonWrapper>
            <DropDown
              selectList={selectList}
              selected={selectedOption}
              onChange={(value) => {
                setSelectedOption(value)
                updateURL(value, currentPage)
              }}
            />
          </NavRightWrapper>
        </NavVAr>

        <RecentItems products={sortedProducts} />

        <Pagenation>
          <LeftButton onClick={handlePrevPage}>
            <img src={ArrowLeft} />
          </LeftButton>
          {pages.map((page) => (
            <PageButton
              key={page}
              $isActive={currentPage === page}
              onClick={() => {
                setCurrentPage(page)
                updateURL(selectedOption, page)
              }}
            >
              {page}
            </PageButton>
          ))}
          <LeftButton onClick={handleNextPage}>
            <img src={ArrowRight} />
          </LeftButton>
        </Pagenation>
      </Bone>
    </>
  )
}

export default Items
