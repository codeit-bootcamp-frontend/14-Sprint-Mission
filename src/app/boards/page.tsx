'use client'
import React from 'react'

import ItemsNavVar from '../../components/domain/Nav/ItemsNavVar'
import BestBoards from './BestBoards'
import BoardList from './BoardList'

import styles from './boards.module.scss'

const Boards = () => {
  return (
    <>
      <ItemsNavVar isItemsPage={false} isBoardsPage={true} />
      <div className={styles['bone']}>
        <BestBoards />
        <BoardList />
      </div>
    </>
  )
}

export default Boards
