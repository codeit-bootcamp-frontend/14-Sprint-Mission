import React, { useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'

const Bone = styled.input`
  width: 100%;
  height: ${(props) => props.height || '56px'};
  background-color: ${theme.colors.SecondaryGray[100]};
  ${(props) => textStyle(16, 400)(props)}
  color: ${theme.colors.SecondaryGray[400]};
  border-radius: 12px;
  border: none;
  padding: ${(props) => props.padding || '15px 24px'};
`

const Placeholder = ({ placeholder, height, padding }) => {
  const [inputValue, setInputValue] = useState('')
  const handleChange = (event) => {
    setInputValue(event.target.value)
  }
  return (
    <Bone
      placeholder={placeholder}
      height={height}
      padding={padding}
      value={inputValue}
      onChange={handleChange}
    ></Bone>
  )
}

export default Placeholder
