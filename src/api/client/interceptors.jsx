export const requestInterceptor = (config) => {
  const { token } = localStorage.getItem('token') ?? ''

  if (token) {
    config.headers.set('Authorization', `Basic${token}`)
  }
  return config
}
