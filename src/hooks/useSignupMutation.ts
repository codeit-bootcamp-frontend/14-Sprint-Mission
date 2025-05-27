import { useMutation } from '@tanstack/react-query'
import authService from '@/lib/api/service/authService'

import { PostAuthSignupRequest } from '@/types/auth'

export const useSignupMutation = () => {
  // useMutation 훅을 사용하여 회원가입 요청을 처리
  return useMutation({
    mutationFn: (form: PostAuthSignupRequest) =>
      authService.postAuthSignup(form),

    // 회원가입 요청이 실패했을 때 실행되는 콜백 함수
    onError: (error: any) => {
      console.error('회원가입 실패:', error)
      if (error.response) {
        console.error('서버 응답:', error.response.data)
      }
      alert('회원가입에 실패했습니다. 다시 시도해주세요.')
    },
  })
}
