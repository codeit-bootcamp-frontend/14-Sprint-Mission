import React, { useState } from 'react'
import { theme } from '../styles/theme'
import { textStyle } from '../styles/textStyle'
import styled from 'styled-components'
import Image from 'next/image'

const Field = styled.span`
  display: inline-block;
  margin-bottom: 1.6rem;
  @media (max-width: 743px) {
    margin-bottom: 0.8rem;
  }
`
interface InputProps {
  $isError?: boolean
}
const Input = styled.input<InputProps>`
  width: 100%;
  padding: 1.5rem 2.4rem;

  border-radius: 1.2rem;
  ${(props) => textStyle(16, 400)(props)}
  color: ${theme.colors.SecondaryGray[800]};
  background-color: ${theme.colors.SecondaryGray[100]};

  border: 1px solid
    ${({ $isError }) =>
      $isError ? theme.colors.error : theme.colors.PrimaryBlue[100]};
  &:hover {
    border: 1px solid
      ${({ $isError }) =>
        $isError ? theme.colors.error : theme.colors.PrimaryBlue[100]};
  }
`
const InputWrapper = styled.label`
  width: 100%;
  height: 9.8rem;
  margin-bottom: 2.4rem;
  ${(props) => textStyle(18, 700)(props)}
  color: ${theme.colors.SecondaryGray[800]};
  @media (max-width: 743px) {
    ${(props) => textStyle(14, 700)(props)}
    height: 8.8rem;
  }
`

const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  position: relative;
  left: 594px;
  top: -41px;
  cursor: pointer;
  @media (max-width: 743px) {
    left: 302px;
  }
`
const ErrorMessage = styled.div`
  color: ${theme.colors.error};
  ${(props) => textStyle(14, 600)(props)}
  margin: 0.5rem 1rem;
  top: -28px;
  position: relative;
`
interface LoginFieldtProps {
  label: string
  type: string
  id: string
  placeholder: string
  icon?: string | null
  onIconClick?: () => void
  validate?: (value: string) => string
  value: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
}
const LoginField = ({
  // 부모에게 받음
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
    // 포커스를 잃었을 때 사용
    if (validate) {
      setError(validate(value))
    }
  }

  return (
    <>
      <InputWrapper htmlFor={id}>
        <Field>{label}</Field>
        <>
          <Input
            type={type}
            name={id}
            placeholder={placeholder}
            id={id}
            value={value}
            onChange={onChange}
            onBlur={handleBlur}
            $isError={!!error}
          />
          {icon && (
            <IconWrapper onClick={onIconClick}>
              <Image
                src={icon}
                alt={`${label} 아이콘`}
                width={24}
                height={24}
              />
            </IconWrapper>
          )}
        </>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputWrapper>
    </>
  )
}

export default LoginField
