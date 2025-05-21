import { AxiosRequestConfig } from 'axios'
// requestInterceptor.ts
export const requestInterceptor = (
  config: AxiosRequestConfig
): AxiosRequestConfig => {
  if (typeof window !== 'undefined') {
    // 클라이언트 환경인지 확인
    const token: string | null = localStorage.getItem('token')

    const isAuthRequired =
      config.url &&
      !(config.url.includes('/products') && !config.url.includes('/favorite'))

    if (token && isAuthRequired) {
      config.headers = config.headers || {}
      config.headers['Authorization'] = `Basic ${token}`
    }
  }

  return config
}

// 전 코드
// import { AxiosRequestConfig } from 'axios'

// export const requestInterceptor = (config: AxiosRequestConfig) => {
//   const { token } = localStorage.getItem('token') ?? ''

//   if (token) {
//     config.headers.set('Authorization', `Basic${token}`)
//   }
//   return config
// }
