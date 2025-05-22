"use client";
import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import SimpleLogin from "@/components/SimpleLogin";
import { useMutation } from "@tanstack/react-query";
import signUp from "@/services/signUp";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const router = useRouter();

  const signUpSchema = z
    .object({
      email: z
        .string()
        .nonempty({ message: "이메일은 필수 입력입니다." })
        .email({ message: "잘못된 이메일입니다" }),
      password: z
        .string()
        .nonempty({ message: "비밀번호는 필수 입력입니다." })
        .min(8, { message: "비밀번호를 8자 이상 입력해주세요." })
        .regex(/^[A-Za-z0-9!@#$%^&*]+$/, {
          message: "비밀번호는 숫자, 영문, 특수문자로만 가능합니다.",
        }),
      nickname: z.string().nonempty({ message: "닉네임은 필수 입력입니다." }),
      passwordConfirmation: z
        .string()
        .nonempty({ message: "비밀번호 확인은 필수 입력입니다." }),
    })
    .superRefine((data, context) => {
      if (data.password !== data.passwordConfirmation) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          message: "비밀번호가 일치하지 않습니다",
          path: ["passwordConfirmation"],
        });
      }
    });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    reValidateMode: "onChange",
    mode: "onBlur",
  });

  const mutation = useMutation({
    mutationFn: signUp,
    onSuccess: (data) => {
      console.log("회원가입 성공!");

      const { accessToken, refreshToken } = data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      router.push("/login");
    },
    onError: (error) => {
      console.log(`회원가입 실패 : ${error}`);
    },
  });

  const onSubmit = async (data: z.infer<typeof signUpSchema>) => {
    await mutation.mutateAsync({
      email: data.email,
      nickname: data.nickname,
      password: data.password,
      passwordConfirmation: data.passwordConfirmation,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link href="/landingPage">
        <div className="flex flex-row">
          <img
            src="/logo.svg"
            alt="logo"
            className="lg:w-[103px] lg:h-[103px] md:w-[103px] md:h-[103px] w-[51px] h-[51px]"
          />
          <span className="lg:text-[66px] md:text-[66px] text-[33px]  text-[#3692FF] font-bold ml-[22px]">
            판다마켓
          </span>
        </div>
      </Link>

      <div className="lg:mt-[40px] md:mt-[40px] mt-[24px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <InputComponent
            id="email"
            label="이메일"
            placeholder="이메일을 입력해주세요"
            type="email"
            register={register}
            error={errors.email?.message}
          />
          <InputComponent
            id="nickname"
            label="닉네임"
            placeholder="닉네임을 입력해주세요"
            type="text"
            register={register}
            error={errors.nickname?.message}
          />
          <InputComponent
            id="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            register={register}
            error={errors.password?.message}
          />
          <InputComponent
            id="passwordConfirmation"
            label="비밀번호 확인"
            placeholder="비밀번호를 다시 한 번 입력해주세요"
            type="password"
            register={register}
            error={errors.passwordConfirmation?.message}
          />

          <ButtonComponent
            placeholder="회원가입"
            isClear={isValid}
            isSubmitting={isSubmitting}
          />
        </form>
      </div>

      <SimpleLogin />

      <span className="mt-[24px] text-[14px] text-[#1F2937] font-medium">
        이미 회원이신가요?{" "}
        <Link href="/login" className="text-[#3692FF] underline">
          로그인
        </Link>
      </span>
    </div>
  );
}
