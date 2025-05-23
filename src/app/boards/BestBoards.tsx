'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import { useGetBestArticles } from '../../hooks/useGetBeatArticle'

import HeartInactive from '../../../public/assets/image/heart_inactive.png'
import BestBadge from '../../../public/assets/image/best_badge.png'
import { formatDate } from '../../utils/datetime'

import styles from './BestBoards.module.scss'
const BestBoards = () => {
  const [bestPageSize, setBestPageSize] = useState(3)
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

  // useGetBestArticles 훅을 사용하여 베스트 게시글 목록을 가져옵니다.
  const bestArticleList = useGetBestArticles(bestPageSize)

  if (!bestArticleList) {
    return <div>게시글을 불러오는 중입니다...</div>
  }
  return (
    <>
      <div className={styles['best-boards-title']}>베스트 게시글</div>
      <div className={styles['bone-wrapper']}>
        {bestArticleList.list.map((article) => (
          <div className={styles['main-wrapper']} key={article.id}>
            <>
              <Image src={BestBadge} alt="베스트 게시글 오피셜 아이콘" />
            </>
            <div className={styles['description']}>
              <div className={styles['text-description']}>
                {article.content}
              </div>
              <div className={styles['description-image']}>
                <img src={article.image} alt="게시글 이미지" />
              </div>
            </div>
            <div className={styles['main-footer']}>
              <div className={styles['name-heart']}>
                <div className={styles['user-name']}>
                  {article.writer.nickname}
                </div>
                <div className={styles['user-heart']}>
                  <Image src={HeartInactive} alt="하트 비활성화/활성화" />
                  <div className={styles['heart-count']}>
                    {article.likeCount}
                  </div>
                </div>
              </div>
              <div className={styles['create-date']}>
                {formatDate(article.createdAt)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default BestBoards
