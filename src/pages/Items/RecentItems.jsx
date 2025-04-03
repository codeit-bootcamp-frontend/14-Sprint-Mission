import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import HeartInactive from '../../assets/image/HeartInactive.png'
import NoImage from '../../assets/image/NoImage.png'

import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'

const RecentItem = styled.div`
  height: 42.125rem;
  @media (max-width: 743px) {
    height: 35rem;
  }
`
const RecentItemKey = styled.div`
  display: flex;
  height: 19.813rem;
  width: 13.8125rem;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 743px) {
    height: 16.5rem;
    width: 10.5rem;
  }
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
  @media (max-width: 743px) {
    row-gap: 2rem;
  }
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
  const [itemsDisplay, setItemsDisplay] = useState(1)

  useEffect(() => {
    const handleReasize = () => {
      if (window.innerWidth <= 743) {
        setItemsDisplay(4)
      } else if (window.innerWidth >= 744 && window.innerWidth <= 1199) {
        setItemsDisplay(6)
      } else {
        setItemsDisplay(10)
      }
    }
    handleReasize()
    window.addEventListener('resize', handleReasize)

    return () => window.removeEventListener('resize', handleReasize)
  }, [])
  return (
    <>
      <RecentItem>
        <RecentItemsDisplay>
          {products.slice(0, itemsDisplay).map((product) => (
            <Link
              key={product.id}
              to={`/items/${product.id}`}
              state={{ product }}
            >
              <RecentItemKey key={product.id}>
                <RecentItemImage
                  src={
                    product.images?.length > 0 &&
                    !product.images.includes('https://via.placeholder.com/300')
                      ? product.images[0]
                      : NoImage
                  }
                  alt={product.name}
                />
                <ProductDescription>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>
                    {product.price.toLocaleString()}원
                  </ProductPrice>
                  <ProductFavoriteCount>
                    <HeartInactiveImage
                      src={HeartInactive}
                      alt="HeartInactive"
                    />
                    {product.favoriteCount}
                  </ProductFavoriteCount>
                </ProductDescription>
              </RecentItemKey>
            </Link>
          ))}
        </RecentItemsDisplay>
      </RecentItem>
    </>
  )
}

export default RecentItems
