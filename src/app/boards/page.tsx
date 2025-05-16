'use client'
import React, { useEffect, useState } from 'react'

import ItemsNavVar from '../common/ItemsNavVar'
import BestBoards from './BestBoards'
import articleService from '../api/services/articleService'
import { GetArticleType, GetArticleIdType } from '../types/article'

import styled, { css } from 'styled-components'
import { theme } from '../styles/theme'
import { textStyle } from '../styles/textStyle'

const Boards = () => {
  const [articleList, setArticleList] = useState<GetArticleType>()

  useEffect(() => {
    const getArticle = async () => {
      try {
        const response = await articleService.getArticle(1, 5, 'like', '')
        setArticleList(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getArticle()
  }, [])
  return (
    <>
      <ItemsNavVar isItemsPage={false} isBoardsPage={true} />
      <Bone>{articleList && <BestBoards articleList={articleList} />}</Bone>
    </>
  )
}

export default Boards

const Bone = styled.div`
  width: 120rem;
  margin: 2.4rem auto auto auto;
`
