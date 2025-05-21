'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import LoginField from '../../components/domain/LoginAndSignup/LoginField'
import Button from '../../components/common/Button'

import Logo from '../../../public/assets/image/logo_text.png'
import LogoFace from '../../../public/assets/image/logo_face.png'
import Google from '../../../public/assets/svg/google.svg'
import Kakao from '../../../public/assets/svg/kakao.svg'
import VisibillityOff from '../../../public/assets/svg/btn_visibillity_off.svg'
import Visibillity from '../../../public/assets/svg/btn_visibillity.svg'

import styles from './login.module.scss'

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isState, setIsState] = useState(false)
  const router = useRouter()

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const validateEmail = (email: string) => {
    if (!email) return '이메일을 입력해주세요.'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email) ? '' : '잘못된 이메일 형식입니다.'
  }

  const validatePassword = (password: string) => {
    if (!password || password === '') {
      return '비밀번호를 입력해주세요.'
    }
    if (password.length < 8) {
      return '비밀번호를 8자 이상 입력해주세요.'
    }

    return ''
  }

  const handleLogin = () => {
    const emailValidation = validateEmail(email)
    const passwordValidation = validatePassword(password)

    setEmailError(emailValidation)
    setPasswordError(passwordValidation)

    if (!emailValidation && !passwordValidation) {
      router.push('/items')
    }
  }
  useEffect(() => {
    const valid = password.length >= 8 && !!email
    setIsState(valid)
  }, [email, password])
  return (
    <div className={styles['bone']}>
      <div className={styles['logo-container']}>
        <div className={styles['logo-panda']}>
          <Link href="/" prefetch={true}>
            <Image src={LogoFace} alt="판다마켓 로고 사진" />
          </Link>
        </div>
        <div className={styles['logo-panda-text']}>
          <Link href="/" prefetch={true}>
            <Image src={Logo} alt="판다마켓 로고 사진" />
          </Link>
        </div>
      </div>
      <LoginField
        label="이메일"
        type="email"
        placeholder="이메일을 입력해주세요"
        id="email"
        validate={validateEmail}
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        error={emailError}
      />
      <LoginField
        label="비밀번호"
        type={showPassword ? 'text' : 'password'}
        placeholder="비밀번호를 입력해주세요"
        id="password"
        icon={showPassword ? Visibillity : VisibillityOff}
        onIconClick={(e) => {
          e.stopPropagation()
          togglePasswordVisibility()
        }}
        validate={validatePassword}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        error={passwordError}
      />
      <div className={styles['button-wrapper']}>
        <Button
          className={styles['login-button']}
          size={56}
          onClick={handleLogin}
          disabled={!isState}
        >
          로그인
        </Button>
      </div>
      <div className={styles['simple-login-wrapper']}>
        <div className={styles['simple-login']}>간편 로그인하기</div>
        <div className={styles['image-wrapper']}>
          <a href="https://www.google.com/" target="_blank">
            <Image src={Google} alt="구글 로고 사진" />
          </a>
          <a href="https://www.kakaocorp.com/page/" target="_blank">
            <Image src={Kakao} alt="카카오 로고 사진" />
          </a>
        </div>
      </div>
      <div className={styles['footer-container']}>
        <div className={styles['first']}>판다마켓이 처음이신가요? &nbsp;</div>
        <div className={styles['register']}>
          <Link href="/signup" prefetch={true}>
            회원가입
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
