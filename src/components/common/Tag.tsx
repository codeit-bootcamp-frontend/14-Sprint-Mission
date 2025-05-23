import React from 'react'
import Image from 'next/image'

import Delete from '../../../public/assets/svg/delete_tag.svg'

import styles from './Tag.module.scss'

interface TagProps {
  tag: string
  onClick?: (tag: string) => void
  showDelete?: boolean
}

const Tag = ({ tag, onClick, showDelete = false }: TagProps) => {
  console.log('Tag 컴포넌트에 전달된 productTags:', tag)
  return (
    <div>
      <div className={styles['bone']}>
        <div className={styles['text']}>#{tag}</div>
        {showDelete && (
          <Image src={Delete} alt="삭제" onClick={() => onClick?.(tag)} />
        )}
      </div>
    </div>
  )
}

export default Tag
