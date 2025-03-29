export const requestInterceptor = (config) => {
  const { token } = localStorage.getItem('token') ?? '';

  if (token) {
    config.headers.set('Authorization', `Bearer ${token}`);
  }

  return config;
};
