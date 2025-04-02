import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import commentService from '../../api/services/commentService'
import Placeholder from '../../component/common/Placeholder'
import Button from '../../component/common/Button'

import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'
import ItemsDetailQuestionArrary from './ItemsDetailQuestionArrary'

const Bone = styled.div`
  width: 75rem;
  margin: 2.5rem auto 0;
`
const ProductQuestionWrapper = styled.div`
  margin: 2.5rem auto 1.5rem;
`
const ProductQuestionText = styled.div`
  ${(props) => textStyle(16, 600)(props)}
  color: ${theme.colors.SecondaryGray[900]};
  margin-bottom: 0.5625rem;
`
const ButtonWrapper = styled.div`
  width: fit-content;
  margin: 1rem 0 0 auto;
`
const ItemsQuestionWrapper = styled.div``
const ItemsDetailQuestionTextarea = () => {
  const location = useLocation() // product 데어터 받기
  const [productQuestion, setProductQuestion] = useState({
    list: [],
    nextCursor: null,
  })
  const [questionText, setQuestionText] = useState('')
  const product = location.state?.product

  useEffect(() => {
    commentService.getProductComment(product.id, 3).then((response) => {
      console.log('API Response:', response.data)
      setProductQuestion({
        list: response.data.list,
        nextCursor: response.data.nextCursor,
      })
    })
  }, [product])

  return (
    <Bone>
      <ProductQuestionWrapper>
        <ProductQuestionText>문의하기</ProductQuestionText>
        <Placeholder
          placeholder={
            '개인정보를 공유 및 요청하거나, 명예 훼손, 무단 광고, 불법 정보 유포시 모니터링 후 삭제될 수 있으며, 이에 대한 민형사상 책임은 게시자에게 있습니다.'
          }
          height={'104px'}
          padding="16px 24px"
          value={questionText}
          onChange={(e) => setQuestionText(e.target.value)}
        />
        <ButtonWrapper>
          <Button size={42.5} width={74}>
            등록
          </Button>
        </ButtonWrapper>
      </ProductQuestionWrapper>
      <ItemsQuestionWrapper>
        {productQuestion.list.map((question, index) => (
          <ItemsDetailQuestionArrary key={index} productQuestion={question} />
        ))}
      </ItemsQuestionWrapper>
      <div></div>
    </Bone>
  )
}

export default ItemsDetailQuestionTextarea
