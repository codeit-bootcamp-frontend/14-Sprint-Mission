import React from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'

const Bone = styled.input`
  width: 100%;
  height: ${(props) => props.height || '56px'};
  background-color: ${theme.colors.SecondaryGray[100]};
  ${(props) => textStyle(16, 400)(props)}
  color: ${theme.colors.SecondaryGray[800]};
  border-radius: 12px;
  border: none;
  padding: ${(props) => props.padding || '15px 24px'};
  ::placeholder {
    color: ${theme.colors.SecondaryGray[400]}; 
`

const Placeholder = ({
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

export default Placeholder
