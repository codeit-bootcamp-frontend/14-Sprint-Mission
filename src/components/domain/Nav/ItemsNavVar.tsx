'use client'

import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

import LogoFace from '../../../../public/assets/image/logo_face.png'
import Logo from '../../../../public/assets/image/logo_text.png'
import ProfileIcon from '../../../../public/assets/svg/profile_icon.svg'

import styles from './ItemsNavVar.module.scss'
import clsx from 'clsx'

interface ItemsNavVarProps {
  isItemsPage: boolean
  isBoardsPage: boolean
}

const ItemsNavVar = ({ isItemsPage, isBoardsPage }: ItemsNavVarProps) => {
  return (
    <>
      <div className={styles['bone']}>
        <div className={styles['left-wrapper']}>
          <div className={styles['header-logo']}>
            <Link href="/">
              <div className={styles['panda-logo-wrapper']}>
                <Image src={LogoFace} alt="판다마켓 로고 사진" />
              </div>
            </Link>
            <Link href="/">
              <div className={styles['panda-text-wrapper']}>
                <Image src={Logo} alt="판다마켓 로고 사진" />
              </div>
            </Link>
          </div>
          <div className={styles['nav-content']}>
            <Link href="/boards">
              <div
                className={clsx(styles['free-board-link'], {
                  [styles.active]: isBoardsPage,
                })}
              >
                자유게시판
              </div>
            </Link>
            <Link href="/items">
              <div
                className={clsx(styles['market-link'], {
                  [styles.active]: isItemsPage,
                })}
              >
                중고마켓
              </div>
            </Link>
          </div>
        </div>
        <Image src={ProfileIcon} alt="프로필 아이콘" />
      </div>
    </>
  )
}

export default ItemsNavVar
