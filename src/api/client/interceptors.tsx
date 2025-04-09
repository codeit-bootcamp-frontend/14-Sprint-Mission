import { AxiosRequestConfig } from 'axios'

export const requestInterceptor = (
  config: AxiosRequestConfig
): AxiosRequestConfig => {
  const token: string | null = localStorage.getItem('token')

  if (token) {
    config.headers = config.headers || {}
    config.headers['Authorization'] = `Basic ${token}`
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
