import axios from 'axios';

export const requestor = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// response interceptor 
requestor.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        const refreshToken = localStorage.getItem('refreshToken'); 
        if (!refreshToken) throw new Error('리프레시 토큰 없음');

        const res = await requestor.post('/auth/refresh-token', { refreshToken });
        const { accessToken, user } = res.data;

        localStorage.setItem('accessToken', accessToken);
        if (user) {
          localStorage.setItem('user', JSON.stringify(user));
        }
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return requestor(originalRequest);
      } catch (refreshError) {
        console.error('리프레시 실패 → 자동 로그아웃 필요');
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');
        window.location.href = '/login'; // ⬅️ 강제 로그인 페이지 이동
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);

// 요청 시 Authorization 자동 추가 (권장)
requestor.interceptors.request.use((config) => {
  const token = localStorage.getItem('accessToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});