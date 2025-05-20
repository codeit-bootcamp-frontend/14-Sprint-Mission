"use client";
import ButtonComponent from "@/components/ButtonComponent";
import InputComponent from "@/components/InputComponent";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Login() {
  const signInSchema = z.object({
    email: z
      .string()
      .nonempty({ message: "이메일은 필수 입력입니다." })
      .email({ message: "이메일 형식으로 작성해 주세요." }),
    password: z
      .string()
      .nonempty({ message: "비밀번호는 필수 입력입니다." })
      .min(8, { message: "비밀번호는 최소 8자 이상입니다." })
      .regex(/^[A-Za-z0-9!@#$%^&*]+$/, {
        message: "비밀번호는 숫자, 영문, 특수문자로만 가능합니다.",
      }),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
  });

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link href="/landingPage">
        <div className="flex flex-row">
          <img
            src="/logo.svg"
            alt="logo"
            className="lg:w-[103px] lg:h-[103px]"
          />
          <span className="lg:text-[66px] text-[#3692FF] font-bold ml-[22px]">
            판다마켓
          </span>
        </div>
      </Link>

      <div className="lg:mt-[40px] md:mt-[40px] mt-[24px]">
        <InputComponent
          id="email"
          label="이메일"
          placeholder="이메일을 입력해주세요"
          type="email"
          register={register}
        />
        <InputComponent
          id="password"
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요"
          type="password"
          register={register}
        />

        <ButtonComponent placeholder="로그인" isClear={false} />
      </div>
    </div>
  );
}
