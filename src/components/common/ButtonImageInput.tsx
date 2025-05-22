import React, { useRef, useState } from 'react'
import Image from 'next/image'

import Plus from '../../../public/assets/svg/plus_icon.svg'
import Delete from '../../../public/assets/svg/delete_tag.svg'

import styles from './ButtonImageInput.module.scss'

const ButtonImageInput = () => {
  const fileInputRef = useRef<HTMLInputElement>(null)
  const [imagePreview, setImagePreview] = useState('')
  const [errorMeassage, setErrorMeassage] = useState('')

  const handleButton = () => {
    if (fileInputRef.current) {
      // if문을 쓰는 이유는 useRef 값이 null일 수도 있기 때문문
      fileInputRef.current?.click()
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
      <div className={styles['image-wrapper']}>
        <div className={styles['bone']} onClick={handleButton}>
          <div className={styles['container']}>
            <Image src={Plus} alt="이미지등록아이콘" />
            <div className={styles['text']}>이미지 등록</div>
          </div>
        </div>
        {imagePreview && (
          <div>
            <div className={styles['preview-image-wrapper']}>
              <img src={imagePreview} alt="미리보기 이미지" />
            </div>
            <div className={styles['delete-icon']}>
              <Image src={Delete} alt="삭제버튼" onClick={handleDeleteClick} />
            </div>
          </div>
        )}
      </div>
      {errorMeassage && (
        <div className={styles['error-message']}>{errorMeassage}</div>
      )}
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        onChange={handleImageChange}
      />
    </>
  )
}

export default ButtonImageInput
