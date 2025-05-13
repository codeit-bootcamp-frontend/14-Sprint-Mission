import Cookies from 'js-cookie';
const BASE_URL = 'https://panda-market-api.vercel.app';

export interface User {
  id: number;
  nickname: string;
  image: string | null;
  email: string;
}

interface LoginResponse {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export const login = async (email: string, password: string) => {
  try {
    const response = await fetch(`${BASE_URL}/auth/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
      throw new Error('로그인 실패');
    }

    const { user, accessToken, refreshToken }: LoginResponse =
      await response.json();
    Cookies.set('user', JSON.stringify(user));
    Cookies.set('accessToken', accessToken);
    Cookies.set('refreshToken', refreshToken);
    return { success: true };
  } catch (error) {
    console.log('로그인 중 오류', error);
    return { success: false, error: error };
  }
};

export const getNewAccessToken = async (
  refreshToken: string
): Promise<string | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}/auth/refresh-token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('access 토큰 갱신 실패:', errorData);
      throw new Error(`HTTP 에러! status: ${response.status}`);
    }

    const data: { accessToken: string } = await response.json();
    // console.log('토큰 갱신 성공', data.accessToken);
    return data.accessToken;
  } catch (error) {
    console.error('토큰 갱신 실패', error);
    return undefined;
  }
};
