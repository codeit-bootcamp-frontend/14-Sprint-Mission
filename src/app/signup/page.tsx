
'use client';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../login/Login.module.css';
import { memberCheck } from 'utils/auth';
import Button from 'components/ui/Button';
import MembersLogo from '@/components/members/MembersLogo';
import SnsLogin from '@/components/members/SnsLogin';
import FormField from '@/components/ui/form/FormField';
import { useSignUp } from '@/hooks/useAuth';
import { useConfirmModal } from '@/hooks/useModal';
import ConfirmModal from '@/components/ui/ConfirmModal';

function Login() {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [pwdCheck, setPwdCheck] = useState('');
  const [passwordBoxType, setPasswordBoxType] = useState(true);
  const [pwdCheckBoxType, setPwdCheckBoxType] = useState(true);
  const [errorCase, setErrorCase] = useState({ email:'', name:'', password:'',pwdCheck:'' });
 
  const { isConfirmOpen, confirmMessage, openConfirmModal, closeConfirmModal } = useConfirmModal();
  const { mutate: signUp, isPending } = useSignUp(openConfirmModal);

  const handleSignUp = () => {
    signUp({
      email,
      nickname,
      password,
      passwordConfirmation: pwdCheck,
    });
  };
  const setters: Record<string, React.Dispatch<React.SetStateAction<string>>> = {
    login_email: setEmail,
    login_name: setNickname,
    login_pwd: setPassword,
    login_pwd_check: setPwdCheck,
  };
  
  // input이 Blur될때 email,password state 변경 및 UserChecked state 표시
  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    const setter = setters[id];
    if (setter) setter(value);

    let error = '';
    if (id === 'login_email') error = memberCheck.EmailChecked(value);
    else if (id === 'login_name') error = memberCheck.NameChecked(value);
    else if (id === 'login_pwd') error = memberCheck.passwordChecked(value);
    else if (id === 'login_pwd_check') error = memberCheck.passwordDoubleChecked(password, value); // password 상태 사용

    setErrorCase(prev => ({
      ...prev,
      [id.replace('login_', '')]: error, // email, name, password, pwdCheck에 매핑
    }));
  };

  const handleEyeClick = () => setPasswordBoxType(!passwordBoxType);
  const handleEyePwdCheck = () => setPwdCheckBoxType(!pwdCheckBoxType);

  const isFormValid = 
    email &&
    nickname &&
    password &&
    pwdCheck &&
    errorCase.email === '' && 
    errorCase.name === '' && 
    errorCase.password === '' && 
    errorCase.pwdCheck === '';

  return (
    <div className={styles.login_body}>
      <div className={styles.login_wrap}>
        <MembersLogo />
        <div className={styles.login_box}>
          <FormField
            id="login_email"
            label="이메일"
            type="email"
            placeholder="이메일을 입력해주세요"
            error={errorCase.email}
            onBlur={handleInputBlur}
          />

          <FormField
            id="login_name"
            label="닉네임"
            type="text"
            placeholder="닉네임을 입력해주세요"
            error={errorCase.name}
            onBlur={handleInputBlur}
          />

          <FormField
            id="login_pwd"
            label="비밀번호"
            type={passwordBoxType ? "password" : "text"}
            placeholder="비밀번호를 입력해주세요"
            error={errorCase.password}
            onBlur={handleInputBlur}
            withEyeToggle
            eyeState={passwordBoxType}
            onEyeToggle={handleEyeClick}
          />
                    
          <FormField
            id="login_pwd_check"
            label="비밀번호 확인"
            type={pwdCheckBoxType ? "password" : "text"}
            placeholder="비밀번호를 다시 입력해주세요"
            error={errorCase.pwdCheck}
            onBlur={handleInputBlur}
            withEyeToggle
            eyeState={pwdCheckBoxType}
            onEyeToggle={handleEyePwdCheck}
          />
        
          <Button 
            variant='roundedXL' 
            className={styles.submit} 
            onClick={handleSignUp} 
            disabled={!isFormValid}
          >
            회원가입
          </Button>
        </div>
        <SnsLogin />
        <div className={styles.member_sub_box}>
          <span>이미 회원이신가요? <Link href="/login">로그인</Link></span>
        </div>
      </div>      
      <ConfirmModal isOpen={isConfirmOpen} onClose={closeConfirmModal} errorMessage={confirmMessage} />
    </div>
  );
}

export default Login;