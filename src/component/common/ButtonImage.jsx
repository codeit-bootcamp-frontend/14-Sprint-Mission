import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'
import Plus from '../../assets/svg/Plus.svg'
import Delete from '../../assets/svg/Delete.svg'
const ImageWrapper = styled.div`
  width: 100%;
  height: 17.625rem;
  display: flex;
  gap: 24px;
`
const Bone = styled.div`
  width: 17.625rem;
  height: 17.625rem;
  background-color: #e5e7eb;
  border-radius: 12px;
  cursor: pointer;
`
const Container = styled.div`
  width: fit-content;
  height: 5.375rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  top: 98px;
  left: 104px;
`
const ImageInput = styled.input`
  width: 17.625rem;
  height: 17.625rem;
  background-color: #e5e7eb;
  border-radius: 12px;
  cursor: pointer;
  display: none;
`
const Text = styled.div`
  ${(props) => textStyle(16, 400)(props)}
  color: ${theme.colors.SecondaryGray[400]};
`
const PreviewImage = styled.img`
  width: 17.625rem;
  height: 17.625rem;
  object-fit: cover;
`
const DeleteIcon = styled.img`
  width: 1.375rem;
  height: 1.5rem;
  position: relative;
  left: -3.75rem;
  top: 0.75rem;
  cursor: pointer;
`
const ButtonImage = () => {
  const fileInputRef = useRef(null)
  const [imagePreview, setImagePreview] = useState(null)

  const handleButton = () => {
    fileInputRef.current.click()
  }

  const handleImageChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      const imageUrl = URL.createObjectURL(file)
      setImagePreview(imageUrl)
    }
  }

  const handleDeleteClick = () => {
    setImagePreview(null)
  }
  return (
    <>
      <ImageWrapper>
        <Bone onClick={handleButton}>
          <Container>
            <img src={Plus} />
            <Text>이미지 등록</Text>
          </Container>
        </Bone>
        {imagePreview && (
          <>
            <PreviewImage src={imagePreview} alt="미리보기 이미지" />
            <DeleteIcon
              src={Delete}
              alt="삭제버튼"
              onClick={handleDeleteClick}
            />
          </>
        )}
      </ImageWrapper>
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
