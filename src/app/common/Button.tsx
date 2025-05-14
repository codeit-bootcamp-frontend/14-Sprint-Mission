import styled from 'styled-components'
import Link from 'next/link'
import { ReactNode, CSSProperties } from 'react'

interface ButtonProps {
  size: number
  onClick?: () => void
  disabled?: boolean
  children?: ReactNode
  style?: CSSProperties
  prefix?: ReactNode
  suffix?: ReactNode
  as?: 'button' | typeof Link
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
  as = 'button',
  to,
  className,
}: ButtonProps) => {
  const isLink = as === Link

  if (isLink && !to) {
    console.error('Error: "to" prop is required when "as" is Link.')
    return null
  }

  if (isLink) {
    return (
      <Link href={to!} passHref legacyBehavior>
        <a style={{ textDecoration: 'none' }}>
          <ButtonWrapper
            as="div"
            size={size}
            className={className}
            style={style}
          >
            <ButtonInner>
              {prefix && <ButtonInnerText>{prefix}</ButtonInnerText>}
              <ButtonInnerText>{children}</ButtonInnerText>
              {suffix && <ButtonInnerText>{suffix}</ButtonInnerText>}
            </ButtonInner>
          </ButtonWrapper>
        </a>
      </Link>
    )
  }

  return (
    <ButtonWrapper
      as="button"
      className={className}
      style={style}
      size={size}
      onClick={onClick}
      disabled={disabled}
    >
      <ButtonInner>
        {prefix && <ButtonInnerText>{prefix}</ButtonInnerText>}
        <ButtonInnerText>{children}</ButtonInnerText>
        {suffix && <ButtonInnerText>{suffix}</ButtonInnerText>}
      </ButtonInner>
    </ButtonWrapper>
  )
}

export default Button

interface StyledButtonWrapper {
  size?: number
}

const ButtonWrapper = styled.button<StyledButtonWrapper>`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background: ${({ theme }) => theme.colors.PrimaryBlue[100]};
  color: ${({ theme }) => theme.colors.SecondaryGray[50]};
  font-weight: ${({ size }) => ButtonSize[size!]?.fontWeight || 600};
  border-radius: ${({ size }) => ButtonSize[size!]?.borderRadius || '40px'};

  font-size: ${({ size }) => ButtonSize[size!]?.fontSize || '16px'};

  transition: all 0.3s ease-in-out;
  &:hover {
    background: ${({ theme }) => theme.colors.PrimaryBlue[200]};
    transform: scale(1.01);
  }
  &:active {
    transform: scale(0.95);
  }
  &:disabled {
    background: ${({ theme }) => theme.colors.SecondaryGray[400]};
    cursor: not-allowed;
  }
`
const ButtonInner = styled.span`
  display: flex;
  align-items: center;
  gap: 0.3rem;
`
const ButtonInnerText = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
`

//Record<key, value>는 TypeScript의 내장 제네릭 유틸리티 타입: 객체의 키와 값의 타입을 명확하게 정의
// theme.d.ts와 다른 이유는 DefaultTheme 타입을 확장했고 여기는 안 함
type ButtonSizeType = Record<
  number,
  {
    fontSize: string
    fontWeight: number

    borderRadius: string
  }
>
const ButtonSize: ButtonSizeType = {
  56: {
    fontSize: '20px',
    fontWeight: 600,

    borderRadius: '40px',
  },
  48: {
    fontSize: '18px',
    fontWeight: 600,

    borderRadius: '40px',
  },

  42.5: {
    fontSize: '16px',
    fontWeight: 600,

    borderRadius: '8px',
  },
  48.5: {
    fontSize: '16px',
    fontWeight: 600,

    borderRadius: '8px',
  },
  0: {
    fontSize: '16px',
    fontWeight: 600,
    borderRadius: '40px',
  },
}
