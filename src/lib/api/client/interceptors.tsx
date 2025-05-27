import { InternalAxiosRequestConfig } from 'axios'
import { useAuthStore } from '../../stores/useAuthStore'

export const requestInterceptor = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  // 토큰 가져오기
  const token = useAuthStore.getState().accessToken
  //
  const isPublicEndpoint =
    config.url?.startsWith('/products') && !config.url?.includes('/favorite')

  if (token && !isPublicEndpoint) {
    config.headers = config.headers || {}
    config.headers['Authorization'] = `Bearer ${token}`
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
