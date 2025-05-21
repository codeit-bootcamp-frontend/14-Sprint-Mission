'use client'
import React, { useState } from 'react'

import ItemsNavVar from '../../components/domain/Nav/ItemsNavVar'
import Button from '../../components/common/Button'
import ButtonImage from '../../components/common/ButtonImageInput'
import TextInputPlaceholder from '../../components/common/TextInputPlaceholder'
import Tag from '../../components/common/Tag'

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
  // TextInputPlaceholder는 textarea 컴포넌트 -> onKeyDown에 전달한 함수는 HTMLInputElement용 타입이라 교체
  const handleEnterDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
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
      <ItemsNavVar isItemsPage={true} isBoardsPage={false} />
      <Bone>
        <Header>
          <ProductRegister>싱품 등록하기</ProductRegister>
          <ButtonWrapper>
            <RegisterButton size={42.5} disabled={!isState}>
              등록
            </RegisterButton>
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
                tag={tag}
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
  width: 120rem;
  display: flex;
  align-items: center;
  margin: 1.5rem auto 6.9rem auto;
  flex-direction: column;
  @media (max-width: 1023px) {
    width: 69.6rem;
    margin-bottom: 7.8rem;
  }
  @media (max-width: 743px) {
    width: 34.6rem;
    margin-bottom: 7rem;
  }
`
const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 2.4rem;
`
const ProductRegister = styled.div`
  ${(props) => textStyle(20, 700)(props)}
  color: ${theme.colors.SecondaryGray[800]};
`
const ButtonWrapper = styled.div`
  width: max-content;
`
const RegisterButton = styled(Button)`
  padding: 0.8rem 2.3rem;
  width: max-content;
`
const Main = styled.div`
  width: 100%;
`
const DisplayWrapper = styled.div`
  width: 100%;
  margin-bottom: 3.2rem;
  @media (max-width: 743px) {
    margin-bottom: 2.4rem;
  }
`
const ProductText = styled.div`
  ${(props) => textStyle(18, 700)(props)}
  color: ${theme.colors.SecondaryGray[800]};
  margin-bottom: 1.6rem;
`
const TagDisplay = styled.div`
  display: flex;
  gap: 0.75rem;
  width: 100%;
  flex-wrap: wrap;
`
