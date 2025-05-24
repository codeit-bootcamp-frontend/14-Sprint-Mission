'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import {
  SignupForm,
  signupSchema,
  baseSignupSchema,
} from '@/hooks/useSignupForm'
import authService from '@/lib/api/service/authService'
import LoginField from '../../components/domain/LoginAndSignup/LoginField'
import Button from '../../components/common/Button'

import Logo from '../../../public/assets/image/logo_text.png'
import LogoFace from '../../../public/assets/image/logo_face.png'
import Google from '../../../public/assets/svg/google.svg'
import Kakao from '../../../public/assets/svg/kakao.svg'
import VisibillityOff from '../../../public/assets/svg/btn_visibillity_off.svg'
import Visibillity from '../../../public/assets/svg/btn_visibillity.svg'

import styles from './signup.module.scss'

const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [nickname, setNickname] = useState('')
  const [isState, setIsState] = useState(false)
  const [passwordVisibility, setPasswordVisibility] = useState({
    password: false,
    confirmPassword: false,
  })
  const router = useRouter()

  const [signupFormError, setSignupFormError] = useState<
    Partial<Record<keyof SignupForm, string>>
  >({})

  const togglePasswordVisibility = (field: keyof typeof passwordVisibility) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }))
  }

  const handleSignup = async () => {
    const form: SignupForm = {
      email,
      nickname,
      password,
      passwordConfirmation,
    }

    const response = signupSchema.safeParse(form)

    if (!response.success) {
      const fieldErrors: Partial<Record<keyof SignupForm, string>> = {}
      for (const issue of response.error.issues) {
        const field = issue.path[0] as keyof SignupForm
        fieldErrors[field] = issue.message
      }

      return
    }

    try {
      const response = await authService.postAuthSignup({
        email: form.email,
        nickname: form.nickname,
        password: form.password,
        passwordConfirmation: form.passwordConfirmation,
      })

      if (response.status === 200 || response.status === 201) {
        router.push('/login')
      }
    } catch (err) {
      const error = err as Error
      if (error.message) {
        console.error('서버 응답 에러:', error.message)
        alert(JSON.stringify(error.message))
      } else {
        console.error('기타 에러:', error)
        alert(error)
      }
    }
  }

  // 부분검사용 스키마 (필드별 검사)
  const partialSchemas = {
    email: baseSignupSchema.pick({ email: true }),
    password: baseSignupSchema.pick({ password: true }),
    passwordConfirmation: baseSignupSchema.pick({ passwordConfirmation: true }),
    nickname: baseSignupSchema.pick({ nickname: true }),
  }

  // 필드별 유효성 검사 함수 예
  function validateField(field: keyof SignupForm, value: string) {
    const schema = partialSchemas[field]
    if (!schema) return

    const result = schema.safeParse({ [field]: value })
    if (!result.success) {
      setSignupFormError((prev) => ({
        ...prev,
        [field]: result.error.issues[0].message,
      }))
    } else {
      setSignupFormError((prev) => ({
        ...prev,
        [field]: '',
      }))
    }
  }

  useEffect(() => {
    const hasError = Object.values(signupFormError).some((msg) => msg)
    const hasEmpty = !email || !password || !passwordConfirmation || !nickname
    const valid = !hasError && !hasEmpty
    setIsState(valid)
  }, [email, password, passwordConfirmation, nickname, signupFormError])

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
        onChange={(e) => setEmail(e.target.value)}
        onBlur={() => validateField('email', email)}
        error={signupFormError.email}
      />
      <LoginField
        label="닉네임"
        type="text"
        placeholder="닉네임을 입력해주세요"
        id="nickname"
        value={nickname}
        onChange={(e) => setNickname(e.target.value)}
        onBlur={() => validateField('nickname', nickname)}
        error={signupFormError.nickname}
      />
      <LoginField
        label="비밀번호"
        type={passwordVisibility.password ? 'text' : 'password'}
        placeholder="비밀번호를 입력해주세요"
        id="password"
        icon={passwordVisibility.password ? Visibillity : VisibillityOff}
        onIconClick={() => togglePasswordVisibility('password')}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        onBlur={() => validateField('password', password)}
        error={signupFormError.password}
      />
      <LoginField
        label="비밀번호 확인"
        type={passwordVisibility.confirmPassword ? 'text' : 'password'}
        placeholder="비밀번호를 다시 한 번 입력해주세요"
        id="passwordConfirmation"
        icon={passwordVisibility.confirmPassword ? Visibillity : VisibillityOff}
        onIconClick={() => togglePasswordVisibility('confirmPassword')}
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        onBlur={() =>
          validateField('passwordConfirmation', passwordConfirmation)
        }
        error={signupFormError.passwordConfirmation}
      />
      <div className={styles['button-wrapper']}>
        <Button
          className={styles['signup-button']}
          size={56}
          onClick={handleSignup}
          disabled={!isState}
        >
          회원가입
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
        <div className={styles['first']}>이미 회원이신가요? &nbsp;</div>
        <div className={styles['register']}>
          <Link href="/login" target="_blank">
            로그인
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Signup
