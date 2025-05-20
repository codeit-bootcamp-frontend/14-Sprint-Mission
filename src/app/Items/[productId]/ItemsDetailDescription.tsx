'use client'

import React from 'react'
import { useParams } from 'next/navigation'

import { useGetProductId } from '../../hooks/useProductService'
import Tag from '../../common/Tag'
import { formatDate } from '../../utils/datetime'

import Setting from '../../../../public/assets/svg/Setting.svg'
import ProfileIcon from '../../../../public/assets/svg/ProfileIcon.svg'
import HeartInactive from '../../../../public/assets/image/HeartInactive.png'

import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'
import Image from 'next/image'

const ItemsDetailDescription = () => {
  const params = useParams()
  const productId = Number(params.productId)

  // 커스텀 훅으로 데이터 fetch
  const product = useGetProductId(productId)

  if (!product) {
    return <div>상품 정보를 불러오는 중입니다...</div>
  }
  return (
    <Bone>
      <ProductImage src={product.images[0]} alt={product.name} />
      <TitleDescription>
        <ProductTitleWrapper>
          <ProductTitle>
            <ProductName>{product.name}</ProductName>
            <Image src={Setting} alt="상품설정버튼" />
          </ProductTitle>
          <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
        </ProductTitleWrapper>
        <ProductDescriptionWrapper>
          <ProductDescriptionText>상품 소개</ProductDescriptionText>
          <ProductDescription>{product.description}</ProductDescription>
        </ProductDescriptionWrapper>
        <ProductTagWrapper>
          <ProductDescriptionText>상품 태그</ProductDescriptionText>
          <ProductTag>
            {product.tags?.map((tag, index) => (
              <Tag key={index} tag={tag} />
            ))}
          </ProductTag>
        </ProductTagWrapper>
        <ProductFooter>
          <ProductFooterLeft>
            <Image src={ProfileIcon} alt="프로필아이콘" />
            <div>
              <OwnerNickname>{product.ownerNickname}</OwnerNickname>
              <UpdatedAt>{formatDate(product.createdAt)}</UpdatedAt>
            </div>
          </ProductFooterLeft>
          <ProductFooterRight>
            <Image src={HeartInactive} alt="하트활성화/비활성화" />
            <div>{product.favoriteCount}</div>
          </ProductFooterRight>
        </ProductFooter>
      </TitleDescription>
    </Bone>
  )
}

export default ItemsDetailDescription

const Bone = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 4rem;
  border-bottom: 1px solid ${theme.colors.SecondaryGray[200]};
  @media (max-width: 1023px) {
    align-items: flex-start;
  }
  @media (max-width: 743px) {
    flex-direction: column;
    padding-bottom: 2.4rem;
  }
`
const ProductImage = styled.img`
  width: 48.6rem;
  height: 48.6rem;
  border-radius: 1rem;
  @media (max-width: 1023px) {
    width: 34rem;
    height: 34rem;
  }
  @media (max-width: 743px) {
    margin-bottom: 1rem;
  }
`
const TitleDescription = styled.div`
  width: 69rem;
  height: 49.6rem;
  position: relative;
  @media (max-width: 1023px) {
    width: 34rem;
    height: 48.4rem;
  }
  @media (max-width: 743px) {
    height: 49.2rem;
  }
`
const ProductTitleWrapper = styled.div`
  height: 9.8rem;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  border-bottom: 1px solid ${theme.colors.SecondaryGray[200]};
  @media (max-width: 743px) {
    height: 6.6rem;
    justify-content: flex-start;
  }
`
const ProductTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`
const ProductName = styled.div`
  ${(props) => textStyle(24, 600)(props)}
  color: ${theme.colors.SecondaryGray[800]};
  @media (max-width: 1023px) {
    ${(props) => textStyle(20, 600)(props)}
  }
  @media (max-width: 743px) {
    ${(props) => textStyle(16, 600)(props)}
  }
`
const ProductPrice = styled.div`
  ${(props) => textStyle(40, 600)(props)}
  color: ${theme.colors.SecondaryGray[800]};
  @media (max-width: 1023px) {
    ${(props) => textStyle(32, 600)(props)}
  }
  @media (max-width: 743px) {
    ${(props) => textStyle(24, 600)(props)}
  }
`
const ProductDescriptionWrapper = styled.div`
  margin: 2.4rem 0;
  height: auto;
  @media (max-width: 1023px) {
    margin: 1rem 0 2.3rem;
  }
`
const ProductDescriptionText = styled.div`
  ${(props) => textStyle(16, 600)(props)}
  color: ${theme.colors.SecondaryGray[600]};

  margin-bottom: 1rem;
  @media (max-width: 1023px) {
    ${(props) => textStyle(14, 600)(props)}
  }
`
const ProductDescription = styled.div`
  ${(props) => textStyle(16, 400)(props)}
  color: ${theme.colors.SecondaryGray[600]};
`
const ProductTagWrapper = styled.div`
  ${(props) => textStyle(16, 400)(props)}
  color: ${theme.colors.SecondaryGray[600]};
  @media (max-width: 1023px) {
    ${(props) => textStyle(14, 600)(props)}
  }
  @media (max-width: 743px) {
    margin-bottom: 2.5rem;
  }
`
const ProductTag = styled.div`
  display: flex;
  gap: 0.8rem;
  flex-direction: row;
  flex-wrap: wrap;
`
const ProductFooter = styled.div`
  width: 100%;
  position: absolute;
  bottom: 1px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ProductFooterLeft = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  gap: 1.6rem;
`
const ProductFooterRight = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;
  padding: 0.4rem 1.2rem;
  border: 1px solid ${theme.colors.SecondaryGray[200]};
  border-radius: 3.5rem;
`
const OwnerNickname = styled.div`
  ${(props) => textStyle(14, 500)(props)}
  color: ${theme.colors.SecondaryGray[600]};
`
const UpdatedAt = styled.div`
  ${(props) => textStyle(14, 400)(props)}
  color: ${theme.colors.SecondaryGray[400]};
`
