import { getNewAccessToken } from '@/api/auth';
import Cookies from 'js-cookie';

type RequestOptions = {
  method: string;
  headers: Record<string, string>;
  body?: BodyInit | null;
};

export const fetchWithAuth = async (
  urlString: string,
  options: RequestOptions
): Promise<Response> => {
  // 토큰이 없으면 헤더에서 Authorization 제거
  const token = Cookies.get('accessToken');
  const headers = { ...options.headers };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  } else if (headers.Authorization) {
    // 토큰이 없는데 Authorization 헤더가 있으면 제거
    delete headers.Authorization;
  }

  // 요청 실행
  let response = await fetch(`${urlString}`, {
    ...options,
    headers,
  });

  // 401 응답 경우 토큰 갱신
  if (response.status == 401) {
    const refreshToken = Cookies.get('refreshToken');
    if (!refreshToken) {
      throw new Error('인증 만료');
    }
    // 새 토큰 가져오고 쿠키에 저장
    const newToken = await getNewAccessToken(refreshToken);
    console.log('token', newToken);
    if (newToken) {
      Cookies.set('accessToken', newToken, { expires: 1 }); // 1일간 유효
    }

    // 새로운 쿠키로 헤더 업데이트
    headers.Authorization = `Bearer ${newToken}`;

    // 재용청
    response = await fetch(`${urlString}`, {
      ...options,
      headers,
    });
  }

  return response;
};
