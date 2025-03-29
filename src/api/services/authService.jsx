import requestor from '../client/requestor'

class AuthService {
  // 틀릴 수도
  postAuthSignUp(body) {
    const requestBody = {
      ...body,
    }
    return requestor.post(`/auth/signUp`, requestBody)
  }

  postAuthSignIn(body) {
    const requestBody = {
      ...body,
    }
    return requestor.post(`/auth/signIn`, requestBody)
  }

  postAuthRefresh(body) {
    const requestBody = {
      ...body,
    }
    return requestor.post(`/auth/refresh-token`, requestBody)
  }
}

const authService = new AuthService()

export default authService
