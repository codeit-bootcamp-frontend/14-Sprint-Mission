'use client'
import React, { useRef, useState, useEffect } from 'react'
import Image from 'next/image'

import ArrowDown from '../../../public/assets/image/arrow_down.png'
import Sort from '../../../public/assets/svg/sort_arrow.svg'

import styles from './DropDown.module.scss'

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
  const [isMobile, setIsMobile] = useState(false)
  const selectRef = useRef(null)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const handleSelect = (value: string) => {
    onChange(value)
    setIsOpen(false)
  }

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 743)
    }

    checkIsMobile() // 초기 실행
    window.addEventListener('resize', checkIsMobile)

    return () => window.removeEventListener('resize', checkIsMobile)
  }, [])
  return (
    <div className={styles['dropdown-container']}>
      <div
        className={styles['select-box']}
        ref={selectRef}
        onClick={toggleDropdown}
        style={{ left, top }}
      >
        {isMobile ? (
          <Image src={Sort} alt="Sort" />
        ) : (
          selectList.find((item) => item.value === selected)?.name
        )}
        <img
          src={ArrowDown.src}
          alt="Arrow"
          className={`${styles['arrow-icon']} ${isOpen ? styles['open'] : ''}`}
        />
      </div>

      {isOpen && (
        <ul className={styles['select-option']}>
          {selectList.map((item) => (
            <li
              key={item.value}
              className={styles.option}
              onClick={() => handleSelect(item.value)}
            >
              {item.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default DropDown
