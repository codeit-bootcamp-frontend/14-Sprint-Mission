'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

import LoginField from '../LoginAndSignup/LoginField'
import Button from '../common/Button'

import Logo from '../../../public/assets/image/Logo.png'
import LogoFace from '../../../public/assets/image/LogoFace.png'
import Google from '../../../public/assets/svg/Google.svg'
import Kakao from '../../../public/assets/svg/Kakao.svg'
import VisibillityOff from '../../../public/assets/svg/btn_visibillity_off.svg'
import Visibillity from '../../../public/assets/svg/btn_visibillity.svg'

import styled from 'styled-components'
import { theme } from '../styles/theme'
import { textStyle } from '../styles/textStyle'
import Image from 'next/image'

const Bone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 64rem;
  margin: 23.1rem auto auto auto;
  @media (max-width: 1023px) {
    margin: 19rem auto auto auto;
  }
  @media (max-width: 743px) {
    margin: 8rem auto auto auto;
    width: 34.3rem;
  }
`
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 4rem;
  @media (max-width: 743px) {
    width: 19.8rem;
    height: 6.6rem;
    margin-bottom: 2.4rem;
  }
`
const LogoPanda = styled.div`
  img {
    width: 10.3rem;
    height: 10.3rem;
    margin-right: 2.2rem;
    display: flex;
  }
  @media (max-width: 743px) {
    img {
      width: 5.1rem;
      height: 5.1rem;
      margin-right: 1.1rem;
      display: flex;
    }
  }
`
const LogoPandaText = styled.div`
  img {
    width: 26.6rem;
    height: 9rem;
    display: flex;
    align-items: center;
  }
  @media (max-width: 743px) {
    img {
      width: 13.3rem;
      height: 4.5rem;
    }
  }
`

const ButtonWrapper = styled.div`
  margin-bottom: 2.4rem;
  width: 100%;
`
const LoginButton = styled(Button)`
  padding: 1.2rem 29.4rem;
  width: max-content;
  @media (max-width: 743px) {
    padding: 1.2rem 14.5rem;
  }
`
const SimpleLoginWrapper = styled.div`
  height: fit-content;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e6f2ff;
  padding: 1.6rem 2.3rem;
  margin-bottom: 2.4rem;
`
const SimpleLogin = styled.div`
  ${(props) => textStyle(16, 500)(props)}
  color: ${theme.colors.SecondaryGray[800]};
`
const ImageWrapper = styled.div`
  height: 4.2rem;
  width: 10rem;
  display: flex;
  gap: 1.6rem;
  flex-direction: row;
  align-items: center;
  img {
    width: 4.2rem;
    height: 4.2rem;
    display: flex;
  }
`
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
const First = styled.div`
  ${(props) => textStyle(14, 500)(props)}
  color: ${theme.colors.SecondaryGray[800]};
`
const Register = styled.div`
  text-decoration: underline;
  color: ${theme.colors.PrimaryBlue[100]};
`

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
    <Bone>
      <LogoContainer>
        <LogoPanda>
          <Link href="/" prefetch={true}>
            <Image src={LogoFace} alt="판다마켓 로고 사진" />
          </Link>
        </LogoPanda>
        <LogoPandaText>
          <Link href="/" prefetch={true}>
            <Image src={Logo} alt="판다마켓 로고 사진" />
          </Link>
        </LogoPandaText>
      </LogoContainer>
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
        onIconClick={togglePasswordVisibility}
        validate={validatePassword}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        error={passwordError}
      />
      <ButtonWrapper>
        <LoginButton size={56} onClick={handleLogin} disabled={!isState}>
          로그인
        </LoginButton>
      </ButtonWrapper>
      <SimpleLoginWrapper>
        <SimpleLogin>간편 로그인하기</SimpleLogin>
        <ImageWrapper>
          <a href="https://www.google.com/" target="_blank">
            <Image src={Google} alt="구글 로고 사진" />
          </a>
          <a href="https://www.kakaocorp.com/page/" target="_blank">
            <Image src={Kakao} alt="카카오 로고 사진" />
          </a>
        </ImageWrapper>
      </SimpleLoginWrapper>
      <FooterContainer>
        <First>판다마켓이 처음이신가요? &nbsp;</First>
        <Register>
          <Link href="/signup" prefetch={true}>
            회원가입
          </Link>
        </Register>
      </FooterContainer>
    </Bone>
  )
}

export default Login
