import { useMutation } from '@tanstack/react-query'
import authService from '@/lib/api/service/authService'
import { useAuthStore } from '@/lib/stores/useAuthStore'
import { PostAuthSignInRequest } from '@/types/auth'

export const useSigninMutation = () => {
  const setAccessToken = useAuthStore((state) => state.setAccessToken)

  return useMutation({
    mutationFn: (form: PostAuthSignInRequest) =>
      authService.postAuthSignIn(form),
    onSuccess: (res) => {
      const { accessToken } = res.data
      if (accessToken) {
        localStorage.setItem('accessToken', accessToken)
        setAccessToken(accessToken)
      }
    },
    onError: (error) => {
      console.error('로그인 실패:', error)
      alert('로그인에 실패했습니다. 다시 시도해주세요.')
    },
  })
}
