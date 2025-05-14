'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import { requestor } from '@/lib/requestor';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect, useState } from 'react';
import { parseJwt } from '@/utils/parseJwt';

interface SignUpForm {
  email: string;
  nickname: string;
  password: string;
  passwordConfirmation: string;
}
export function useSignUp(openModal: (msg: string) => void) {
  const router = useRouter();
  const { setUser } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [savedPath, setSavedPath] = useState<string | null>(null);

  useEffect(() => {
    const path = sessionStorage.getItem('redirectPath');
    setSavedPath(path);
  }, []);

  const mutation = useMutation({
    mutationFn: async (form: SignUpForm) => {
      const res = await requestor.post('/auth/signUp', form);
      return res.data;
    },
    onSuccess: (data) => {
      const { accessToken, refreshToken, user } = data;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('user', JSON.stringify(user));
      setUser(user);

      openModal('회원가입 완료 되었습니다!');
      if(savedPath){
        router.push(savedPath);
      } else {
        router.push('/');
      }
    },
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response) {
        openModal(error.response.data.message || '회원가입 중 오류가 발생했습니다.');
      } else {
        openModal('서버 연결에 실패했습니다.');
      }
    },
  });

  return {
    ...mutation,
    isModalOpen,
    closeModal: () => setIsModalOpen(false),
  };
}


interface LoginForm {
  email: string;
  password: string;
}

export function useLoginMutation(openModal: (msg: string) => void) {
  const router = useRouter();
  const { setToken, setUser } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [savedPath, setSavedPath] = useState<string | null>(null);

  useEffect(() => {
    const path = sessionStorage.getItem('redirectPath');
    setSavedPath(path);
  }, []);

  const mutation = useMutation({
    mutationFn: async (form: LoginForm) => {
      const res = await requestor.post('/auth/signIn', form);
      return res.data;
    },
    onSuccess: (data) => {
      const { accessToken, refreshToken, user } = data;

      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      localStorage.setItem('user', JSON.stringify(user));

      const decoded = parseJwt(accessToken);
      if (decoded) {
        setToken(decoded);
        setUser(user);
      }

      openModal('로그인 되었습니다!');
      if(savedPath){
        router.push(savedPath);
      } else {
        router.push('/');
      }
    },
    onError: (error) => {
      if (axios.isAxiosError(error) && error.response) {
        openModal(error.response.data.message || '로그인 실패');
      } else {
        openModal('네트워크 오류가 발생했습니다.');
      }
    },
  });

  return  {
    ...mutation,
    isModalOpen,
    closeModal: () => setIsModalOpen(false),
  };
}

