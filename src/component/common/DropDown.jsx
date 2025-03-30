import React, { useRef, useState } from 'react'
import styled from 'styled-components'
import { theme } from '../../styles/theme'
import ArrowDown from '../../assets/image/ArrowDown.png'

const SelectBox = styled.select`
  width: 8.125rem;
  height: 100%;
  appearance: none;
  cursor: pointer;
  padding: 0.75rem 1.25rem;
  border: 1px solid ${theme.colors.SecondaryGray[200]};
  border-radius: 0.75rem;
`

const ArrowDownImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  position: relative;
  left: -40px;
  cursor: pointer;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
`

const DropDown = ({ selectList, selected, onChange }) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef(0)

  const handleSelect = (e) => {
    onChange(e.target.value)
  }

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
    selectRef.current?.focus()
  }

  return (
    <>
      <SelectBox
        ref={selectRef}
        value={selected}
        onChange={handleSelect}
        onClick={() => setIsOpen(!isOpen)}
        onBlur={() => setIsOpen(false)}
      >
        {selectList.map((item) => (
          <option value={item.value} key={item.value}>
            {item.name}
          </option>
        ))}
      </SelectBox>
      <ArrowDownImage
        isOpen={isOpen}
        src={ArrowDown}
        onClick={toggleDropdown}
      />
    </>
  )
}

export default DropDown
