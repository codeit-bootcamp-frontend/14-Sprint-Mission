import React, { useState } from 'react'
import Image from 'next/image'

import styles from './LoginField.module.scss'
import clsx from 'clsx'

interface LoginFieldtProps {
  label: string
  type: string
  id: string
  placeholder: string
  icon?: string | null
  onIconClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  validate?: (value: string) => string
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}
const LoginField = ({
  label,
  type = 'text',
  id,
  placeholder,
  icon = null,
  onIconClick,
  validate,
  value,
  onChange,
}: LoginFieldtProps) => {
  const [error, setError] = useState('')

  const handleBlur = () => {
    if (validate) {
      setError(validate(value))
    }
  }

  return (
    <div className={styles['input-wrapper']}>
      {/* label 하지 않은 이유는 아이콘 클릭시 input에 포커스 가기 때문에 label을 삭제하고 div를 넣음*/}
      <div className={styles['field']}>{label}</div>
      <div style={{ position: 'relative' }}>
        <input
          className={clsx(styles.input, {
            [styles.error]: !!error,
          })}
          type={type}
          name={id}
          placeholder={placeholder}
          id={id}
          value={value}
          onChange={onChange}
          onBlur={handleBlur}
        />
        {icon && (
          <div
            className={styles['icon-wrapper']}
            onClick={(e) => {
              e.stopPropagation()
              if (onIconClick) onIconClick(e)
            }}
            tabIndex={-1}
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          >
            <Image src={icon} alt={`${label} 아이콘`} width={24} height={24} />
          </div>
        )}
      </div>
      <div className={styles['error-position']}>
        {error && <div className={styles['error-message']}>{error}</div>}
      </div>
    </div>
  )
}

export default LoginField
