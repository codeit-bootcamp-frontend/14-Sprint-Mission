import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'
import HeartInactive from '../../assets/image/HeartInactive.png'

const RecentItem = styled.div`
  height: 42.125rem;
`
const RecentItemKey = styled.div`
  display: flex;
  height: 19.813rem;
  width: 13.8125rem;
  justify-content: center;
  flex-direction: column;
`
const RecentItemImage = styled.img`
  width: inherit;
  height: 100%;
  border-radius: 1rem;
`
const RecentItemsDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: flex-start;
  row-gap: 2.5rem;
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
const RecentItems = ({ products }) => {
  return (
    <>
      <RecentItem>
        <RecentItemsDisplay>
          {products.slice(0, 10).map((product) => (
            <RecentItemKey key={product.id}>
              <RecentItemImage src={product.images} alt={product.name} />
              <ProductDescription>
                <ProductName>{product.name}</ProductName>
                <ProductPrice>{product.price}원</ProductPrice>
                {/*고치기: 화폐 세자리수 , 삽입 해야함*/}
                <ProductFavoriteCount>
                  <HeartInactiveImage src={HeartInactive} alt="HeartInactive" />
                  {product.favoriteCount}
                </ProductFavoriteCount>
              </ProductDescription>
            </RecentItemKey>
          ))}
        </RecentItemsDisplay>
      </RecentItem>
    </>
  )
}

export default RecentItems
