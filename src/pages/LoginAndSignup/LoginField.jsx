import React, { useState } from 'react'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'
import styled from 'styled-components'

const PlaceholderWrapper = styled.div`
  height: 3.75rem;
`
const Field = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
`

const Input = styled.input`
  width: 100%;
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 12px;
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
const InputWrapper = styled.div`
  width: 100%;
  height: 6.125rem;
  margin-bottom: 3rem;
  ${(props) => textStyle(18, 700)(props)}
  color: ${theme.colors.SecondaryGray[800]};
`

const Icon = styled.img`
  width: 24px;
  height: 24px;
  position: relative;
  left: 594px;
  top: -41px;
  cursor: pointer;
  @media (max-width: 375px) {
    left: 302px;
  }
`
const ErrorMessage = styled.div`
  color: ${theme.colors.error};
  ${(props) => textStyle(14, 600)(props)}
  margin: 0.5rem 1rem;
`

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
}) => {
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
        <PlaceholderWrapper>
          <Input
            label={label}
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
            <Icon src={icon} alt={`${label} 아이콘`} onClick={onIconClick} />
          )}
        </PlaceholderWrapper>
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </InputWrapper>
    </>
  )
}

export default LoginField
