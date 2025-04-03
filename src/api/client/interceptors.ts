import { InternalAxiosRequestConfig, AxiosHeaders } from 'axios';

export const requestInterceptor = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const tokenString = localStorage.getItem('token');
  let token = '';

  if (tokenString) {
    try {
      const parsedToken = JSON.parse(tokenString);
      token = parsedToken.token || '';
    } catch (error) {
      console.error('Error parsing token from localStorage:', error);
    }
  }

  if (token) {
    if (config.headers) {
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      config.headers = new AxiosHeaders({ Authorization: `Bearer ${token}` });
    }
  }

  return config;
};
