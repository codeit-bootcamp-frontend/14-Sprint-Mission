
'use client';
import React from 'react';
import Link from 'next/link';
import { useState ,useEffect,useMemo } from 'react';
import styles from '../login/Login.module.css';
import { memberCheck } from 'utils/auth';
import Button from 'components/ui/Button';
import Image from 'next/image';
import MembersLogo from '@/components/members/MembersLogo';
import SnsLogin from '@/components/members/SnsLogin';
import axios from 'axios';
import { requestor } from '@/lib/requestor';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';

const eyeOpen = '/assets/eye_1.svg';
const eyeClose = '/assets/eye_2.svg';

function Login() {
  const [email, setEmail] = useState('user@mail.com');
  const [nickname, setNickname] = useState('user');
  const [password, setPassword] = useState('12345678');
  const [pwdCheck, setPwdCheck] = useState('12345678');
  const [passwordBoxType, setPasswordBoxType] = useState(true);
  const [pwdCheckBoxType, setPwdCheckBoxType] = useState(true);
  const [errorCase, setErrorCase] = useState({ email:'', name:'', password:'',pwdCheck:'' });
 
  
  const router = useRouter();
  const { setUser } = useAuth();

  const handleSignUp = async () => {
    const requestBody = {
      email,
      nickname,
      password,
      passwordConfirmation: pwdCheck,
    };
  
    try {
      const res = await requestor.post('/auth/signUp', requestBody);
      const { accessToken, refreshToken, user } = res.data;
  
      // ✅ 토큰 저장
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
  
      // ✅ 사용자 정보 저장
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);
  
      // ✅ 원하는 페이지로 이동
      router.push('/');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error('회원가입 실패:', error.response.data.message);
      } else {
        console.error('회원가입 실패:', error);
      }
    }
  };
  const setters: Record<string, React.Dispatch<React.SetStateAction<string>>> = {
    login_email: setEmail,
    login_name: setNickname,
    login_pwd: setPassword,
    login_pwd_check: setPwdCheck,
  };
  
  // input이 Blur될때 email,password state 변경 및 UserChecked state 표시
  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const setter = setters[e.target.id];
    if (setter) setter(e.target.value);
  };

  const [idCheck, nameCheck, passwordCheck, pwdCheckCheck] = [
    useMemo(() => memberCheck.EmailChecked(email), [email]),
    useMemo(() => memberCheck.NameChecked(nickname), [nickname]),
    useMemo(() => memberCheck.passwordChecked(password), [password]),
    useMemo(() => memberCheck.passwordDoubleChecked(password, pwdCheck), [password, pwdCheck]),
  ];

  useEffect(() => {
    setErrorCase({
      email: idCheck,
      name: nameCheck,
      password: passwordCheck,
      pwdCheck: pwdCheckCheck,
    });
  }, [idCheck, nameCheck, passwordCheck, pwdCheckCheck]);

  const handleEyeClick = () => setPasswordBoxType(!passwordBoxType);
  const handleEyePwdCheck = () => setPwdCheckBoxType(!pwdCheckBoxType);

  const isFormValid = errorCase.email === '' && errorCase.name === '' && errorCase.password === '' && errorCase.pwdCheck === '';

  return (
    <div className={styles.login_body}>
      <div className={styles.login_wrap}>
        <MembersLogo />
        <div className={styles.login_box}>
          <label htmlFor="login_email" className={errorCase.email === '' ? '' : styles.error_box}>이메일
            <input id='login_email' type='email' placeholder="이메일을 입력해주세요" onBlur={handleInputBlur} />
            { errorCase.email === '' ? null : (<span className={styles.error}>{errorCase.email}</span>) }
          </label>

          <label htmlFor="login_name" className={errorCase.name === '' ? '' : styles.error_box}>닉네임
            <input id='login_name' type='text' placeholder="닉네임을 입력해주세요" onBlur={handleInputBlur} />
            { errorCase.name === '' ? null : (<span className={styles.error}>{errorCase.name}</span>) }
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

          <label htmlFor="login_pwd_check" className={errorCase.pwdCheck === '' ? '' : styles.error_box}>비밀번호 확인
            <input id='login_pwd_check' type={pwdCheckBoxType === true ? 'password':'text'} placeholder="비밀번호를 다시 입력해주세요" onBlur={handleInputBlur} />            
            <button
              type="button"
              onClick={handleEyePwdCheck}
              className={styles.eye}
              aria-label="비밀번호 표시 전환"
            >
              <Image src={passwordBoxType ? eyeOpen : eyeClose} width={24} height={24} alt="toggle password" />
            </button>
            { errorCase.pwdCheck === '' ? null : (<span className={styles.error}>{errorCase.pwdCheck}</span>) }
          </label>
        
          <Button variant='roundedXL' className={styles.submit} onClick={handleSignUp} disabled={!isFormValid}>회원가입</Button>
        </div>
        <SnsLogin />
        <div className={styles.member_sub_box}>
          <span>이미 회원이신가요? <Link href="/login">로그인</Link></span>
        </div>
      </div>
    </div>
  );
}

export default Login;