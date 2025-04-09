import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'

interface TextInputPlaceholderProps {
  placeholder: string
  height?: string
  padding?: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>
}

const TextInputPlaceholder: React.FC<TextInputPlaceholderProps> = ({
  placeholder,
  height,
  padding,
  value,
  onChange,
  onKeyDown,
}) => {
  return (
    <Bone
      placeholder={placeholder}
      height={height}
      padding={padding}
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
    />
  )
}

export default TextInputPlaceholder

const Bone = styled.textarea<{ height: string; padding: string }>`
  width: 100%;
  height: ${(props) => props.height || '56px'};
  background-color: ${theme.colors.SecondaryGray[100]};
  ${(props) => textStyle(16, 400)(props)}
  color: ${theme.colors.SecondaryGray[800]};
  border-radius: 12px;
  border: none;
  padding: ${(props) => props.padding || '15px 24px'};
  resize: none;
  box-sizing: border-box;
  display: block;
  cursor: text;
  word-break: break-word;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  ::placeholder {
    color: ${theme.colors.SecondaryGray[400]};
  }
  @media (max-width: 743px) {
    ${(props) => textStyle(14, 400)(props)}
  }
`
