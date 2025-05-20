
'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import styles from './Login.module.css';
import Button from 'components/ui/Button';
import MembersLogo from '@/components/members/MembersLogo';
import SnsLogin from '@/components/members/SnsLogin';
import { useLoginMutation } from '@/hooks/useAuth';
import { useConfirmModal } from '@/hooks/useModal';
import ConfirmModal from '@/components/ui/ConfirmModal';
import FormField from '@/components/ui/form/FormField';
import { useForm, SubmitHandler } from 'react-hook-form';
import { validationRules } from '@/utils/validate';

type FormValues = {
  email: string;
  password: string;
};

function Login() {
  const [passwordBoxType, setPasswordBoxType] = useState(false);

  const { isConfirmOpen, confirmMessage, openConfirmModal, closeConfirmModal } = useConfirmModal();
  const { mutate: login, isPending } = useLoginMutation(openConfirmModal);
  
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm<FormValues>({
    mode: 'onBlur', // blur 시 유효성 검사
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    login(data);
  };

  const handleEyeClick = () => setPasswordBoxType(!passwordBoxType);

  return (
    <div className={styles.login_body}>
      <div className={styles.login_wrap}>
        <MembersLogo />
        <div className={styles.login_box}>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormField
            id="login_email"
            label="이메일"
            type="email"
            placeholder="이메일을 입력해주세요"
            error={errors.email?.message}
            {...register('email', validationRules.email)}
          />
          
          <FormField
            id="login_pwd"
            label="비밀번호"
            type={passwordBoxType ? "text" : "password" }
            placeholder="비밀번호를 입력해주세요"
            error={errors.password?.message}
            withEyeToggle
            eyeState={passwordBoxType} // eye 토글 상태 관리 필요시 별도 상태 선언
            onEyeToggle={handleEyeClick}
            {...register('password', validationRules.password)}
          />

          <Button type="submit" variant='roundedXL' className="w-full"  disabled={!isValid || !isDirty}>로그인</Button>
        </form>
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