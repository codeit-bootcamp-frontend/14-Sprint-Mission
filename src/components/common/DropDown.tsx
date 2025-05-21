'use client'
import React, { useRef, useState, useEffect } from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import ArrowDown from '../../../public/assets/image/arrow_down.png'
import Sort from '../../../public/assets/svg/sort_arrow.svg'

import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'

type OptionType = {
  name: string
  value: string
}

type DropDownProps = {
  selectList: OptionType[]
  selected: string
  onChange: (value: string) => void
  left?: string
  top?: string
}

const DropDown = ({
  selectList,
  selected,
  onChange,
  left = '0',
  top = '0',
}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const selectRef = useRef(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (value: string) => {
    onChange(value)
    setIsOpen(false)
  }

  useEffect(() => {
    const handleResize = () => {}

    window.addEventListener('resize', handleResize) // resize: 창 크기가 변경될 때 발생하는 이벤트 / handleResize: 이벤트가 발생할 때 실행할 함수
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div style={{ position: 'relative' }}>
      <SelectBox
        ref={selectRef}
        onClick={toggleDropdown}
        $left={left}
        $top={top}
      >
        {window.innerWidth <= 743 ? (
          <Image src={Sort} alt="Sort" />
        ) : (
          selectList.find((item) => item.value === selected)?.name
        )}
        <ArrowDownImage src={ArrowDown.src} alt="Sort" isOpen={isOpen} />
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

const SelectBox = styled.div<{ $left?: string; $top?: string }>`
  width: 13rem;
  height: 100%;
  cursor: pointer;
  padding: 0.8rem 2rem;
  border: 1px solid ${theme.colors.SecondaryGray[200]};
  border-radius: 1.2rem;
  background-color: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 743px) {
    width: max-content;
    height: max-content;
    justify-content: center;

    left: ${({ $left }) => $left || '0'};
    top: ${({ $top }) => $top || '0'};
    padding: 0.9rem;
  }
`
const ArrowDownImage = styled.img.withConfig({
  shouldForwardProp: (prop) => prop !== 'isOpen',
})<{ isOpen: boolean }>`
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
  top: 5.8rem;

  width: 100%;
  border: 1px solid #cccccc;
  border-radius: 12px;
  background-color: #ffffff;
  color: #181818;
  ${(props) => textStyle(16, 400)(props)}

  z-index: 10;
  list-style: none;

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
  padding: 9px 28px;
  cursor: pointer;
  width: inherit;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  &:hover {
    background-color: #f6f6f6;
  }
  @media (max-width: 743px) {
    padding: 7px 35px;
  }
`
