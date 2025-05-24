import { useMutation } from '@tanstack/react-query'
import authService from '@/lib/api/service/authService'
import { useAuthStore } from '@/lib/stores/useAuthStore'
import { PostAuthSignInRequest } from '@/types/auth'

export const useSigninMutation = () => {
  // useAuthStore에서 setAccessToken 함수를 가져옵니다.
  const setAccessToken = useAuthStore((state) => state.setAccessToken)
  // useMutation 훅을 사용하여 로그인 요청을 처리합니다.
  return useMutation({
    // 로그인 API를 호출하는 함수입니다.
    mutationFn: (form: PostAuthSignInRequest) =>
      authService.postAuthSignIn(form),

    // 로그인 요청이 성공했을 때 실행되는 콜백 함수입니다.
    onSuccess: (res) => {
      const { accessToken } = res.data
      if (accessToken) {
        localStorage.setItem('accessToken', accessToken)
        setAccessToken(accessToken)
      }
    },

    // 로그인 요청이 실패했을 때 실행되는 콜백 함수입니다.
    onError: (error) => {
      console.error('로그인 실패:', error)
      alert('로그인에 실패했습니다. 다시 시도해주세요.')
    },
  })
}
