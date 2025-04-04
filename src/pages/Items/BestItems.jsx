import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import HeartInactive from '../../assets/image/HeartInactive.png'

import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'
import styled from 'styled-components'

const Bone = styled.div`
  height: 26.625rem;
  width: auto;
  margin-bottom: 2.5rem;
  @media (max-width: 1199px) {
    height: 27.125rem;
  }
  @media (max-width: 743px) {
    margin-bottom: 1.5rem;
  }
`
const Title = styled.div`
  ${(props) => textStyle(20, 700)(props)}
  color: ${theme.colors.SecondaryGray[900]};
  margin-bottom: 1rem;
`

const BestItem = styled.div`
  display: flex;
  height: 23.625rem;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;

  .button {
    transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      transform: scale(1.05);
    }

    &:active {
      transform: scale(0.95);
    }
  }
`
const BestItemImage = styled.img`
  width: 17.625rem;
  height: 17.625rem;
  border-radius: 1rem;
  @media (max-width: 1199px) {
    height: 21.437rem;
    width: 100%;
  }
`
const BestItemsDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1199px) {
    gap: 10px;
  }
`
const ProductDescription = styled.div`
  width: 100%;
  height: 5rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1199px) {
    margin-top: 0.625rem;
  }
`
const ProductName = styled.div`
  ${(props) => textStyle(14, 500)(props)}
  color: ${theme.colors.SecondaryGray[800]};
`
const ProductPrice = styled.div`
  ${(props) => textStyle(16, 700)(props)}
  color: ${theme.colors.SecondaryGray[800]};
`
const ProductFavoriteCount = styled.div`
  ${(props) => textStyle(12, 500)(props)}
  color: ${theme.colors.SecondaryGray[600]};
  display: flex;
  align-items: center;
`
const HeartInactiveImage = styled.img`
  width: 1rem;
  height: 1rem;
`
const BestItems = ({ products }) => {
  const [itemsDisplay, setItemsDisplay] = useState(1)
  const list = products?.list || [] // list가 없을 수도 있으니 옵셔널체이닝으로  list가 없을 때 빈배열을 출력하여 map에 이상이 없도록 함

  useEffect(() => {
    const handleReasize = () => {
      if (window.innerWidth <= 743) {
        setItemsDisplay(1)
      } else if (window.innerWidth >= 743 && window.innerWidth <= 1199) {
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
    <Bone>
      <Title>베스트 상품</Title>

      <BestItemsDisplay>
        {list.slice(0, itemsDisplay).map((product) => (
          <Link
            key={product.id}
            to={`/items/${product.id}`}
            state={{ product }}
          >
            <BestItem key={product.id}>
              <BestItemImage src={product.images} alt={product.name} />
              <ProductDescription>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>
                  {product.price.toLocaleString('ko-KR')}원
                </ProductPrice>
                <ProductFavoriteCount>
                  <HeartInactiveImage src={HeartInactive} alt="HeartInactive" />
                  {product.favoriteCount}
                </ProductFavoriteCount>
              </ProductDescription>
            </BestItem>
          </Link>
        ))}
      </BestItemsDisplay>
    </Bone>
  )
}

export default BestItems
