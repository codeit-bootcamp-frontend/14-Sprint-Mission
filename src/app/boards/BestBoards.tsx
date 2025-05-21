import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import { useGetBestArticles } from '../../hooks/useGetBeatArticle'

import HeartInactive from '../../../public/assets/image/heart_inactive.png'
import BestBadge from '../../../public/assets/image/best_badge.png'
import { formatDate } from '../../utils/datetime'

import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'

const BestBoards = () => {
  const [bestPageSize, setBestPageSize] = useState(3)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 743) {
        setBestPageSize(1)
      } else if (window.innerWidth <= 1023) {
        setBestPageSize(2)
      } else {
        setBestPageSize(3)
      }
    }

    handleResize() // 처음 렌더링 시에도 계산
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // useGetBestArticles 훅을 사용하여 베스트 게시글 목록을 가져옵니다.
  const bestArticleList = useGetBestArticles(bestPageSize)

  if (!bestArticleList) {
    return <div>게시글을 불러오는 중입니다...</div>
  }
  return (
    <>
      <BestBoardsTitle>베스트 게시글</BestBoardsTitle>
      <BoneWrapper>
        {bestArticleList.list.map((article) => (
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
