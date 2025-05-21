'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { GetProductIdTypes } from '../../types/product'

import HeartInactive from '../../../public/assets/image/heart_inactive.png'
import NoImage from '../../../public/assets/image/no_image.png'

import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'

const RecentItems = ({ products }: { products: GetProductIdTypes[] }) => {
  const [itemsDisplay, setItemsDisplay] = useState(1)

  useEffect(() => {
    const handleReasize = () => {
      if (window.innerWidth <= 743) {
        setItemsDisplay(4)
      } else if (window.innerWidth >= 744 && window.innerWidth <= 1023) {
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
              href={`/items/${product.id}`}
              prefetch={true}
            >
              <RecentItemKey key={product.id}>
                <RecentItemImage
                  src={
                    Array.isArray(product.images) && product.images.length > 0
                      ? product.images[0]
                      : NoImage.src
                  }
                  alt={product.name}
                />
                <ProductDescription>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>
                    {product.price.toLocaleString('ko-KR')}원
                  </ProductPrice>
                  <ProductFavoriteCount>
                    <Image src={HeartInactive} alt="HeartInactive" />
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

const RecentItem = styled.div`
  height: 67.4rem;
  @media (max-width: 743px) {
    height: fit-content;
  }
`
const RecentItemKey = styled.div`
  display: flex;
  height: 31.7rem;
  width: 22.1rem;
  justify-content: center;
  flex-direction: column;
  img {
    width: 22.1rem;
    height: 22.1rem;
    border-radius: 1rem;
  }
  @media (max-width: 743px) {
    height: 26.4rem;
    width: 16.8rem;
    img {
      width: 16.8rem;
      height: 16.8rem;
      border-radius: 1rem;
    }
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
  row-gap: 4rem;
  @media (max-width: 743px) {
    row-gap: 2rem;
  }
`
const ProductDescription = styled.div`
  width: 100%;
  height: 8rem;
  margin-top: 1.6rem;
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
  gap: 0.4rem;
  img {
    width: 1.6rem;
    height: 1.6rem;
  }
`
