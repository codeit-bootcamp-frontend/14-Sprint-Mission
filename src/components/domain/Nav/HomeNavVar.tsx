'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState, useRef } from 'react'

import Button from '../../common/Button'

import ProfileImage from '../../../../public/assets/svg/profile_icon.svg'
import Logo from '../../../../public/assets/image/logo_text.png'
import LogoFace from '../../../../public/assets/image/logo_face.png'

import styles from './HomeNavVar.module.scss'

function HomeNavVar() {
  const [isLogin, setIsLogin] = useState(false)
  const [isDropLogout, setIsDropLogout] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const profileRef = useRef<HTMLImageElement>(null)

  // 드롭다운 메뉴 토글 핸들러
  const toggleDropLogout = () => {
    setIsDropLogout((prev) => !prev)
  }
  // 로그아웃 핸들러
  const handleLogout = () => {
    localStorage.removeItem('accessToken')
    setIsLogin(false)
    setIsDropLogout(false)
  }
  // 컴포넌트가 마운트될 때 로컬 스토리지에서 토큰을 확인하여 로그인 상태 설정
  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      setIsLogin(true)
    }
  }, [])
  // 마우스 클릭 이벤트를 감지하여 드롭다운 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setIsDropLogout(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [dropdownRef, profileRef])
  return (
    <>
      <div className={styles['header-top']}>
        <div className={styles['header-nav']}>
          <div className={styles['header-logo']}>
            <Link href="/">
              <div className={styles['panda-logo']}>
                <Image
                  src={LogoFace}
                  alt="판다마켓 로고 사진"
                  width={40}
                  height={40}
                />
              </div>
            </Link>
            <Link href="/">
              <div className={styles['panda-logo-name']}>
                <Image
                  src={Logo}
                  alt="판다마켓 로고 사진"
                  width={103}
                  height={35}
                />
              </div>
            </Link>
          </div>
          {isLogin ? (
            <Image
              src={ProfileImage}
              alt="프로필 이미지"
              ref={profileRef}
              style={{ cursor: 'pointer' }}
              onClick={toggleDropLogout}
            />
          ) : (
            <Button
              to="/login"
              size={48.5}
              style={{ padding: '1.1rem 4.3rem', width: 'fit-content' }}
            >
              로그인
            </Button>
          )}
        </div>
        {isDropLogout && (
          <div ref={dropdownRef}>
            <ul className={styles['header-nav-dropdown']}>
              <li onClick={handleLogout}>로그아웃</li>
            </ul>
          </div>
        )}
      </div>
    </>
  )
}

export default HomeNavVar
