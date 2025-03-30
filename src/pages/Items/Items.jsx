import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'
import ItemsNavVar from './ItemsNavVar'
import BestItems from './BestItems'
import RecentItems from './RecentItems'
import DropDown from '../../component/common/DropDown'
import productService from '../../api/services/productService'
import Button from '../../component/common/Button'
import Search from '../../assets/svg/Search.svg'

const Bone = styled.div`
  height: 75.375rem;
  width: 75rem;
  margin: 1.5rem auto;
`
const NavVAr = styled.div`
  height: 2.625rem;
  width: 100%;
  margin: 1.5rem auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const NavTitle = styled.div`
  ${(props) => textStyle(20, 700)(props)}
  color: ${theme.colors.SecondaryGray[900]};
`
const NavRightWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`
const SearchIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  right: -38px;
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
`
const ButtonWrapper = styled.div`
  margin-right: 1.3333rem;
`

const Items = () => {
  const navigate = useNavigate()
  const [bestProducts, setBestProducts] = useState([])
  const [sortedProducts, setSortedProducts] = useState([])
  const selectList = [
    { value: 'recent', name: '최신순' },
    { value: 'favorite', name: '좋아요 순' },
  ]
  const [selectedOption, setSelectedOption] = useState(selectList[0].value)

  const handleAdditem = () => {
    navigate(`/items`)
  }
  // BestItems 데이터 불러오기, bestProducts
  useEffect(() => {
    productService.getProduct(1, 10, 'favorite', '').then((response) => {
      setBestProducts(response.data)
      console.log(response.data)
    })
  }, [])
  // 셀렉트 박스 정렬 useEffect
  useEffect(() => {
    const sorted = [...(bestProducts?.list || [])].sort((a, b) => {
      if (selectedOption === 'recent') {
        return new Date(b.createdAt) - new Date(a.createdAt)
      } else if (selectedOption === 'favorite') {
        return b.favoriteCount - a.favoriteCount
      }
      return 0
    })
    setSortedProducts(sorted)
  }, [bestProducts, selectedOption])

  return (
    <>
      <ItemsNavVar />
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
              onChange={(value) => setSelectedOption(value)}
            />
          </NavRightWrapper>
        </NavVAr>
        <RecentItems products={sortedProducts} />
      </Bone>
    </>
  )
}

export default Items
