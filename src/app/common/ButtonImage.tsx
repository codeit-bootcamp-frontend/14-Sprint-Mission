import React, { useRef, useState } from 'react'

import Plus from '../../../public/assets/svg/Plus.svg'
import Delete from '../../../public/assets/svg/Delete.svg'

import styled from 'styled-components'
import { theme } from '../styles/theme'
import { textStyle } from '../styles/textStyle'
import Image from 'next/image'

const ButtonImage = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [imagePreview, setImagePreview] = useState('')
  const [errorMeassage, setErrorMeassage] = useState('')

  const handleButton = () => {
    if (fileInputRef.current) {
      // if문을 쓰는 이유는 useRef 값이 null일 수도 있기 때문문
      fileInputRef.current.click()
    }
  }

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      if (imagePreview) {
        setErrorMeassage('*이미지 등록은 최대 1개까지 가능합니다.')
        return
      }
      const imageUrl = URL.createObjectURL(file)
      setImagePreview(imageUrl)
      setErrorMeassage('')
    }
  }

  const handleDeleteClick = () => {
    setImagePreview('')
  }
  console.log(imagePreview)
  return (
    <>
      <ImageWrapper>
        <Bone onClick={handleButton}>
          <Container>
            <Image src={Plus} alt="이미지등록아이콘" />
            <Text>이미지 등록</Text>
          </Container>
        </Bone>
        {imagePreview && (
          <div>
            <PreviewImageWrapper>
              <img src={imagePreview} alt="미리보기 이미지" />
            </PreviewImageWrapper>
            <DeleteIcon>
              <Image src={Delete} alt="삭제버튼" onClick={handleDeleteClick} />
            </DeleteIcon>
          </div>
        )}
      </ImageWrapper>
      {errorMeassage && <ErrorMessage>{errorMeassage}</ErrorMessage>}
      <ImageInput
        type="file"
        ref={fileInputRef}
        accept="image/*"
        onChange={handleImageChange}
      />
    </>
  )
}

export default ButtonImage

const ImageWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  gap: 24px;
  @media (max-width: 1023px) {
    gap: 10px;
  }
  @media (max-width: 743px) {
    width: 34.6rem;
    height: 16.8rem;
    position: relative;
  }
`
const Bone = styled.div`
  width: 28.2rem;
  height: 28.2rem;
  background-color: #e5e7eb;
  border-radius: 12px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  @media (max-width: 1023px) {
    width: 16.8rem;
    height: 16.8rem;
  }
`
const Container = styled.div`
  width: fit-content;
  height: 8.6rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`
const ImageInput = styled.input`
  display: none;
`
const Text = styled.div`
  ${(props) => textStyle(16, 400)(props)}
  color: ${theme.colors.SecondaryGray[400]};
`
const PreviewImageWrapper = styled.div`
  width: fit-content;
  height: fit-content;
  border-radius: 12px;

  img {
    width: 28.2rem;
    height: 28.2rem;
    border-radius: 12px;
  }
  @media (max-width: 1023px) {
    img {
      width: 16.8rem;
      height: 16.8rem;
    }
  }
`

const DeleteIcon = styled.div`
  img {
    width: 2rem;
    height: 2rem;
    position: relative;
    right: -25.25rem;
    top: -27.25rem;
    cursor: pointer;
  }
  @media (max-width: 1023px) {
    img {
      right: -14.25rem;
      top: -16.25rem;
    }
  }
`
const ErrorMessage = styled.div`
  ${(props) => textStyle(16, 400)(props)}
  color: ${theme.colors.error};
  margin-top: 1rem;
`
