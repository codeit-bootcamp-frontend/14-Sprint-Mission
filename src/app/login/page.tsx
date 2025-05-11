
'use client';
import React from 'react';
import { useState ,useEffect, useMemo } from 'react';
import Link from 'next/link';
import styles from './Login.module.css';
import { memberCheck } from 'utils/auth';
import Button from 'components/ui/Button';
import Image from 'next/image';
import MembersLogo from '@/components/members/MembersLogo';
import SnsLogin from '@/components/members/SnsLogin';
import axios from 'axios';
import { requestor } from '@/lib/requestor';
import { parseJwt } from '@/utils/parseJwt';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';

const eyeOpen = '/assets/eye_1.svg';
const eyeClose = '/assets/eye_2.svg';

function Login() {
  const [email, setEmail] = useState('user@mail.com');
  const [password, setPassword] = useState('12345678');
  const [passwordBoxType, setPasswordBoxType] = useState(true);
  const [errorCase, setErrorCase] = useState({ email:'', password:'' });
  const { setToken, setUser } = useAuth();
  const router = useRouter();

  const handleLogin = async () => {
    const requestBody = {
      email,
      password,
    };
  
    try {
      const res = await requestor.post('/auth/signIn', requestBody);
      console.log('로그인 성공:', res.data);
      
      const { accessToken, refreshToken } = res.data;

      // ✅ 1. 토큰 저장
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('user', JSON.stringify(res.data.user));

      // ✅ 2. 토큰 디코딩 → 유저 상태 저장
      const decoded = parseJwt(accessToken);
      if (decoded) {
        setToken(decoded);   // <- context에 token
        setUser(res.data.user);   // <- context에 user
      }

      // ✅ 3. 홈으로 이동
      router.push('/');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error('로그인 실패::', error.response.data.message);
      } else {
        console.error('로그인 실패::', error);
      }
    }
  };
  // input이 Blur될때 email,password state 변경 및 UserChecked state 표시
  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    if(e.target.id === 'login_email') {
      setEmail(e.target.value);
    } else if(e.target.id === 'login_pwd') {
      setPassword(e.target.value);
    }
  }

  const idCheck = useMemo(() => memberCheck.EmailChecked(email), [email]);
  const passwordCheck = useMemo(() => memberCheck.passwordChecked(password), [password]);
  
  useEffect(() => {
    setErrorCase({
      email: idCheck,
      password: passwordCheck,
    });
  }, [idCheck, passwordCheck]);

  const handleEyeClick = () => setPasswordBoxType(!passwordBoxType);
  const isFormValid = errorCase.email === '' && errorCase.password === '';

  return (
    <div className={styles.login_body}>
      <div className={styles.login_wrap}>
        <MembersLogo />
        <div className={styles.login_box}>
          <label htmlFor="login_email" className={errorCase.email === '' ? '' : styles.error_box}>이메일
            <input id='login_email' type='email' placeholder="이메일을 입력해주세요" onBlur={handleInputBlur} />
            { errorCase.email === '' ? null : (<span className={styles.error}>{errorCase.email}</span>) }
          </label>

          <label htmlFor="login_pwd" className={errorCase.password === '' ? '' : styles.error_box}>비밀번호
            <input id='login_pwd' type={passwordBoxType === true ? 'password':'text'} placeholder="비밀번호를 입력해주세요" onBlur={handleInputBlur} />
            <button
              type="button"
              onClick={handleEyeClick}
              className={styles.eye}
              aria-label="비밀번호 표시 전환"
            >
              <Image src={passwordBoxType ? eyeOpen : eyeClose} width={24} height={24} alt="toggle password" />
            </button>
            { errorCase.password === '' ? null : (<span className={styles.error}>{errorCase.password}</span>) }
          </label>

          <Button variant='roundedXL' className={styles.submit} onClick={handleLogin} disabled={!isFormValid}>로그인</Button>
        </div>
        <SnsLogin />
        <div className={styles.member_sub_box}>
          <span>판다마켓은 처음이신가요? <Link href="/signup">회원가입</Link></span>
        </div>
      </div>
    </div>
  );
}

export default Login;