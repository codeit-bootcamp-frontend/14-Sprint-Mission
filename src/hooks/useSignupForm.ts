import { z } from 'zod'

export const baseSignupSchema = z.object({
  email: z
    .string()
    .nonempty('이메일을 입력해주세요.')
    .email('잘못된 이메일 형식입니다.'),
  password: z
    .string()
    .nonempty('비밀번호를 입력해주세요.')
    .min(8, '비밀번호는 8자 이상이어야 합니다.')
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
      '비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다.'
    ),
  passwordConfirmation: z
    .string()
    .nonempty('비밀번호 확인을 입력해주세요.')
    .min(8, '비밀번호는 8자 이상이어야 합니다.')
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/,
      '비밀번호는 영문, 숫자, 특수문자를 포함해야 합니다.'
    ),
  nickname: z
    .string()
    .nonempty('닉네임을 입력해주세요.')
    .min(2, '닉네임은 2자 이상이어야 합니다.'),
})

// 최종 전체 유효성 검사 스키마 (비밀번호 일치 검사 포함)
export const signupSchema = baseSignupSchema.refine(
  (data) => data.password === data.passwordConfirmation,
  {
    message: '비밀번호가 일치하지 않습니다.',
    path: ['passwordConfirm'],
  }
)

// 타입 자동 추론
export type SignupForm = z.infer<typeof signupSchema>

// 개별 필드만 부분검증할 때는 baseSchema에서 pick을 사용 가능
export const emailSchema = baseSignupSchema.pick({ email: true })
export const passwordSchema = baseSignupSchema.pick({ password: true })
export const passwordConfirmSchema = baseSignupSchema.pick({
  passwordConfirmation: true,
})
export const nicknameSchema = baseSignupSchema.pick({ nickname: true })
