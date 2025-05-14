import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import { theme } from '../styles/theme'
import { textStyle } from '../styles/textStyle'
import ArrowDown from '../../public/assets/image/ArrowDown.png'
import Sort from '../../public/assets/svg/Sort.svg'

type OptionType = {
  name: string
  value: string
}

type DropDownProps = {
  selectList: OptionType[]
  selected: string
  onChange: (value: string) => void
}

const DropDown = ({ selectList, selected, onChange }: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef(null)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (value: string) => {
    onChange(value)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize) // resize: 창 크기가 변경될 때 발생하는 이벤트 / handleResize: 이벤트가 발생할 때 실행할 함수
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div style={{ position: 'relative' }}>
      <SelectBox ref={selectRef} onClick={toggleDropdown}>
        {window.innerWidth <= 743 ? (
          <SortImage src={Sort} alt="Sort" />
        ) : (
          selectList.find((item) => item.value === selected)?.name
        )}
        <ArrowDownImage isOpen={isOpen} src={ArrowDown} />
      </SelectBox>

      {isOpen && (
        <SelectOption>
          {selectList.map((item) => (
            <Option key={item.value} onClick={() => handleSelect(item.value)}>
              {item.name}
            </Option>
          ))}
        </SelectOption>
      )}
    </div>
  )
}

export default DropDown

const SelectBox = styled.div`
  width: 8.125rem;
  height: 100%;
  cursor: pointer;
  padding: 0.5rem 1.25rem;
  border: 1px solid ${theme.colors.SecondaryGray[200]};
  border-radius: 0.75rem;
  background-color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 743px) {
    width: 2.625rem;
    height: 2.625rem;
    justify-content: center;
    position: relative;
    left: 14px;
    top: 10px;
  }
`
const SortImage = styled.img`
  width: 0;
  height: 0;
  @media (max-width: 743px) {
    width: 24px;
    height: 24px;
  }
`
const ArrowDownImage = styled.img<{ isOpen: boolean }>`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;
  transition: transform 0.3s ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotate(180deg)' : 'rotate(0deg)')};
  @media (max-width: 743px) {
    width: 0;
    height: 0;
  }
`
const SelectOption = styled.ul`
  position: absolute;
  top: 3.8rem;
  left: 0;
  width: 100%;
  border: 1px solid #cccccc;
  border-radius: 12px;
  background-color: #ffffff;
  color: #181818;
  ${(props) => textStyle(16, 400)(props)}
  max-height: 300px;
  overflow-y: auto;
  z-index: 10;
  list-style: none;
  padding: 0;
  display: flex;
  align-items: center;
  flex-direction: column;

  justify-content: space-around;
  @media (max-width: 743px) {
    position: absolute;
    top: 62px;
    left: -72px;
    z-index: 1;
    width: 130px;
    height: 84px;
  }
`
const Option = styled.li`
  ${(props) => textStyle(16, 400)(props)}
  padding: 8px 35px;
  cursor: pointer;
  &:hover {
    background-color: #f6f6f6;
  }
  @media (max-width: 743px) {
    padding: 7px 35px;
  }
`
