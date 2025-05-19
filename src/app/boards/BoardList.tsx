'use client'
import React, { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

import { GetArticleType } from '../types/article'

import BoardDetailArrary from './BoardDetailArrary'
import DropDown from '../common/DropDown'
import Button from '../common/Button'

import InquiryEmpty from '../../../public/assets/svg/InquiryEmpty.svg'
import Search from '../../../public/assets/svg/Search.svg'

import styled from 'styled-components'
import { theme } from '../styles/theme'
import { textStyle } from '../styles/textStyle'

type SelectOption = {
  value: string
  name: string
}
type BestBoardsProps = {
  articleList: GetArticleType
  selectedOption: string
  setSelectedOption: (value: string) => void
  loadMore: () => void
  hasMore: boolean
  searchTerm: string
  setSearchTerm: (value: string) => void
}
const BoardList = ({
  articleList,
  selectedOption,
  setSelectedOption,
  loadMore,
  hasMore,
  searchTerm,
  setSearchTerm,
}: BestBoardsProps) => {
  console.log(articleList)
  const selectList: SelectOption[] = [
    { value: 'recent', name: '최신순' },
    { value: 'like', name: '좋아요순' },
  ]
  const observerRef = useRef<HTMLDivElement | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const loadingRef = useRef(false)

  useEffect(() => {
    if (!hasMore || !observerRef.current || !scrollContainerRef.current) return

    let observer: IntersectionObserver | null = null

    const callback = async (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && !loadingRef.current) {
        loadingRef.current = true
        await loadMore()
        setTimeout(() => {
          loadingRef.current = false
        }, 500) // 시간을 넣어 무한 스크롤이 한 번에 여러번 호출되지 않게
      }
    }

    observer = new IntersectionObserver(callback, {
      root: scrollContainerRef.current,
      threshold: 0.9,
    })

    observer.observe(observerRef.current)

    return () => {
      if (observer) observer.disconnect()
    }
  }, [hasMore, loadMore])
  return (
    <>
      <BoardHeader>
        <BestBoardsTitle>게시글</BestBoardsTitle>
        <WriterButton size={42.5}>글쓰기</WriterButton>
      </BoardHeader>
      <SearchList>
        <TextInputIcon>
          <NavSearch
            placeholder="검색할 상품 입력해주세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <PlaceholderIcon>
            <Image src={Search} alt="검색아이콘" />
          </PlaceholderIcon>
        </TextInputIcon>
        <DropDown
          selectList={selectList}
          selected={selectedOption}
          onChange={(value) => {
            setSelectedOption(value)
          }}
        />
      </SearchList>
      <BoardsList ref={scrollContainerRef}>
        {articleList.list?.length === 0 ? (
          <InquiryEmptyWrapper>
            <Image src={InquiryEmpty} alt="관련된 게시글이 없습니다." />
            <InquiryEmptyText>문의가 없습니다</InquiryEmptyText>
          </InquiryEmptyWrapper>
        ) : (
          <ItemsQuestionWrapper>
            {articleList.list.map((article) => (
              <BoardDetailArrary key={article.id} article={article} />
            ))}
            {hasMore && <div ref={observerRef} style={{ height: '50px' }} />}
          </ItemsQuestionWrapper>
        )}
      </BoardsList>
    </>
  )
}

export default BoardList
const BoardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.4rem;
  @media (max-width: 1023px) {
    margin-bottom: 4.8rem;
  }
  @media (max-width: 743px) {
    margin-bottom: 1.6rem;
  }
`
const BestBoardsTitle = styled.div`
  ${(props) => textStyle(20, 800)(props)}
`
const WriterButton = styled(Button)`
  padding: 0.8rem 2.3rem;
  width: max-content;
`

const SearchList = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 1023px) {
    margin-bottom: 4rem;
  }
  @media (max-width: 743px) {
    margin-bottom: 1.6rem;
  }
`
const TextInputIcon = styled.div`
  position: relative;
`
const NavSearch = styled.input`
  width: 105.4rem;
  height: 4.2rem;
  padding: 0.9rem 8.7rem 0.9rem 4.4rem;
  border-radius: 1.2rem;
  ${(props) => textStyle(16, 400)(props)}
  color: ${theme.colors.SecondaryGray[400]};
  background-color: ${theme.colors.SecondaryGray[100]};
  border: none;
  margin-right: 1.2rem;
  @media (max-width: 1023px) {
    width: 55rem;
    padding: 9px 24px 9px 44px;
  }
  @media (max-width: 743px) {
    position: relative;

    padding: 9px 40px 9px 44px;
    width: max-content;
    margin: 0;
  }
`
const PlaceholderIcon = styled.div`
  width: max-content;
  position: absolute;
  top: 10px;
  left: 20px;
`

const BoardsList = styled.div`
  overflow-y: auto;
  height: 60vh;
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
