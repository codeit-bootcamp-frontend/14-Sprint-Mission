import React, { useState } from 'react'

import Button from '../../component/common/Button'
import ButtonImage from '../../component/common/ButtonImage'
import TextInputPlaceholder from '../../component/common/TextInputPlaceholder'
import Tag from '../../component/common/Tag'

import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'

const AddItem = () => {
  const [productName, setProductName] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [productPrice, setProductPrice] = useState('')
  const [tagInput, setTagInput] = useState('')
  const [productTags, setProductTags] = useState<string[]>([])

  const handleAddTag = () => {
    const trimmedInput = tagInput.trim()
    if (trimmedInput && !productTags.includes(trimmedInput)) {
      setProductTags([...productTags, trimmedInput])
      setTagInput('')
    }
  }

  const handleDeleteTag = (tagToDelete: string) => {
    setProductTags(productTags.filter((tag) => tag !== tagToDelete))
  }
  const handleEnterDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAddTag()
    }
  }

  const isState =
    productName.length >= 1 &&
    productDescription.length >= 1 &&
    productPrice.length >= 1 &&
    tagInput.length >= 1

  return (
    <>
      <Bone>
        <Header>
          <ProductRegister>싱품 등록하기</ProductRegister>
          <ButtonWrapper>
            <Button
              size={42.5}
              paddingHeight={8}
              paddingWidth={23}
              disabled={!isState}
            >
              등록
            </Button>
          </ButtonWrapper>
        </Header>
        <Main>
          <DisplayWrapper>
            <ProductText>상품 이미지</ProductText>
            <ButtonImage />
          </DisplayWrapper>
          <DisplayWrapper>
            <ProductText>상품명</ProductText>
            <TextInputPlaceholder
              placeholder={'상품명을 입력해주세요'}
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </DisplayWrapper>
          <DisplayWrapper>
            <ProductText>상품 소개</ProductText>
            <TextInputPlaceholder
              placeholder={'상품 소개를 입력해주세요'}
              height="282px"
              padding="16px 24px 240px 24px"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </DisplayWrapper>
          <DisplayWrapper>
            <ProductText>판매 가격</ProductText>
            <TextInputPlaceholder
              placeholder={'판매 가격을 입력해주세요'}
              value={productPrice}
              onChange={(e) => setProductPrice(e.target.value)}
            />
          </DisplayWrapper>
          <DisplayWrapper>
            <ProductText>태그</ProductText>
            <TextInputPlaceholder
              placeholder={'태그를 입력해주세요'}
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleEnterDown}
            />
          </DisplayWrapper>
          <TagDisplay>
            {productTags.map((tag, index) => (
              <Tag
                key={index}
                productTags={tag}
                showDelete={true}
                onClick={() => handleDeleteTag(tag)}
              />
            ))}
          </TagDisplay>
        </Main>
      </Bone>
    </>
  )
}

export default AddItem

const Bone = styled.div`
  width: 75rem;
  display: flex;
  align-items: center;
  margin: 1.5rem auto auto auto;
  flex-direction: column;
  @media (max-width: 1199px) {
    width: 43.5rem;
  }
  @media (max-width: 743px) {
    width: 21.625rem;
  }
`
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 1.8125rem;
`
const ProductRegister = styled.div`
  ${(props) => textStyle(20, 700)(props)}
  color: ${theme.colors.SecondaryGray[800]};
`
const ButtonWrapper = styled.div`
  width: max-content;
`
const Main = styled.div`
  width: 100%;
  margin-bottom: 78px;
`
const DisplayWrapper = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  @media (max-width: 743px) {
    margin-bottom: 1.5rem;
  }
`
const ProductText = styled.div`
  ${(props) => textStyle(18, 700)(props)}
  color: ${theme.colors.SecondaryGray[800]};
  margin-bottom: 1rem;
`
const TagDisplay = styled.div`
  display: flex;
  gap: 0.75rem;
  width: 100%;
  flex-wrap: wrap;
`
