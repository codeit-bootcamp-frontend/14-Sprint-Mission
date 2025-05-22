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
import signin from "@/services/login";

export default function Login() {
  const router = useRouter();

  const signInSchema = z.object({
    email: z
      .string()
      .nonempty({ message: "이메일은 필수 입력입니다." })
      .email({ message: "이메일 형식으로 작성해 주세요." }),
    password: z
      .string()
      .nonempty({ message: "비밀번호는 필수 입력입니다." })
      .min(8, { message: "비밀번호를 8자 이상 입력해주세요." })
      .regex(/^[A-Za-z0-9!@#$%^&*]+$/, {
        message: "비밀번호는 숫자, 영문, 특수문자로만 가능합니다.",
      }),
  });

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting, isValid },
  } = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    reValidateMode: "onChange",
    mode: "onBlur",
  });

  const mutation = useMutation({
    mutationFn: signin,
    onSuccess: (data) => {
      console.log("로그인 성공!");

      const { accessToken, refreshToken } = data;

      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);

      router.push("/boards");
    },
    onError: (error) => {
      console.log(`로그인 실패 : ${error}`);
      setError("email", {
        type: "manual",
        message: "잘못된 이메일입니다",
      });
    },
  });

  const onSubmit = async (data: z.infer<typeof signInSchema>) => {
    await mutation.mutateAsync({
      email: data.email,
      password: data.password,
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
          <span className="lg:text-[66px] md:text-[66px] text-[33px] text-[#3692FF] font-bold ml-[22px]">
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
            id="password"
            label="비밀번호"
            placeholder="비밀번호를 입력해주세요"
            type="password"
            register={register}
            error={errors.password?.message}
          />

          <ButtonComponent
            placeholder="로그인"
            isClear={isValid}
            isSubmitting={isSubmitting}
          />
        </form>
      </div>

      <SimpleLogin />

      <span className="mt-[24px] text-[14px] text-[#1F2937] font-medium">
        판다마켓이 처음이신가요?{" "}
        <Link href="/signup" className="text-[#3692FF] underline">
          회원가입
        </Link>
      </span>
    </div>
  );
}
