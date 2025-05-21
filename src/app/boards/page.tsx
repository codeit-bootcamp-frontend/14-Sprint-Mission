'use client'
import React from 'react'

import ItemsNavVar from '../../components/domain/Nav/ItemsNavVar'
import BestBoards from './BestBoards'
import BoardList from './BoardList'

import styled from 'styled-components'

const Boards = () => {
  return (
    <>
      <ItemsNavVar isItemsPage={false} isBoardsPage={true} />
      <Bone>
        <BestBoards />
        <BoardList />
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
