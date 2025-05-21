'use client'
import React, { useRef, useEffect, useState } from 'react'
import Image from 'next/image'

import { useInfiniteScroll } from '../../hooks/useInfiniteScroll'
import { useDebounce } from '../../hooks/useDebounce'
import { useGetArticles } from '../../hooks/useGetArticle'

import BoardDetailArrary from './BoardDetailArrary'
import DropDown from '../../components/common/DropDown'
import Button from '../../components/common/Button'

import InquiryEmpty from '../../../public/assets/svg/inquiry_empty.svg'
import Search from '../../../public/assets/svg/search.svg'

import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'

type SelectOption = {
  value: string
  name: string
}

const BoardList = () => {
  const selectList: SelectOption[] = [
    { value: 'recent', name: '최신순' },
    { value: 'like', name: '좋아요순' },
  ]
  const observerRef = useRef<HTMLDivElement | null>(null)
  const scrollContainerRef = useRef<HTMLDivElement | null>(null)
  const [page, setPage] = useState(1)
  const [selectedOption, setSelectedOption] = useState('recent')
  const [searchTerm, setSearchTerm] = useState('')
  const debouncedSearchTerm = useDebounce(searchTerm, 500)

  const orderBy = selectedOption === 'recent' ? 'recent' : 'like'
  // 페이지네이션을 위한 상태
  useEffect(() => {
    if (page !== 1) {
      setPage(1)
      setHasMore(true)
    }
  }, [selectedOption, debouncedSearchTerm])

  // 게시글 목록을 가져오는 커스텀 훅
  const { articleList, hasMore, setHasMore } = useGetArticles(
    page,
    orderBy,
    debouncedSearchTerm
  )
  // 페이지네이션을 위한 상태
  const loadMore = async () => {
    if (hasMore) setPage((prev) => prev + 1)
  }
  //무한스크롤
  useInfiniteScroll({
    hasMore,
    loadMore,
    observerRef,
    scrollContainerRef,
  })

  if (!articleList) {
    // 데이터가 없을 때 로딩 상태를 보여줄 수 있고, 데이터가 도착하면 다시 렌더링되어 실제 게시글 목록이 보임임
    return null
  }
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
