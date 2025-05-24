export interface PostAuthSignupRequest {
  email: string
  nickname: string
  password: string
  passwordConfirmation: string
}

export interface PostAuthSignupResponse {
  accessToken: string
  refreshToken: string
  user: {
    id: number
    email: string
    image: null | string
    nickname: string
    createdAt: string
    updatedAt: string
  }
}

export interface PostAuthSignInRequest {
  email: string
  password: string
}

export interface PostAuthSignInResponse {
  accessToken: string
  refreshToken: string
  user: {
    id: number
    email: string
    image: null | string
    nickname: string
    createdAt: string
    updatedAt: string
  }
}

export interface PostAuthRefreshRequest {
  refreshToken: string
}

export interface PostAuthRefreshResponse {
  accessToken: string
}
