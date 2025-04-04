import React from 'react'
import { useLocation } from 'react-router-dom'

import { useGetProductId } from '../../hooks/useProductService'
import Tag from '../../component/common/Tag'
import { formatDate } from '../../utils/datetime'

import Setting from '../../assets/svg/Setting.svg'
import ProfileIcon from '../../assets/svg/ProfileIcon.svg'
import HeartInactive from '../../assets/image/HeartInactive.png'

import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'

const Bone = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2.5rem;
  border-bottom: 1px solid ${theme.colors.SecondaryGray[200]};
  @media (max-width: 1199px) {
    align-items: flex-start;
  }
  @media (max-width: 743px) {
    flex-direction: column;
  }
`
const ProductImage = styled.img`
  width: 30.375rem;
  height: 30.375rem;
  border-radius: 1rem;
  @media (max-width: 1199px) {
    width: 21.25rem;
    height: 21.25rem;
  }
  @media (max-width: 743px) {
    width: 100%;
    height: 21.4375rem;
    margin-bottom: 1rem;
  }
`
const TitleDescription = styled.div`
  width: 43.125rem;
  height: 31rem;
  position: relative;
  @media (max-width: 1199px) {
    width: 21.25rem;
    height: 30.25rem;
  }
  @media (max-width: 743px) {
    height: 29.25rem;
  }
`
const ProductTitleWrapper = styled.div`
  height: 7rem;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  border-bottom: 1px solid ${theme.colors.SecondaryGray[200]};
  @media (max-width: 743px) {
    height: 5.125rem;
  }
`
const ProductTitle = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`
const ProductName = styled.div`
  ${(props) => textStyle(24, 600)(props)}
  color: ${theme.colors.SecondaryGray[800]};
  @media (max-width: 1199px) {
    ${(props) => textStyle(20, 600)(props)}
  }
  @media (max-width: 743px) {
    ${(props) => textStyle(16, 600)(props)}
  }
`
const ProductPrice = styled.div`
  ${(props) => textStyle(40, 600)(props)}
  color: ${theme.colors.SecondaryGray[800]};
  @media (max-width: 1199px) {
    ${(props) => textStyle(32, 600)(props)}
  }
  @media (max-width: 743px) {
    ${(props) => textStyle(24, 600)(props)}
  }
`
const ProductDescriptionWrapper = styled.div`
  margin: 1.5rem 0;
  height: auto;
  @media (max-width: 743px) {
    margin: 1rem 0 1.5rem;
  }
`
const ProductDescriptionText = styled.div`
  ${(props) => textStyle(16, 600)(props)}
  color: ${theme.colors.SecondaryGray[600]};
  height: 26px;
  margin-bottom: 1rem;
  @media (max-width: 1199px) {
    ${(props) => textStyle(14, 600)(props)}
  }
  @media (max-width: 743px) {
    margin: 0.5rem 0;
  }
`
const ProductDescription = styled.div`
  ${(props) => textStyle(16, 400)(props)}
  color: ${theme.colors.SecondaryGray[600]};
`
const ProductTagWrapper = styled.div`
  ${(props) => textStyle(16, 400)(props)}
  color: ${theme.colors.SecondaryGray[600]};
  @media (max-width: 1199px) {
    ${(props) => textStyle(14, 600)(props)}
  }
  @media (max-width: 743px) {
    margin-bottom: 2.5rem;
  }
`
const ProductTag = styled.div`
  display: flex;
  gap: 0.5rem;
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
  gap: 1rem;
`
const ProductFooterRight = styled.div`
  display: flex;
  gap: 4px;
  padding: 4px 12px;
  border: 1px solid ${theme.colors.SecondaryGray[200]};
  border-radius: 35px;
`
const OwnerNickname = styled.div`
  ${(props) => textStyle(14, 500)(props)}
  color: ${theme.colors.SecondaryGray[600]};
`
const UpdatedAt = styled.div`
  ${(props) => textStyle(14, 400)(props)}
  color: ${theme.colors.SecondaryGray[400]};
`
const ItemsDetailDescription = () => {
  const location = useLocation() // product 데어터 받기
  // useGetProductId 이용
  const product = location.state?.product
  const productsId = useGetProductId(product.id)

  return (
    <Bone>
      <ProductImage src={productsId.images} alt={productsId.name} />
      <TitleDescription>
        <ProductTitleWrapper>
          <ProductTitle>
            <ProductName>{productsId.name}</ProductName>
            <img src={Setting} alt="상품설정버튼" />
          </ProductTitle>
          <ProductPrice>{product.price.toLocaleString()}원</ProductPrice>
        </ProductTitleWrapper>
        <ProductDescriptionWrapper>
          <ProductDescriptionText>상품 소개</ProductDescriptionText>
          <ProductDescription>{productsId.description}</ProductDescription>
        </ProductDescriptionWrapper>
        <ProductTagWrapper>
          <ProductDescriptionText>상품 태그</ProductDescriptionText>
          <ProductTag>
            {productsId.tags?.map((tag, index) => (
              <Tag key={index} tags={tag} />
            ))}
          </ProductTag>
        </ProductTagWrapper>
        <ProductFooter>
          <ProductFooterLeft>
            <img src={ProfileIcon} alt="프로필아이콘" />
            <div>
              <OwnerNickname>{productsId.ownerNickname}</OwnerNickname>
              <UpdatedAt>{formatDate(productsId.createdAt)}</UpdatedAt>
            </div>
          </ProductFooterLeft>
          <ProductFooterRight>
            <img src={HeartInactive} />
            <div>{productsId.favoriteCount}</div>
          </ProductFooterRight>
        </ProductFooter>
      </TitleDescription>
    </Bone>
  )
}

export default ItemsDetailDescription
