'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'

import { useGetCommentService } from '../../../hooks/useCommentService'
import ItemsDetailQuestionArrary from './ItemsDetailQuestionArrary'
import TextInputPlaceholder from '../../../components/common/TextInputPlaceholder'
import Button from '../../../components/common/Button'

import InquiryEmpty from '../../../../public/assets/svg/inquiry_empty.svg'

import styles from './ItemsDetailQuestionTextarea.module.scss'

const ItemsDetailQuestionTextarea = () => {
  const params = useParams() // product 데어터 받기
  const [isEditing, setIsEditing] = useState(false)
  const [questionText, setQuestionText] = useState('')
  const [textareaStyle, setTextareaStyle] = useState({
    height: '84px',
  })
  // useProductComments 훅 이용
  const productId = Number(params.productId)

  // 커스텀 훅으로 데이터 fetch
  const productQuestion = useGetCommentService(productId)
  console.log(productQuestion)
  const handleResize = () => {
    if (window.innerWidth < 744) {
      setTextareaStyle({ height: '129px' })
    } else if (window.innerWidth < 1024) {
      setTextareaStyle({ height: '84px' })
    }
  }

  // placeholder useEffect 적용
  useEffect(() => {
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <>
      <div className={styles['product-question-wrapper']}>
        <div className={styles['product-question-text']}>문의하기</div>
        <TextInputPlaceholder
          placeholder={
            '개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
          }
          height={textareaStyle.height}
          padding={'16px 24px'}
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
        />
        <div className={styles['button-wrapper']}>
          <Button
            className={styles['register-button']}
            size={42.5}
            disabled={questionText.trim().length === 0}
          >
            등록
          </Button>
        </div>
      </div>

      {productQuestion.list.length === 0 ? (
        <div className={styles['inquiry-empty-wrapper']}>
          <Image src={InquiryEmpty} alt="문의가 없습니다" />
          <div className={styles['inquiry-empty-text']}>문의가 없습니다</div>
        </div>
      ) : (
        <>
          <div className={styles['items-question-wrapper']}>
            {productQuestion.list.map((question, index) => (
              <ItemsDetailQuestionArrary
                key={index}
                productQuestion={question}
                setIsEditing={setIsEditing}
                isEditing={isEditing}
              />
            ))}
          </div>
        </>
      )}
    </>
  )
}

export default ItemsDetailQuestionTextarea
