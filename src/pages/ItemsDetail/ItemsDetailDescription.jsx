import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import productService from '../../api/services/productService'
import Tag from '../../component/common/Tag'
import { formatDate } from './../../styles/datetime'

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
`
const ProductImage = styled.img`
  width: 30.375rem;
  height: 30.375rem;
  border-radius: 1rem;
`
const TitleDescription = styled.div`
  width: 43.125rem;
  height: 31rem;
  position: relative;
`
const ProductTitleWrapper = styled.div`
  height: 7rem;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  border-bottom: 1px solid ${theme.colors.SecondaryGray[200]};
`
const ProductName = styled.div`
  ${(props) => textStyle(24, 500)(props)}
  color: ${theme.colors.SecondaryGray[800]};
`
const ProductPrice = styled.div`
  ${(props) => textStyle(40, 600)(props)}
  color: ${theme.colors.SecondaryGray[800]};
`
const ProductDescriptionWrapper = styled.div`
  margin: 1.5rem 0;
  height: auto;
`
const ProductDescriptionText = styled.div`
  ${(props) => textStyle(16, 600)(props)}
  color: ${theme.colors.SecondaryGray[600]};
  height: 26px;
  margin-bottom: 1rem;
`
const ProductDescription = styled.div`
  ${(props) => textStyle(16, 400)(props)}
  color: ${theme.colors.SecondaryGray[600]};
`
const ProductTagWrapper = styled.div`
  ${(props) => textStyle(16, 400)(props)}
  color: ${theme.colors.SecondaryGray[600]};
`
const ProductTag = styled.div`
  display: flex;
  gap: 0.5rem;
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
  const [productsId, setProductsId] = useState([])
  const product = location.state?.product
  console.log(product)
  console.log(productsId)

  useEffect(() => {
    productService.getProductId(product.id).then((response) => {
      setProductsId(response.data)
    })
  }, [])

  return (
    <Bone>
      <ProductImage src={productsId.images} alt={productsId.name} />
      <TitleDescription>
        <ProductTitleWrapper>
          <ProductName>{productsId.name}</ProductName>
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
              <UpdatedAt>{formatDate(productsId.updatedAt)}</UpdatedAt>
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
