import React, { useState, useEffect } from 'react'
import ItemsNavVar from '../../component/common/ItemsNavVar'
import Button from '../../component/common/Button'
import ButtonImage from '../../component/common/ButtonImage'
import Placeholder from '../../component/common/Placeholder'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'
import Tag from '../../component/common/Tag'

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
const Main = styled.div`
  width: 100%;
  margin-bottom: 78px;
`
const ProductImage = styled.div`
  width: 100%;
  margin-bottom: 14px;
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
const AddItem = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [tagInput, setTagInput] = useState('')
  const [tags, setTags] = useState([])
  const [isState, setIsState] = useState(false)
  const isItemsPage =
    location.pathname === '/items' || location.pathname === '/additem'
  const isBoardsPage = location.pathname === '/boards'

  const handleAddTag = () => {
    const trimmedInput = tagInput.trim()
    if (trimmedInput && !tags.includes(trimmedInput)) {
      setTags([...tags, trimmedInput])
      setTagInput('')
    }
  }

  const handleDeleteTag = (tagToDelete) => {
    setTags(tags.filter((tag) => tag !== tagToDelete))
  }
  const handleEnterDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleAddTag()
    }
  }

  useEffect(() => {
    const valid =
      name.length >= 1 &&
      description.length >= 1 &&
      price.length >= 1 &&
      tagInput.length >= 1
    setIsState(valid)
  }, [name, description, price, tagInput])

  return (
    <>
      <ItemsNavVar isItemsPage={isItemsPage} isBoardsPage={isBoardsPage} />
      <Bone>
        <Header>
          <ProductRegister>싱품 등록하기</ProductRegister>
          <Button size={42.5} width={74} disabled={!isState}>
            등록
          </Button>
        </Header>
        <Main>
          <ProductImage>
            <ProductText>상품 이미지</ProductText>
            <ButtonImage />
          </ProductImage>
          <ProductImage>
            <ProductText>상품명</ProductText>
            <Placeholder
              placeholder={'상품명을 입력해주세요'}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </ProductImage>
          <ProductImage>
            <ProductText>상품 소개</ProductText>
            <Placeholder
              placeholder={'상품 소개를 입력해주세요'}
              height="282px"
              padding="16px 24px 240px 24px"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </ProductImage>
          <ProductImage>
            <ProductText>판매 가격</ProductText>
            <Placeholder
              placeholder={'판매 가격을 입력해주세요'}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </ProductImage>
          <ProductImage>
            <ProductText>태그</ProductText>
            <Placeholder
              placeholder={'태그를 입력해주세요'}
              value={tagInput}
              onChange={(e) => setTagInput(e.target.value)}
              onKeyDown={handleEnterDown}
            />
          </ProductImage>
          <TagDisplay>
            {tags.map((tag, index) => (
              <Tag
                key={index}
                tags={tag}
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
