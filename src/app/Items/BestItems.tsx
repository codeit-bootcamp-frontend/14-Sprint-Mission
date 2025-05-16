'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

import { GetProductIdTypes } from '../types/product'

import HeartInactive from '../../../public/assets/image/HeartInactive.png'

import { theme } from '../styles/theme'
import { textStyle } from '../styles/textStyle'
import styled from 'styled-components'
import Image from 'next/image'

interface BestItemsProps {
  products: GetProductIdTypes[]
}

const BestItems = ({ products }: BestItemsProps) => {
  const [itemsDisplay, setItemsDisplay] = useState(1)
  const list = products || []
  console.log(products)
  useEffect(() => {
    const handleReasize = () => {
      if (window.innerWidth <= 743) {
        setItemsDisplay(1)
      } else if (window.innerWidth <= 1023) {
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
          <Link key={product.id} href={`/items/${product.id}`}>
            <BestItem>
              <BestItemImage
                src={
                  Array.isArray(product.images) && product.images.length > 0
                    ? product.images[0]
                    : ''
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
            </BestItem>
          </Link>
        ))}
      </BestItemsDisplay>
    </Bone>
  )
}

export default BestItems

const Bone = styled.div`
  height: 42.6rem;
  width: auto;
  margin-bottom: 4rem;
  @media (max-width: 1023px) {
    height: 48.2rem;
  }
  @media (max-width: 743px) {
    margin-bottom: 2.4rem;
  }
`
const Title = styled.div`
  ${(props) => textStyle(20, 700)(props)}
  color: ${theme.colors.SecondaryGray[900]};
  margin-bottom: 1.6rem;
`

const BestItem = styled.div`
  display: flex;
  height: 37.8rem;
  flex-direction: column;
  cursor: pointer;
  justify-content: space-between;
  img {
    width: 28.2rem;
    height: 28.2rem;
    border-radius: 1rem;
  }
  @media (max-width: 1023px) {
    height: 43.4rem;
    img {
      width: 34.3rem;
      height: 34.3rem;
    }
  }
`
const BestItemImage = styled.img`
  width: 17.625rem;
  height: 17.625rem;
  border-radius: 1rem;
  @media (max-width: 1023px) {
    height: 21.437rem;
    width: 100%;
  }
`
const BestItemsDisplay = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1023px) {
    gap: 10px;
  }
`
const ProductDescription = styled.div`
  width: 100%;
  height: 8rem;
  margin-top: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 1023px) {
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
  gap: 0.4rem;
  img {
    width: 1.6rem;
    height: 1.6rem;
  }
`
