import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { GetArticleIdType } from '../../types/article'
import { diffDate } from '../../utils/datetime'
import { formatDate } from '../../utils/datetime'

import HeartInactive from '../../../public/assets/image/heart_inactive.png'

import styles from './BoardDetailArrary.module.scss'

type BestBoardsProps = {
  article: GetArticleIdType
}

const BoardDetailArrary = ({ article }: BestBoardsProps) => {
  console.log('BoardDetailArrary', article)
  const router = useRouter()
  const handleClickBoardID = () => {
    router.push(`/boards/${article.id}`)
  }
  return (
    <>
      <div className={styles['bone']} onClick={handleClickBoardID}>
        <div className={styles['content-wrapper']}>
          <div className={styles['question-content']}>{article.content}</div>
          {article.image && (
            <img src={article.image} alt="게시글 상세 이미지" />
          )}
        </div>
        <div className={styles['user-profile-image-wrapper']}>
          <div className={styles['name-profile']}>
            {/*이미지가 없을 경우 기본 이미지 적용*/}
            <Image
              src={'/assets/svg/profile_icon.svg'}
              alt="유저프로필사진"
              width={32}
              height={32}
            />

            <div className={styles['user-profile-name']}>
              {article.writer.nickname}
            </div>
            {/*날짜 차이가 31일을 넘길 경우 createAt을 출력*/}
            <div className={styles['diff-date']}>
              {diffDate(article.createdAt) > 31 ? (
                <>
                  <span>{formatDate(article.createdAt)}</span>
                </>
              ) : (
                <>
                  <span>{diffDate(article.createdAt)}</span>
                  <span>일 전</span>
                </>
              )}
            </div>
          </div>
          <div className={styles['heart-count']}>
            <Image
              src={HeartInactive}
              alt="HeartInactive"
              width={24}
              height={24}
            />
            <>{article.likeCount}</>
          </div>
        </div>
      </div>
    </>
  )
}

export default BoardDetailArrary
