import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'
import HeartInactive from '../../assets/image/HeartInactive.png'
const Bone = styled.div`
  height: 26.625rem;
  width: auto;
`
const Title = styled.div`
  ${(props) => textStyle(20, 700)(props)}
  color: ${theme.colors.SecondaryGray[900]};
  margin-bottom: 1rem;
`

const BestItem = styled.div`
  display: flex;
  height: 23.625rem;
  width: 17.625rem;
  justify-content: center;
  flex-direction: column;
`
const BestItemImage = styled.img`
  width: 17.625rem;
  height: 17.625rem;
  border-radius: 1rem;
`
const BestItemsDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ProductDescription = styled.div`
  width: 100%;
  height: 5rem;
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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
  const list = products?.list || [] // list가 없을 수도 있으니 옵셔널체이닝으로  list가 없을 때 빈배열을 출력하여 map에 이상이 없도록 함

  return (
    <Bone>
      <Title>베스트 상품</Title>

      <BestItemsDisplay>
        {list.map((product) => (
          <BestItem key={product.id}>
            <BestItemImage src={product.images} alt={product.name} />
            <ProductDescription>
              <ProductName>{product.name}</ProductName>
              <ProductPrice>{product.price}원</ProductPrice>
              <ProductFavoriteCount>
                <HeartInactiveImage src={HeartInactive} alt="HeartInactive" />
                {product.favoriteCount}
              </ProductFavoriteCount>
            </ProductDescription>
          </BestItem>
        ))}
      </BestItemsDisplay>
    </Bone>
  )
}

export default BestItems
