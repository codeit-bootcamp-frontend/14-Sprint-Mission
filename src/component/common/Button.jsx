import styled from 'styled-components'

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
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  font-size: ${({ size }) => ButtonSize[size]?.fontSize || '16px'};
  padding: ${({ size }) => ButtonSize[size]?.padding || '16px'};

  &:hover {
    background: ${({ theme }) => theme.colors.PrimaryBlue[200]};
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.SecondaryGray[400]};
    cursor: not-allowed;
  }
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
}

const Button = ({ size = 43, width, onClick, disabled, children }) => {
  return (
    <ButtonWrapper
      size={size}
      width={width}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonWrapper>
  )
}

export default Button
