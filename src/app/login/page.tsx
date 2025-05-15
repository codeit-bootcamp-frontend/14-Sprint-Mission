
'use client';
import React from 'react';
import { useState ,useEffect, useMemo } from 'react';
import Link from 'next/link';
import styles from './Login.module.css';
import { memberCheck } from 'utils/auth';
import Button from 'components/ui/Button';
import MembersLogo from '@/components/members/MembersLogo';
import SnsLogin from '@/components/members/SnsLogin';
import { useLoginMutation } from '@/hooks/useAuth';
import { useConfirmModal, useModal } from '@/hooks/useModal';
import ConfirmModal from '@/components/ui/ConfirmModal';
import FormField from '@/components/ui/form/FormField';

function Login() {
  const [email, setEmail] = useState('user@mail.com');
  const [password, setPassword] = useState('12345678');
  const [passwordBoxType, setPasswordBoxType] = useState(true);
  const [errorCase, setErrorCase] = useState({ email:'', password:'' });

  const { isConfirmOpen, confirmMessage, openConfirmModal, closeConfirmModal } = useConfirmModal();
  const { mutate: login, isPending } = useLoginMutation(openConfirmModal);

  const handleLogin = () => {
    login({ email, password });
  };

  const setters: Record<string, React.Dispatch<React.SetStateAction<string>>> = {
    login_email: setEmail,
    login_pwd: setPassword,
  };

 // input이 Blur될때 email,password state 변경 및 UserChecked state 표시
  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const { id, value } = e.target;

    const setter = setters[id];
    if (setter) setter(value);

    let error = '';
    if (id === 'login_email') error = memberCheck.EmailChecked(value);
    else if (id === 'login_pwd') error = memberCheck.passwordChecked(value);

    setErrorCase(prev => ({
      ...prev,
      [id.replace('login_', '')]: error, // email, name, password, pwdCheck에 매핑
    }));
  };


  const handleEyeClick = () => setPasswordBoxType(!passwordBoxType);
  const isFormValid = email && password && errorCase.email === '' && errorCase.password === '';

  


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

          <Button variant='roundedXL' className={styles.submit} onClick={handleLogin} disabled={!isFormValid}>로그인</Button>
        </div>
        <SnsLogin />
        <div className={styles.member_sub_box}>
          <span>판다마켓은 처음이신가요? <Link href="/signup">회원가입</Link></span>
        </div>
      </div>
      <ConfirmModal isOpen={isConfirmOpen} onClose={closeConfirmModal} errorMessage={confirmMessage} />
    </div>
  );
}

export default Login;