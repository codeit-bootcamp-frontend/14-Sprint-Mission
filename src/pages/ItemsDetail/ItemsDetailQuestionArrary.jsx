import React from 'react'

import Setting from '../../assets/svg/Setting.svg'
import ProfileIcon from '../../assets/svg/ProfileIcon.svg'

import { diffDate } from '../../styles/datetime'
import { formatDate } from '../../styles/datetime'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'

const Bone = styled.div`
  margin-top: 1.5rem;
  border-bottom: 1px solid ${theme.colors.SecondaryGray[200]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 6.25rem;
`
const QuestionContent = styled.div`
  ${(props) => textStyle(14, 400)(props)}
  color: ${theme.colors.SecondaryGray[800]};
  margin-bottom: 1.5rem;
`
const UserProfileImageWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
`
const UserProfileImageRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
const UserProfileName = styled.div`
  ${(props) => textStyle(12, 400)(props)}
  color: ${theme.colors.SecondaryGray[600]};
`
const DiffDate = styled.div`
  ${(props) => textStyle(12, 400)(props)}
  color: ${theme.colors.SecondaryGray[400]};
`
const SettingButton = styled.img`
  width: auto;
  height: auto;
  cursor: pointer;
`
const ItemsDetailQuestionArrary = ({ productQuestion }) => {
  console.log(productQuestion)
  return (
    <Bone>
      <div>
        <QuestionContent>{productQuestion.content}</QuestionContent>
        <UserProfileImageWrapper>
          {/*이미지가 없을 경우 기본 이미지 적용*/}
          <img
            src={productQuestion?.image || ProfileIcon}
            alt="유저프로필사진"
          />
          <UserProfileImageRight>
            <UserProfileName>{productQuestion.writer.nickname}</UserProfileName>
            {/*날짜 차이가 31일을 넘길 경우 createAt을 출력*/}
            <DiffDate>
              {diffDate(productQuestion.createdAt) > 31 ? (
                <>
                  <span>{formatDate(productQuestion.createdAt)}</span>
                </>
              ) : (
                <>
                  <span>{diffDate(productQuestion.createdAt)}</span>
                  <span>일 전</span>
                </>
              )}
            </DiffDate>
          </UserProfileImageRight>
        </UserProfileImageWrapper>
      </div>
      <div>
        <SettingButton src={Setting} alt="수정, 삭제 선택 버튼" />
      </div>
    </Bone>
  )
}

export default ItemsDetailQuestionArrary
