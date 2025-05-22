'use client'

import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

import ArticleService from '../../../lib/api/service/articleService'
import { GetArticleIdType } from '../../../types/article'
import { diffDate } from '../../../utils/datetime'
import { formatDate } from '../../../utils/datetime'

import Setting from '../../../../public/assets/svg/setting_icon.svg'
import HeartInactive from '../../../../public/assets/image/heart_inactive.png'
import ProfileIcon from '../../../../public/assets/svg/profile_icon.svg'

import styles from './BoardDescription.module.scss'
import Image from 'next/image'
const BoardDescription = () => {
  const [articleId, setArticleId] = useState<GetArticleIdType>()
  const { id } = useParams()

  useEffect(() => {
    if (!id) return
    const fetchData = async () => {
      try {
        const response = await ArticleService.getArticleId(id)
        setArticleId(response.data)
        console.log('BoardDescription', response.data)
      } catch (error) {
        console.error('Error fetching article:', error)
      }
    }
    fetchData()
  }, [id])
  if (!articleId) return null
  return (
    <div>
      <div className={styles['article-wrapper']}>
        <div className={styles['article-title']}>
          {articleId?.title}
          <Image src={Setting} alt="설정 아이콘" />
        </div>
        <div className={styles['article-content']}>
          <div className={styles['article-profile-wrapper']}>
            <div className={styles['article-profile-image']}>
              <Image src={ProfileIcon} alt="프로필 아이콘" />
            </div>
            <div className={styles['article-profile-info']}>
              <div className={styles['article-profile-nickname']}>
                {articleId?.writer.nickname}
              </div>
              <div className={styles['article-profile-date']}>
                {diffDate(articleId.createdAt) > 31 ? (
                  <>
                    <span>{formatDate(articleId.createdAt)}</span>
                  </>
                ) : (
                  <>
                    <span>{diffDate(articleId.createdAt)}</span>
                    <span>일 전</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <div>
            <div className={styles['article-heart-wrapper']}>
              <div className={styles['article-heart-image']}>
                <Image src={HeartInactive} alt="하트 비활성화/활성화" />
              </div>
              <div className={styles['article-heart-count']}>
                {articleId?.likeCount}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['article-content-bottom']}>
        {articleId?.content}
      </div>
    </div>
  )
}

export default BoardDescription
