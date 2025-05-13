'use client';
import { ComponentType, useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import { login, User } from '@/api/auth';

// 로그인 상태 확인 함수
export const isAuthenticated = () => {
  // 브라우저 환경인지 확인 (SSR 시 에러 방지)
  if (typeof window !== 'undefined') {
    const token = Cookies.get('accessToken');
    return !!token; // 토큰이 존재하면 true, 없으면 false
  }
  return false;
};

// HOC에서 사용할 Props 타입
function withAuth(WrappedComponent: ComponentType) {
  const AuthenticatedComponent = () => {
    const router = useRouter();
    const [authState, setAuthState] = useState<{
      isAuthenticated: boolean;
      isLoading: boolean;
      user: User | null;
    }>({
      isAuthenticated: false,
      isLoading: true,
      user: null,
    });

    useEffect(() => {
      const checkAuth = async () => {
        const authenticated = isAuthenticated();
        const userCookie = Cookies.get('user');

        if (!authenticated) {
          // 스프린트 10 에서는 로그인 페이지를 추가하지 않아서 바로 로그인
          const result = await login('yhk8462@naver.com', 'password123');
          console.log(result);
        }

        if (authenticated && userCookie) {
          const currUser = JSON.parse(userCookie);
          setAuthState({
            isAuthenticated: true,
            isLoading: false,
            user: currUser,
          });
        } else {
          setAuthState({
            isAuthenticated: false,
            isLoading: false,
            user: null,
          });
        }
      };
      checkAuth();
    }, [router]);

    if (authState.isLoading) {
      return <div>로딩중...</div>;
    }

    return <WrappedComponent />;
  };

  // displayName 설정 (디버깅 용이)
  AuthenticatedComponent.displayName = `withAuth(${
    WrappedComponent.displayName || WrappedComponent.name || 'Component'
  })`;

  return AuthenticatedComponent;
}

export default withAuth;
