import { z } from 'zod'

export const baseSigninSchema = z.object({
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
})

// 타입 자동 추론
export type SigninForm = z.infer<typeof baseSigninSchema>

// 개별 필드만 부분검증할 때는 baseSchema에서 pick을 사용 가능
export const emailSchema = baseSigninSchema.pick({ email: true })
export const passwordSchema = baseSigninSchema.pick({ password: true })
