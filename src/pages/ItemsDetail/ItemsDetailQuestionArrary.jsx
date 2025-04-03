import React, { useState, useEffect, useRef } from 'react'

import { diffDate } from '../../styles/datetime'
import { formatDate } from '../../styles/datetime'

import Setting from '../../assets/svg/Setting.svg'
import ProfileIcon from '../../assets/svg/ProfileIcon.svg'

import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'

const Bone = styled.div`
  border-bottom: 1px solid ${theme.colors.SecondaryGray[200]};
  display: flex;
  align-items: end;
  justify-content: space-between;
  height: 92px;
  position: relative;
  padding-bottom: 0.8rem;
  margin-top: 1.5rem;
}
`

const QuestionContent = styled.div`
  ${(props) => textStyle(14, 400)(props)}
  color: ${theme.colors.SecondaryGray[800]};
  margin-bottom: 1.5rem;
`
const UserProfileImageWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
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
const SettingButtonWrapper = styled.div`
  position: relative;
  top: -42px;
`
const SettingButton = styled.img`
  width: auto;
  height: auto;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: relative;
  &:hover {
    background: ${({ theme }) => theme.colors.PrimaryBlue[200]};
    border-radius: 50%;
    transform: scale(1.05);
  }
  &:active {
    background: ${({ theme }) => theme.colors.PrimaryBlue[200]};
    border-radius: 50%;
    transform: scale(0.95);
  }
`
const SelectOption = styled.ul`
  position: absolute;
  top: 1.8rem;
  left: -114px;
  border: 1px solid #cccccc;
  border-radius: 12px;
  background-color: #ffffff;
  color: #181818;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  max-height: 300px;
  overflow-y: auto;
  z-index: 10;
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  @media (max-width: 743px) {
    position: absolute;
    top: 62px;
    left: -72px;
    z-index: 1;
    width: 130px;
    height: 84px;
  }
`
const Option = styled.li`
  ${(props) => textStyle(16, 400)(props)}
  color: ${theme.colors.SecondaryGray[500]};
  padding: 12px 40px;
  cursor: pointer;
  &:hover {
    background-color: #f6f6f6;
  }
  @media (max-width: 743px) {
    padding: 7px 35px;
  }
`
const ItemsDetailQuestionArrary = ({ productQuestion, setIsEditing }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const dropDownRef = useRef(null)

  // 수정 삭제 버튼
  const handleSettingClick = () => {
    setIsDropDownOpen((prev) => !prev)
  }

  // 수정하기 눌렀을 때 버튼
  const handleEditClick = () => {
    setIsEditing(true)
  }
  // 다른 곳 클릭시 수정삭제 버튼이 닫힘
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
        setIsDropDownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])
  console.log('API Response:', productQuestion)

  return (
    <>
      <Bone>
        <div>
          <QuestionContent isDropDownOpen={isDropDownOpen}>
            {productQuestion.content}
          </QuestionContent>
          <UserProfileImageWrapper>
            {/*이미지가 없을 경우 기본 이미지 적용*/}
            <img
              src={productQuestion.writer.image || ProfileIcon}
              alt="유저프로필사진"
            />
            <UserProfileImageRight>
              <UserProfileName>
                {productQuestion.writer.nickname}
              </UserProfileName>
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
        <SettingButtonWrapper ref={dropDownRef}>
          <SettingButton
            src={Setting}
            alt="수정, 삭제 선택 버튼"
            onClick={handleSettingClick}
          />
          {isDropDownOpen && (
            <SelectOption>
              <Option onClick={handleEditClick}>수정하기</Option>
              <Option>삭제하기</Option>
            </SelectOption>
          )}
        </SettingButtonWrapper>
      </Bone>
    </>
  )
}

export default ItemsDetailQuestionArrary
