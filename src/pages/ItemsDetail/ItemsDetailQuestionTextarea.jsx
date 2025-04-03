import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

import commentService from '../../api/services/commentService'
import Placeholder from '../../component/common/Placeholder'
import Button from '../../component/common/Button'

import InquiryEmpty from '../../assets/svg/InquiryEmpty.svg'

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
// state 값에 따라 버튼 효과 활성화 / 비활성화
const ButtonWrapper = styled.div`
  width: fit-content;
  margin: 1rem 0 0 auto;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: ${(props) => (props.$isState ? 'scale(1.05)' : 'scale(1)')};
  }

  &:active {
    transform: ${(props) => (props.$isState ? 'scale(0.95)' : 'scale(1)')};
  }
`
const ItemsQuestionWrapper = styled.div`
  position: relative;
`
const ButtonEditWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin: 1rem 0 1.5rem;
`
const EditCalcelButton = styled.button`
  ${(props) => textStyle(16, 600)(props)}
  color: ${theme.colors.SecondaryGray[500]};
  width: 68px;
  height: 47px;
  display: flex;
  align-items: center;
  justify-content: center;
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
const ItemsDetailQuestionTextarea = () => {
  const location = useLocation() // product 데어터 받기
  const [productQuestion, setProductQuestion] = useState({
    list: [],
    nextCursor: null,
  })
  const [questionText, setQuestionText] = useState('')
  const [isState, setIsState] = useState(false)
  const [userComment, setUserComment] = useState(productQuestion.content)
  const [isEditing, setIsEditing] = useState(false)
  const product = location.state?.product

  const handleEditSuccessClick = async () => {
    await commentService.patchComment(productQuestion.id, {
      content: userComment,
    })
    setIsEditing(false)
  }

  const handleEditCancle = () => {
    setIsEditing(false)
  }
  // 서버데이터 불러옴
  useEffect(() => {
    commentService.getProductComment(product.id, 3).then((response) => {
      setProductQuestion({
        list: response.data.list,
        nextCursor: response.data.nextCursor,
      })
    })
  }, [product])

  //문의하기 등록 버튼
  useEffect(() => {
    const valid = questionText.length >= 1
    setIsState(valid)
  }, [questionText])

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
        <ButtonWrapper $isState={isState}>
          <Button
            size={42.5}
            width={74}
            paddingHeight={8}
            paddingWidth={23}
            disabled={!isState}
          >
            등록
          </Button>
        </ButtonWrapper>
      </ProductQuestionWrapper>
      {isEditing ? (
        <>
          {/*로그인을 하지 않아 토큰?전달이 되지 않은 상태*/}
          <Placeholder
            placeholder={'수정사항을 입력해주세요'}
            height="82px"
            value={userComment}
            padding="16px 24px 40px 24px"
            onChange={(e) => setUserComment(e.target.value)}
          />
          <ButtonEditWrapper>
            <EditCalcelButton onClick={handleEditCancle}>취소</EditCalcelButton>
            <Button
              size={42.5}
              width={106}
              paddingHeight={8}
              paddingWidth={23}
              onClick={handleEditSuccessClick}
            >
              수정완료
            </Button>
          </ButtonEditWrapper>
        </>
      ) : (
        <></>
      )}
      {productQuestion.list.length === 0 ? (
        <InquiryEmptyWrapper>
          <img src={InquiryEmpty} alt="문의가 없습니다" />
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
              />
            ))}
          </ItemsQuestionWrapper>
        </>
      )}
    </Bone>
  )
}

export default ItemsDetailQuestionTextarea
