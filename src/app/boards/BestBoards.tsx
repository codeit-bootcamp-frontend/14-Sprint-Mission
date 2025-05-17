'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { GetArticleType, GetArticleIdType } from '../types/article'

import HeartInactive from '../../../public/assets/image/HeartInactive.png'
import BestBadge from '../../../public/assets/image/BestBadge.png'
import { formatDate } from '../utils/datetime'

import styled, { css } from 'styled-components'
import { theme } from '../styles/theme'
import { textStyle } from '../styles/textStyle'

type BestBoardsProps = {
  articleList: GetArticleType
}

const BestBoards = ({ articleList }: BestBoardsProps) => {
  const [itemsDisplay, setItemsDisplay] = useState(1)

  useEffect(() => {
    const handleReasize = () => {
      if (window.innerWidth <= 743) {
        setItemsDisplay(1)
      } else if (window.innerWidth >= 744 && window.innerWidth <= 1023) {
        setItemsDisplay(2)
      } else {
        setItemsDisplay(3)
      }
    }
    handleReasize()
    window.addEventListener('resize', handleReasize)

    return () => window.removeEventListener('resize', handleReasize)
  }, [])
  return (
    <>
      <BestBoardsTitle>베스트 게시글</BestBoardsTitle>
      <BoneWrapper>
        {articleList.list.slice(0, itemsDisplay).map((article) => (
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
