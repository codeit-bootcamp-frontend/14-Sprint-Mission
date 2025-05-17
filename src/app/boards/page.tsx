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

type SelectOption = {
  value: string
  name: string
}

const Boards = () => {
  const [articleList, setArticleList] = useState<GetArticleType>()
  const selectList: SelectOption[] = [
    { value: 'recent', name: '최신순' },
    { value: 'like', name: '좋아요순' },
  ]
  const [selectedOption, setSelectedOption] = useState(selectList[0].value)

  useEffect(() => {
    articleService
      .getArticle(1, 5, 'like', '')
      .then((response) => {
        const sorted = [...(response.data.list || [])].sort((a, b) => {
          if (selectedOption === 'recent') {
            return (
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
            )
          } else if (selectedOption === 'like') {
            return b.likeCount - a.likeCount
          }
          return 0
        })

        setArticleList({
          totalCount: response.data.totalCount,
          list: sorted,
        })
      })
      .catch((error) => {
        console.error('게시글 불러오기 실패:', error)
      })
  }, [selectedOption])

  return (
    <>
      <ItemsNavVar isItemsPage={false} isBoardsPage={true} />
      <Bone>
        {articleList && <BestBoards articleList={articleList} />}
        {articleList && <BoardList articleList={articleList} />}
      </Bone>
    </>
  )
}

export default Boards

const Bone = styled.div`
  width: 120rem;

  margin: 2.4rem auto auto auto;
`
