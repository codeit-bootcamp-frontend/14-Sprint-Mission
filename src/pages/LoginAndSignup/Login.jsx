import React, { useState, useEffect } from 'react'
import { theme } from '../../styles/theme'
import { textStyle } from '../../styles/textStyle'
import { Link, useNavigate } from 'react-router-dom'
import LoginField from './LoginField'
import Button from '../../component/common/Button'
import styled from 'styled-components'
import Logo from '../../assets/image/Logo.png'
import LogoFace from '../../assets/image/LogoFace.png'
import Google from '../../assets/svg/Google.svg'
import Kakao from '../../assets/svg/Kakao.svg'
import VisibillityOff from '../../assets/svg/btn_visibillity_off.svg'
import Visibillity from '../../assets/svg/btn_visibillity.svg'

const Bone = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 40rem;
  margin: 14.438rem auto auto auto;
  @media (max-width: 744px) {
    margin: 11.875rem auto auto auto;
  }
  @media (max-width: 375px) {
    margin: 5rem 1rem auto 1rem;
    width: 21.437rem;
  }
`

const LogoContainer = styled.div`
  width: 24.75rem;
  height: 8.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  @media (max-width: 375px) {
    width: 12.375rem;
    height: 4.125rem;
    margin-bottom: 1.5rem;
  }
`
const LogoFaceImage = styled.img`
  width: 6.438rem;
  height: 6.438rem;
  @media (max-width: 375px) {
    margin: auto 11px auto 0;
    width: 3.187rem;
    height: 3.187rem;
  }
`
const LogoImage = styled.img`
  width: 16.625rem;
  height: 5rem;
  @media (max-width: 375px) {
    width: 8.313rem;
    height: 2.813rem;
  }
`
const ButtonWrapper = styled.div`
  margin-bottom: 3rem;
  width: 100%;
`
const SimpleLoginWrapper = styled.div`
  height: 4.625rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #e6f2ff;
  padding: 1rem 1.438rem;
  margin-bottom: 3rem;
`

const SimpleLogin = styled.div`
  ${(props) => textStyle(16, 500)(props)}
  color: ${theme.colors.SecondaryGray[800]};
`
const ImageWrapper = styled.div`
  height: 2.625rem;
  width: 6.25rem;
  display: flex;
  justify-content: space-between;
  img {
    width: 2.625rem;
    height: 2.625rem;
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
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [isState, setIsState] = useState(false)

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const validateEmail = (email) => {
    if (!email) return '이메일을 입력해주세요.'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email) ? '' : '잘못된 이메일 형식입니다.'
  }

  const validatePassword = (password) => {
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
      navigate(`/items`)
    }
  }
  useEffect(() => {
    const valid = password.length >= 8 && !!email
    setIsState(valid)
  }, [email, password])
  return (
    <Bone>
      <LogoContainer>
        <Link to="/">
          <LogoFaceImage src={LogoFace} alt="판다마켓 로고 사진" />
        </Link>
        <Link to="/">
          <LogoImage src={Logo} alt="판다마켓 로고 사진" />
        </Link>
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
        <Button
          variant="primary"
          size={56}
          onClick={handleLogin}
          disabled={!isState}
        >
          로그인
        </Button>
      </ButtonWrapper>
      <SimpleLoginWrapper>
        <SimpleLogin>간편 로그인하기</SimpleLogin>
        <ImageWrapper>
          <a href="https://www.google.com/" target="_blank">
            <img src={Google} alt="구글 로고 사진" />
          </a>
          <a href="https://www.kakaocorp.com/page/" target="_blank">
            <img src={Kakao} alt="카카오 로고 사진" />
          </a>
        </ImageWrapper>
      </SimpleLoginWrapper>
      <FooterContainer>
        <First>판다마켓이 처음이신가요? &nbsp;</First>
        <Register>
          <Link to="/signup">회원가입</Link>
        </Register>
      </FooterContainer>
    </Bone>
  )
}

export default Login
