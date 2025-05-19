'use client'
import React, { useEffect, useState } from 'react'

import ItemsNavVar from '../common/ItemsNavVar'
import BestBoards from './BestBoards'
import BoardList from './BoardList'
import articleService from '../api/services/articleService'
import { GetArticleType } from '../types/article'

import styled from 'styled-components'
import { theme } from '../styles/theme'
import { textStyle } from '../styles/textStyle'

const Boards = () => {
  const [articleList, setArticleList] = useState<GetArticleType>()
  const [bestArticleList, setBestArticleList] = useState<GetArticleType>()
  const [page, setPage] = useState(1)
  const [hasMore, setHasMore] = useState(true)
  const [selectedOption, setSelectedOption] = useState('recent')
  const orderBy = selectedOption === 'recent' ? 'recent' : 'like'
  // BestBoards에 관한 useEffect
  useEffect(() => {
    articleService
      .getArticle(1, 5, 'like', '')
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
  }, [])
  // BoardList 관한 useEffect
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await articleService.getArticle(page, 5, orderBy, '')
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
  }, [page, selectedOption])

  useEffect(() => {
    setArticleList(undefined) // 선택이 바뀌면 리스트를 초기화
    setPage(1)
    setHasMore(true)
  }, [selectedOption])
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
`
