'use client'

import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import Image from 'next/image'

import { useGetCommentService } from '../../hooks/useCommentService'
import ItemsDetailQuestionArrary from './ItemsDetailQuestionArrary'
import TextInputPlaceholder from '../../../components/common/TextInputPlaceholder'
import Button from '../../../components/common/Button'

import InquiryEmpty from '../../../../public/assets/svg/inquiry_empty.svg'

import styled from 'styled-components'
import { theme } from '../../../styles/theme'
import { textStyle } from '../../../styles/textStyle'

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
    <Bone>
      <ProductQuestionWrapper>
        <ProductQuestionText>문의하기</ProductQuestionText>
        <TextInputPlaceholder
          placeholder={
            '개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
          }
          height={textareaStyle.height}
          padding={'16px 24px'}
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
        />
        <ButtonWrapper>
          <RegisterButton
            size={42.5}
            disabled={questionText.trim().length === 0}
          >
            등록
          </RegisterButton>
        </ButtonWrapper>
      </ProductQuestionWrapper>

      {productQuestion.list.length === 0 ? (
        <InquiryEmptyWrapper>
          <Image src={InquiryEmpty} alt="문의가 없습니다" />
          <InquiryEmptyText>문의가 없습니다</InquiryEmptyText>
        </InquiryEmptyWrapper>
      ) : (
        <>
          <ItemsQuestionWrapper>
            {productQuestion.list.map((question, index) => (
              <ItemsDetailQuestionArrary
                key={index}
                productQuestion={question}
                setIsEditing={setIsEditing}
                isEditing={isEditing}
              />
            ))}
          </ItemsQuestionWrapper>
        </>
      )}
    </Bone>
  )
}

export default ItemsDetailQuestionTextarea

const Bone = styled.div``
const ProductQuestionWrapper = styled.div`
  margin: 4rem auto 2.4rem;
  @media (max-width: 1023px) {
    margin: 4rem auto;
  }
  @media (max-width: 743px) {
    margin: 2.5rem auto;
  }
`
const ProductQuestionText = styled.div`
  ${(props) => textStyle(16, 600)(props)}
  color: ${theme.colors.SecondaryGray[900]};
  margin-bottom: 0.9rem;
`

const ButtonWrapper = styled.div`
  width: fit-content;
  margin: 1.6rem 0 0 auto;
`
const RegisterButton = styled(Button)`
  padding: 0.8rem 2.3rem;
  width: max-content;
`
const ItemsQuestionWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

const InquiryEmptyWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`
const InquiryEmptyText = styled.div`
  ${(props) => textStyle(16, 400)(props)}
  color: ${theme.colors.SecondaryGray[400]};
  margin-top: 0.5rem;
`
