import { instance, STATUS_CREATED, STATUS_OK } from "./common-http";

export const INITIAL_LOGIN_VALUE = { email: "", password: "" };
export const INITIAL_SIGNUP_VALUE = {
  email: "",
  nickname: "",
  password: "",
  passwordConfirmation: "",
};

const PATH = "/auth";

export async function signUp(values) {
  try {
    const response = await instance.post(`${PATH}/signUp`, values);
    if (response.status === STATUS_CREATED) return response.data;
  } catch (e) {
    throw new Error("회원가입에 오류가 발생했습니다.");
  }
}
export async function logIn(values) {
  try {
    const response = await instance.post(`${PATH}/signIn`, values);
    if (response.status === STATUS_OK) return response.data;
  } catch (e) {
    throw new Error("로그인에 오류가 발생했습니다.");
  }
}
export async function refreshToken(values) {
  try {
    const response = await instance.post(`${PATH}/refresh-token`, values);
    if (response.status === STATUS_OK) return response.data;
  } catch (e) {
    throw new Error("재인증에 오류가 발생했습니다.");
  }
}
