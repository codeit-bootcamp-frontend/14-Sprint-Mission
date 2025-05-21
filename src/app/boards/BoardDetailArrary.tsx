'use client'

import React from 'react'

import { GetArticleIdType } from '../../types/article'
import { diffDate } from '../../utils/datetime'
import { formatDate } from '../../utils/datetime'

import HeartInactive from '../../../public/assets/image/heart_inactive.png'

import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'
import Image from 'next/image'

type BestBoardsProps = {
  article: GetArticleIdType
}

const BoardDetailArrary = ({ article }: BestBoardsProps) => {
  return (
    <>
      <Bone>
        <ContentWrappeer>
          <QuestionContent>{article.content}</QuestionContent>
          {article.image && (
            <img src={article.image} alt="게시글 상세 이미지" />
          )}
        </ContentWrappeer>
        <UserProfileImageWrapper>
          <NameProfile>
            {/*이미지가 없을 경우 기본 이미지 적용*/}
            <Image
              src={'/assets/svg/profile_icon.svg'}
              alt="유저프로필사진"
              width={32}
              height={32}
            />

            <UserProfileName>{article.writer.nickname}</UserProfileName>
            {/*날짜 차이가 31일을 넘길 경우 createAt을 출력*/}
            <DiffDate>
              {diffDate(article.createdAt) > 31 ? (
                <>
                  <span>{formatDate(article.createdAt)}</span>
                </>
              ) : (
                <>
                  <span>{diffDate(article.createdAt)}</span>
                  <span>일 전</span>
                </>
              )}
            </DiffDate>
          </NameProfile>
          <HeartCount>
            <Image
              src={HeartInactive}
              alt="HeartInactive"
              width={24}
              height={24}
            />
            <>{article.likeCount}</>
          </HeartCount>
        </UserProfileImageWrapper>
      </Bone>
    </>
  )
}

export default BoardDetailArrary

const Bone = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: max-content;
  border-bottom: 1px solid ${theme.colors.SecondaryGray[200]};
  position: relative;
  padding-bottom: 2.4rem;
  padding-right: 2rem;
  margin-top: 2.4rem;
  @media (max-width: 743px) {
    margin-top: 0;
    margin-bottom: 2.4rem;
  }
`
const ContentWrappeer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  img {
    width: 7.2rem;
    height: 7.2rem;
  }
`

const QuestionContent = styled.div`
  ${(props) => textStyle(20, 600)(props)}
  color: ${theme.colors.SecondaryGray[800]};
  margin-bottom: 2.4rem;
  @media (max-width: 743px) {
    ${(props) => textStyle(18, 600)(props)}
  }
`
const UserProfileImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    width: 2.6rem;
    height: 2.6rem;
    border-radius: 50%;
  }
`
const NameProfile = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
`
const UserProfileName = styled.div`
  ${(props) => textStyle(12, 400)(props)}
  color: ${theme.colors.SecondaryGray[600]};
`
const DiffDate = styled.div`
  ${(props) => textStyle(12, 400)(props)}
  color: ${theme.colors.SecondaryGray[400]};
`
const HeartCount = styled.div`
  ${(props) => textStyle(16, 400)(props)}
  color: ${theme.colors.SecondaryGray[500]};
  display: flex;
  gap: 0.8rem;
`
