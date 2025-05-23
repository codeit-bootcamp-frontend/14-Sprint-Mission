'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'

import { PostCommentType } from '../../../types/comment'
import Button from '../../../components/common/Button'
import TextInputPlaceholder from '../../../components/common/TextInputPlaceholder'
import commentService from '../../../lib/api/service/commentService'
import { diffDate } from '../../../utils/datetime'
import { formatDate } from '../../../utils/datetime'

import Setting from '../../../../public/assets/svg/setting_icon.svg'

import styles from './ItemsDetailQuestionArrary.module.scss'

interface ItemsDetailQuestionArraryProps {
  productQuestion: PostCommentType
  setIsEditing?: React.Dispatch<React.SetStateAction<boolean>>
  isEditing?: boolean
}

const ItemsDetailQuestionArrary = ({
  productQuestion,
}: ItemsDetailQuestionArraryProps) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)
  const dropDownRef = useRef<HTMLDivElement>(null)
  const [userComment, setUserComment] = useState(productQuestion.content)
  const [isEditingState, setIsEditingState] = useState(false)
  // 수정 삭제 버튼
  const handleSettingClick = () => {
    setIsDropDownOpen((prev) => !prev)
  }
  const handleEditSuccessClick = async () => {
    await commentService.patchComment(productQuestion.id, {
      content: userComment,
    })
    setIsEditingState(false)
  }

  const handleEditCancle = () => {
    setIsEditingState(false)
  }
  // 수정하기 눌렀을 때 버튼
  const handleEditClick = () => {
    setIsEditingState(true)
    setIsDropDownOpen((prev) => !prev)
  }
  // 다른 곳 클릭시 수정삭제 버튼이 닫힘
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropDownRef.current &&
        !dropDownRef.current.contains(event.target as Node)
      ) {
        setIsDropDownOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <>
      {isEditingState ? (
        <div className={styles['edit-bone']}>
          <div className={styles['editing-wrapper']}>
            {/*로그인을 하지 않아 토큰?전달이 되지 않은 상태*/}
            <TextInputPlaceholder
              height="84px"
              value={userComment}
              padding="16px 24px 40px 24px"
              onChange={(e) => setUserComment(e.target.value)}
            />
            <div className={styles['button-edit-wrapper']}>
              <button
                className={styles['edit-cancel-button']}
                onClick={handleEditCancle}
              >
                취소
              </button>
              <div>
                <Button
                  className={styles['edit-button']}
                  size={42.5}
                  onClick={handleEditSuccessClick}
                >
                  수정완료
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div className={styles['bone']}>
        <div>
          <div className={styles['question-content']}>
            {productQuestion.content}
          </div>
          <div className={styles['user-profile-image-wrapper']}>
            {/*이미지가 없을 경우 기본 이미지 적용*/}
            <img
              src={
                productQuestion.writer.image || '/assets/svg/profile_icon.svg'
              }
              alt="유저프로필사진"
              width={32}
              height={32}
            />
            <div className={styles['user-profile-image-right']}>
              <div className={styles['user-profile-name']}>
                {productQuestion.writer.nickname}
              </div>
              {/*날짜 차이가 31일을 넘길 경우 createAt을 출력*/}
              <div className={styles['diff-date']}>
                {diffDate(productQuestion.createdAt) > 31 ? (
                  <>
                    <span>{formatDate(productQuestion.createdAt)}</span>
                  </>
                ) : (
                  <>
                    <span>{diffDate(productQuestion.createdAt)}</span>
                    <span>일 전</span>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className={styles['setting-button-wrapper']} ref={dropDownRef}>
          <Image
            src={Setting}
            alt="수정, 삭제 선택 버튼"
            onClick={handleSettingClick}
          />
          {isDropDownOpen && (
            <ul className={styles['select-option']}>
              <li className={styles['option']} onClick={handleEditClick}>
                수정하기
              </li>
              <li className={styles['option']}>삭제하기</li>
            </ul>
          )}
        </div>
      </div>
    </>
  )
}

export default ItemsDetailQuestionArrary
