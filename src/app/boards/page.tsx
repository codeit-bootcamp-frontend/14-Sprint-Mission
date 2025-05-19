'use client'
import React, { useEffect, useState } from 'react'

import ItemsNavVar from '../common/ItemsNavVar'
import BestBoards from './BestBoards'
import BoardList from './BoardList'
import articleService from '../api/services/articleService'
import { GetArticleType } from '../types/article'

import styled from 'styled-components'

const Boards = () => {
  const [articleList, setArticleList] = useState<GetArticleType>()
  const [bestArticleList, setBestArticleList] = useState<GetArticleType>()
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [selectedOption, setSelectedOption] = useState('recent')
  const [searchTerm, setSearchTerm] = useState('')
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('')
  const [bestPageSize, setBestPageSize] = useState(3) // 심화 페이지 사이즈 조절

  const orderBy = selectedOption === 'recent' ? 'recent' : 'like'
  // BestBoards에 관한 useEffect
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm)
    }, 500) // <- 디바운스 지연 시간

    return () => clearTimeout(timer)
  }, [searchTerm])

  //BestBoards
  useEffect(() => {
    articleService
      .getArticle(1, bestPageSize, 'like', '')
      .then((response) => {
        const sorted = [...(response.data.list || [])].sort(
          (a, b) => b.likeCount - a.likeCount
        )
        setBestArticleList({
          totalCount: response.data.totalCount,
          list: sorted,
        })
      })
      .catch((error) => {
        console.error('베스트 게시글 불러오기 실패:', error)
      })
  }, [bestPageSize])

  // BoardList
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await articleService.getArticle(
          page,
          5,
          orderBy,
          debouncedSearchTerm // ← 디바운스된 검색어 사용
        )
        const newList = response.data.list || []

        setArticleList((prev) => {
          const combinedList =
            page === 1 ? newList : [...(prev?.list || []), ...newList]
          return {
            totalCount: response.data.totalCount,
            list: combinedList,
          }
        })

        if (newList.length < 5) {
          setHasMore(false)
        }
      } catch (error) {
        console.error('게시글 불러오기 실패:', error)
      }
    }

    fetchArticles()
  }, [page, selectedOption, debouncedSearchTerm])

  // 선택/검색이 바뀌면 초기화
  useEffect(() => {
    setPage(1)
    setHasMore(true)
  }, [selectedOption])

  useEffect(() => {
    setPage(1)
    setHasMore(true)
  }, [debouncedSearchTerm])

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
  return (
    <>
      <ItemsNavVar isItemsPage={false} isBoardsPage={true} />
      <Bone>
        {articleList && <BestBoards articleList={bestArticleList} />}
        {articleList && (
          <BoardList
            articleList={articleList}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            loadMore={async () => setPage((prev) => prev + 1)}
            hasMore={hasMore}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        )}
      </Bone>
    </>
  )
}

export default Boards

const Bone = styled.div`
  width: 120rem;
  margin: 2.4rem auto auto auto;
  @media (max-width: 1023px) {
    width: 69.6rem;
    margin: 2.4rem auto auto auto;
  }
  @media (max-width: 743px) {
    width: 34.4rem;
    margin: 1rem auto 6.5rem auto;
  }
`
