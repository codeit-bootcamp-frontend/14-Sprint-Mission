import React from 'react'
import Image from 'next/image'

import { GetArticleType } from '../types/article'

import HeartInactive from '../../../public/assets/image/HeartInactive.png'
import BestBadge from '../../../public/assets/image/BestBadge.png'
import { formatDate } from '../utils/datetime'

import styled from 'styled-components'
import { theme } from '../styles/theme'
import { textStyle } from '../styles/textStyle'

type BestBoardsProps = {
  articleList?: GetArticleType
}

const BestBoards = ({ articleList }: BestBoardsProps) => {
  if (!articleList) return null
  return (
    <>
      <BestBoardsTitle>베스트 게시글</BestBoardsTitle>
      <BoneWrapper>
        {articleList.list.map((article) => (
          <MainWrapper key={article.id}>
            <BestIcon>
              <Image src={BestBadge} alt="베스트 게시글 오피셜 아이콘" />
            </BestIcon>
            <Description>
              <TextDescription>{article.content}</TextDescription>
              <DescriptionImage>
                <img src={article.image} alt="게시글 이미지" />
              </DescriptionImage>
            </Description>
            <MainFooter>
              <NameHeart>
                <UserName>{article.writer.nickname}</UserName>
                <UserHeart>
                  <Image src={HeartInactive} alt="하트 비활성화/활성화" />
                  <HeartCount>{article.likeCount}</HeartCount>
                </UserHeart>
              </NameHeart>
              <CreateDate>{formatDate(article.createdAt)}</CreateDate>
            </MainFooter>
          </MainWrapper>
        ))}
      </BoneWrapper>
    </>
  )
}

export default BestBoards

const BoneWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
  @media (max-width: 1023px) {
    margin-bottom: 2.4rem;
  }
`
const BestBoardsTitle = styled.div`
  ${(props) => textStyle(20, 800)(props)}
  margin-bottom:2.4rem;
`
const MainWrapper = styled.div`
  width: 38.4rem;
  height: 16.9rem;
  padding: 0 2.4rem 1.6rem 2.4rem;
  border-radius: 8px;
  background-color: ${theme.colors.SecondaryGray[50]};
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (max-width: 1023px) {
    width: 34rem;
    height: 19.8rem;
  }
`
const BestIcon = styled.div``
const Description = styled.div`
  display: flex;
  gap: 0.8rem;
`
const MainFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const TextDescription = styled.div`
  ${(props) => textStyle(20, 600)(props)}
  @media (max-width: 1023px) {
    ${(props) => textStyle(18, 600)(props)}
  }
`
const DescriptionImage = styled.div`
  img {
    width: 7.2rem;
    height: 7.2rem;
  }
`
const NameHeart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  height: 2.4rem;
`
const CreateDate = styled.div`
  ${(props) => textStyle(14, 400)(props)}
  color: ${theme.colors.SecondaryGray[500]};
`
const UserName = styled.div`
  ${(props) => textStyle(14, 400)(props)}
  color: ${theme.colors.SecondaryGray[500]};
`
const UserHeart = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 1.6rem;
    height: 1.6rem;
  }
`

const HeartCount = styled.div`
  ${(props) => textStyle(14, 400)(props)}
  color: ${theme.colors.SecondaryGray[500]};
`
