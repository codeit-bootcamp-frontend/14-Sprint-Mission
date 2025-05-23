import Link from 'next/link'
import { ReactNode, CSSProperties } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
  size: number
  onClick?: () => void
  disabled?: boolean
  children?: ReactNode
  style?: CSSProperties
  prefix?: ReactNode
  suffix?: ReactNode
  to?: string
  className?: string
}

const Button = ({
  size = 48.5,
  onClick,
  disabled,
  children,
  style,
  prefix,
  suffix,
  to,
  className,
}: ButtonProps) => {
  const isLink = !!to

  const sizeClassMap: Record<number, string> = {
    56: styles.size56,
    48: styles.size48,
    48.5: styles.size48_5,
    42.5: styles.size42_5,
  }

  const sizeClass = sizeClassMap[size] || styles.size48_5

  const buttonClass = `${styles['button-wrapper']} ${sizeClass} ${
    className ?? ''
  }`

  const content = (
    <div className={styles['button-inner']}>
      {prefix && <span className={styles['button-inner-text']}>{prefix}</span>}
      <span className={styles['button-inner-text']}>{children}</span>
      {suffix && <span className={styles['button-inner-text']}>{suffix}</span>}
    </div>
  )

  if (isLink) {
    return (
      <Link href={to!} style={{ textDecoration: 'none' }} prefetch={true}>
        <div className={buttonClass} style={style}>
          {content}
        </div>
      </Link>
    )
  }

  return (
    <button
      className={buttonClass}
      style={style}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  )
}

export default Button
