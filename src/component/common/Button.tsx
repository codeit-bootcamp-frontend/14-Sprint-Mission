import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactNode } from 'react'

interface ButtonProps {
  size: number
  width?: number
  paddingHeight?: number
  paddingWidth?: number
  onClick?: () => void
  disabled?: boolean
  children?: ReactNode
  prefix?: ReactNode
  suffix?: ReactNode
  as?: 'button' | typeof Link
  to?: string
}

//React.FC는 함수형 컴포넌트를 선언할 때 사용함
const Button: React.FC<ButtonProps> = ({
  size = 43,
  width,
  paddingHeight,
  paddingWidth,
  onClick,
  disabled,
  children,
  prefix,
  suffix,
  as = 'button',
  to,
}) => {
  // as는 기본적으로 버튼이지만 Link있는지 확인하면 Link를 사용함
  const isLink = as === Link
  return (
    <ButtonWrapper
      as={as}
      // 전개 연산자를 사용하지 않으면 button 태그에 to 속성이 들어가서 타입 에러 발생 가능성 있음
      {...(isLink ? { to } : {})}
      size={size}
      width={width}
      onClick={onClick}
      disabled={disabled}
      paddingHeight={paddingHeight}
      paddingWidth={paddingWidth}
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
  width?: number
  paddingHeight?: number
  paddingWidth?: number
}
// [size!]에 느낌표는 필수로 넣어야 하는 값으로 설정한 것것
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
  height: ${({ size }) => (size === 43 ? '48px' : 'auto')};
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  font-size: ${({ size }) => ButtonSize[size!]?.fontSize || '16px'};
  padding: ${({ paddingHeight, paddingWidth }) =>
    paddingHeight && paddingWidth
      ? `${paddingHeight}px ${paddingWidth}px`
      : `16px`};
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
    height: string
    fontSize: string
    fontWeight: number
    padding?: string
    borderRadius: string
  }
>
const ButtonSize: ButtonSizeType = {
  56: {
    height: '56px',
    fontSize: '20px',
    fontWeight: 600,
    padding: '12px 124px',
    borderRadius: '40px',
  },
  48: {
    height: '48px',
    fontSize: '18px',
    fontWeight: 600,
    padding: '11px 71px',
    borderRadius: '40px',
  },

  42.5: {
    height: '42px',
    fontSize: '16px',
    fontWeight: 600,
    padding: '9px 20px',
    borderRadius: '8px',
  },
  48.5: {
    height: '48px',
    fontSize: '16px',
    fontWeight: 600,
    padding: '11px 30px',
    borderRadius: '8px',
  },
  0: {
    height: '40px',
    fontSize: '16px',
    fontWeight: 600,
    borderRadius: '40px',
  },
}
