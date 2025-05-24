import requestor from '../client/requestor'
import { AxiosResponse } from 'axios'

import {
  PostAuthSignupRequest,
  PostAuthSignupResponse,
  PostAuthSignInRequest,
  PostAuthSignInResponse,
  PostAuthRefreshRequest,
  PostAuthRefreshResponse,
} from '@/types/auth'

class AuthService {
  postAuthSignup(
    body: PostAuthSignupRequest
  ): Promise<AxiosResponse<PostAuthSignupResponse>> {
    return requestor.post<PostAuthSignupResponse>(
      `/api/proxy/auth/signUp`,
      body
    )
  }

  postAuthSignIn(
    body: PostAuthSignInRequest
  ): Promise<AxiosResponse<PostAuthSignInResponse>> {
    return requestor.post<PostAuthSignInResponse>(
      `/api/proxy/auth/signIn`,
      body
    )
  }
  postAuthRefresh(
    body: PostAuthRefreshRequest
  ): Promise<AxiosResponse<PostAuthRefreshResponse>> {
    return requestor.post<PostAuthRefreshResponse>(
      `/api/proxy/auth/refresh-token`,
      body
    )
  }
}

const authService = new AuthService()

export default authService

// 초기 코드
// postAuthSignUp(body: PostAuthSignupRequest) {
//   const requestBody = {
//     ...body,
//   }
//   return requestor.post(`/auth/signUp`, requestBody)
// }

// postAuthSignIn(body: PostAuthSignInRequest) {
//   const requestBody = {
//     ...body,
//   }
//   return requestor.post(`/auth/signIn`, requestBody)
// }

// postAuthRefresh(body: PostAuthRefreshRequest) {
//   const requestBody = {
//     ...body,
//   }
//   return requestor.post(`/auth/refresh-token`, requestBody)
// }
