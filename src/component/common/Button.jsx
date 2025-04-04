import styled from 'styled-components'
import { Link } from 'react-router-dom'
const ButtonWrapper = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  background: ${({ theme }) => theme.colors.PrimaryBlue[100]};
  color: ${({ theme }) => theme.colors.SecondaryGray[50]};
  font-weight: ${({ size }) => ButtonSize[size]?.fontWeight || 600};
  border-radius: ${({ size }) => ButtonSize[size]?.borderRadius || '40px'};
  height: ${({ size }) => (size === 43 ? '48px' : 'auto')};
  width: ${({ width }) => (width ? `${width}px` : 'max-content')};
  font-size: ${({ size }) => ButtonSize[size]?.fontSize || '16px'};
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
const ButtonSize = {
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
    media: {
      744: {},
    },
  },
  0: {
    height: '40px',
    width: '40px',
    fontSize: '16px',
    fontWeight: 600,
    borderRadius: '40px',
  },
}

const Button = ({
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
  return (
    <ButtonWrapper
      as={as}
      to={as === Link ? to : undefined}
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
