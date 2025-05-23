'use client'

import React from 'react'
import Image from 'next/image'

import ItemsNavVar from '../../../components/domain/Nav/ItemsNavVar'
import ItemsDetailDescription from './ItemsDetailDescription'
import ItemsDetailQuestionTextarea from './ItemsDetailQuestionTextarea'
import Button from '../../../components/common/Button'

import BackIcon from '../../../../public/assets/svg/back_icon.svg'

import styles from './productId.module.scss'

const ItemsDetail = () => {
  return (
    <>
      <ItemsNavVar isItemsPage={true} isBoardsPage={false} />
      <div className={styles['bone']}>
        <ItemsDetailDescription />
        <ItemsDetailQuestionTextarea />

        <div className={styles['button-wrapper']}>
          <Button
            className={styles['list-button']}
            to="/items"
            size={48}
            suffix={<Image src={BackIcon} alt="뒤로가기 아이콘" />}
          >
            목록으로 돌아가기
          </Button>
        </div>
      </div>
    </>
  )
}

export default ItemsDetail
