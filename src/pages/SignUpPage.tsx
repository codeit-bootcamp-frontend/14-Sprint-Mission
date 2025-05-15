import './SignUpPage.css';
import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import LogoImg from '../assets/images/logo.png';
import HidePasswordIcon from '../assets/icons/eye-slash.svg';
import ShowPasswordIcon from '../assets/icons/eye.svg';
import GoogleLogo from '../assets/social/google.png';
import KakaoLogo from '../assets/social/kakao.png';
import Input from '../components/common/Input';

// Zod로 폼 검증 스키마 정의
const signUpSchema = z
  .object({
    email: z
      .string()
      .nonempty('이메일을 입력해주세요.')
      .email('잘못된 이메일 형식입니다.'),
    username: z.string().nonempty('닉네임을 입력해주세요.'),
    password: z
      .string()
      .nonempty('비밀번호를 입력해주세요.')
      .min(8, '비밀번호를 8자 이상 입력해주세요.'),
    passwordConfirm: z.string().nonempty('비밀번호를 입력해주세요.'),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordConfirm'],
  });

// 타입 정의
type SignUpFormData = z.infer<typeof signUpSchema>;

function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    control,
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
    mode: 'onBlur', // 필드에서 포커스가 벗어날 때 유효성 검사
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const togglePasswordConfirm = () => {
    setShowPasswordConfirm((prev) => !prev);
  };

  const onSubmit = (data: SignUpFormData) => {
    console.log('회원가입 데이터:', data);
    // 여기에 회원가입 API 호출 로직 추가
  };

  return (
    <main>
      <div className="login-container">
        <Link className="brand" to="/">
          <img
            className="login-logo"
            src={LogoImg}
            alt="logo"
            width={100}
            height={100}
          />
          판다마켓
        </Link>
        <form id="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-box">
            <Input
              label="이메일"
              id="email"
              type="email"
              placeholder="이메일을 입력해주세요"
              error={errors.email?.message}
              {...register('email')}
            />
          </div>

          <div className="input-box">
            <Input
              label="닉네임"
              id="username"
              type="text"
              placeholder="닉네임을 입력해주세요"
              error={errors.username?.message}
              {...register('username')}
            />
          </div>

          <div className="input-box">
            <Input
              label="비밀번호"
              id="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="비밀번호를 입력해주세요"
              error={errors.password?.message}
              {...register('password')}
            />
            {!showPassword ? (
              <img
                className="hide-password-icon"
                src={HidePasswordIcon}
                alt="hide password"
                onClick={togglePassword}
              />
            ) : (
              <img
                className="show-password-icon"
                src={ShowPasswordIcon}
                alt="show password"
                onClick={togglePassword}
              />
            )}
          </div>

          <div className="input-box">
            <Input
              label="비밀번호 확인"
              id="passwordConfirm"
              type={showPasswordConfirm ? 'text' : 'password'}
              placeholder="비밀번호를 다시 한번 입력해주세요"
              error={errors.passwordConfirm?.message}
              {...register('passwordConfirm')}
            />
            {!showPasswordConfirm ? (
              <img
                className="hide-password-icon"
                src={HidePasswordIcon}
                alt="hide password"
                onClick={togglePasswordConfirm}
              />
            ) : (
              <img
                className="show-password-icon"
                src={ShowPasswordIcon}
                alt="show password"
                onClick={togglePasswordConfirm}
              />
            )}
          </div>

          <button type="submit" className="login-btn" disabled={!isValid}>
            회원가입
          </button>
        </form>
        <div className="social-login">
          <span>간편 로그인하기</span>
          <a href="https://google.com">
            <img src={GoogleLogo} alt="google logo" width="40" />
          </a>
          <a href="https://kakao.com">
            <img src={KakaoLogo} alt="google logo" width="40" />
          </a>
        </div>
        <span>
          이미 회원이신가요?
          <a href="/login"> 로그인</a>
        </span>
      </div>
    </main>
  );
}

export default SignUpPage;
