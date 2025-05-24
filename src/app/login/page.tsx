'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

import { SigninForm, baseSigninSchema } from '@/hooks/useSigninForm'
import { useSigninMutation } from '@/hooks/useSigninMutation'
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
  const [showPassword, setShowPassword] = useState(false)
  const [isLoginState, setIsLoginState] = useState(false)
  const router = useRouter()
  const { mutate: signin, isPending } = useSigninMutation()
  const [signinFormError, setSigninFormError] = useState<
    Partial<Record<keyof SigninForm, string>>
  >({})

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev)
  }

  const handleSignin = () => {
    const form: SigninForm = { email, password }

    // 전체 유효성 검사
    const response = baseSigninSchema.safeParse(form)
    if (!response.success) {
      const fieldErrors: Partial<Record<keyof SigninForm, string>> = {}
      for (const issue of response.error.issues) {
        const field = issue.path[0] as keyof SigninForm
        fieldErrors[field] = issue.message
      }
      setSigninFormError(fieldErrors)
      return
    }

    // mutate 호출 시, onSuccess 콜백 등록해서 성공 시 리다이렉트 처리
    signin(form, {
      onSuccess: () => {
        router.push('/')
      },
    })
  }

  // 부분검사용 스키마 (필드별 검사)
  const partialSchemas = {
    email: baseSigninSchema.pick({ email: true }),
    password: baseSigninSchema.pick({ password: true }),
  }

  // 필드별 유효성 검사 함수
  function validateField(field: keyof SigninForm, value: string) {
    const schema = partialSchemas[field]
    if (!schema) return

    const result = schema.safeParse({ [field]: value })
    if (!result.success) {
      setSigninFormError((prev) => ({
        ...prev,
        [field]: result.error.issues[0].message,
      }))
    } else {
      setSigninFormError((prev) => ({
        ...prev,
        [field]: '',
      }))
    }
  }
  // 로그인 버튼 활성화 상태 관리
  useEffect(() => {
    const hasError = Object.values(signinFormError).some((msg) => msg)
    const hasEmpty = !email || !password
    const valid = !hasError && !hasEmpty
    setIsLoginState(valid)
  }, [email, password, signinFormError])

  // 페이지가 로드될 때 토큰이 있으면 홈으로 리다이렉트
  useEffect(() => {
    const token = localStorage.getItem('accessToken')
    if (token) {
      router.replace('/')
    }
  }, [router])

  return (
    <div className={styles['bone']}>
      <div className={styles['logo-container']}>
        <div className={styles['logo-panda']}>
          <Link href="/">
            <Image src={LogoFace} alt="판다마켓 로고 사진" />
          </Link>
        </div>
        <div className={styles['logo-panda-text']}>
          <Link href="/">
            <Image src={Logo} alt="판다마켓 로고 사진" />
          </Link>
        </div>
      </div>
      <LoginField
        label="이메일"
        type="email"
        placeholder="이메일을 입력해주세요"
        id="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
        onBlur={() => validateField('email', email)}
        error={signinFormError.email}
      />
      <LoginField
        label="비밀번호"
        type={showPassword ? 'text' : 'password'}
        placeholder="비밀번호를 입력해주세요"
        id="password"
        icon={showPassword ? Visibillity : VisibillityOff}
        onIconClick={(e) => {
          e.preventDefault()
          togglePasswordVisibility()
        }}
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)
        }}
        onBlur={() => validateField('password', password)}
        error={signinFormError.password}
      />
      <div className={styles['button-wrapper']}>
        <Button
          className={styles['login-button']}
          size={56}
          onClick={handleSignin}
          disabled={!isLoginState}
        >
          {isPending ? '로그인 중...' : '로그인'}
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
          <Link href="/signup">회원가입</Link>
        </div>
      </div>
    </div>
  )
}

export default Login
