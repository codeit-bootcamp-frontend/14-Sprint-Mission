'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { useParams } from 'next/navigation'

import ItemsDetailQuestionArrary from '@/app/items/[productId]/ItemsDetailQuestionArrary'
import commentService from '../../../lib/api/service/commentService'
import TextInputPlaceholder from '@/components/common/TextInputPlaceholder'
import Button from '../../../components/common/Button'

import BackIcon from '../../../../public/assets/svg/back_icon.svg'
import NoComment from '../../../../public/assets/svg/no_comment.svg'

import styles from './BoardCommentList.module.scss'

const BoardCommentList = () => {
  const [articleComment, setArticleComment] = useState('')
  const [productQuestion, setProductQuestion] = useState([])
  const { id } = useParams()
  useEffect(() => {
    if (!id) return
    const fetchData = async () => {
      try {
        const response = await commentService.getArticleComment(id, 5)
        setProductQuestion(response.data?.list ?? [])
        console.log('BoardDescription', response.data)
      } catch (error) {
        console.error('Error fetching article:', error)
      }
    }
    fetchData()
  }, [id])

  const isState = articleComment.length >= 1
  return (
    <div>
      <div>
        <div className={styles['title-comment-font']}>댓글달기 </div>
        <TextInputPlaceholder
          placeholder={'댓글을 입력해주세요'}
          height="104px "
          padding="16px 24px 16px 24px"
          value={articleComment}
          onChange={(e) => setArticleComment(e.target.value)}
        />
        <div className={styles['register-button-container']}>
          <Button
            className={styles['register-button']}
            size={42.5}
            disabled={!isState}
          >
            등록
          </Button>
        </div>
      </div>
      <div>
        {!productQuestion || productQuestion.length === 0 ? (
          <div className={styles['inquiry-empty-wrapper']}>
            <Image src={NoComment} alt="댓글이 없습니다" />
          </div>
        ) : (
          <>
            <div className={styles['items-question-wrapper']}>
              {productQuestion.map((question, index) => (
                <ItemsDetailQuestionArrary
                  key={index}
                  productQuestion={question}
                />
              ))}
            </div>
          </>
        )}
        <div className={styles['button-wrapper']}>
          <Button
            className={styles['list-button']}
            to="/boards"
            size={48}
            suffix={<Image src={BackIcon} alt="뒤로가기 아이콘" />}
          >
            목록으로 돌아가기
          </Button>
        </div>
      </div>
    </div>
  )
}

export default BoardCommentList
