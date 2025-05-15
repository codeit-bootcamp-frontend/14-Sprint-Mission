import { useEffect, useState } from 'react';
import './LoginPage.css';
import { Link, useNavigate } from 'react-router-dom';
import LogoImg from '../assets/images/logo.png';
import HidePasswordIcon from '../assets/icons/eye-slash.svg';
import ShowPasswordIcon from '../assets/icons/eye.svg';
import Input from '../components/common/Input';
import GoogleLogo from '../assets/social/google.png';
import KakaoLogo from '../assets/social/kakao.png';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import authService from '../api/services/auth.services';

// Zod로 폼 검증 스키마 정의
const signInSchema = z.object({
  email: z
    .string()
    .nonempty('이메일을 입력해주세요.')
    .email('잘못된 이메일 형식입니다.'),
  password: z
    .string()
    .nonempty('비밀번호를 입력해주세요.')
    .min(8, '비밀번호를 8자 이상 입력해주세요.'),
});

// 타입 정의
export type SignInFormData = z.infer<typeof signInSchema>;

function LoginPage() {
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isValid },
  } = useForm<SignInFormData>({
    resolver: zodResolver(signInSchema),
    mode: 'onChange',
  });
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const onSubmit = async (formData: SignInFormData) => {
    setIsSubmitting(true);
    console.log('로그인 데이터:', formData);
    // 로그인
    try {
      const response = await authService.login(formData);
      navigate('/items');
    } catch (error: any) {
      if (error.details.email) {
        setError('email', {
          type: 'manual',
          message: error.message,
        });
      } else {
        setError('password', {
          type: 'manual',
          message: error.message,
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');
    if (accessToken) {
      navigate('/'); // 메인 페이지로 리다이렉트
    }
  }, [navigate]);

  return (
    <>
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
            <button
              type="submit"
              className="login-btn"
              disabled={!isValid || isSubmitting}
            >
              로그인
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
            판다마켓이 처음이신가요?
            <a href="/signup"> 회원가입</a>
          </span>
        </div>
      </main>
    </>
  );
}

export default LoginPage;
