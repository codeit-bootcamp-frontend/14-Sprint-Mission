import { HTTP_STATUS, instance, multipartInstance } from "./common-http";

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
    if (response.status === HTTP_STATUS.STATUS_CREATED) {
      const { user, ...tokenInfos } = response.data;
      saveTokenInfos(tokenInfos);
      return user;
    }
  } catch (err) {
    console.log(err);
    throw new Error("회원가입에 오류가 발생했습니다.");
  }
}
export async function logIn(values) {
  try {
    const response = await instance.post(`${PATH}/signIn`, values);
    if (response.status === HTTP_STATUS.STATUS_OK) {
      const { user, ...tokenInfos } = response.data;
      saveTokenInfos(tokenInfos);
      return user;
    }
  } catch (err) {
    console.log(err);
    throw new Error("로그인에 오류가 발생했습니다.");
  }
}

function saveTokenInfos({ accessToken, refreshToken }) {
  /**
   * 토큰 설정
   * Content-Type: application/json
   */
  instance.interceptors.request.use(async function (config) {
    if (accessToken) config.headers["Authorization"] = `Bearer ${accessToken}`;
    return config;
  });
  /**
   * 토큰 설정 및 자동 재발급 처리
   * Content-Type: multipart/form-data
   */
  multipartInstance.interceptors.request.use(async function (config) {
    if (accessToken) config.headers["Authorization"] = `Bearer ${accessToken}`;
    else return Promise.reject("NO_TOKEN");
    return config;
  });
  /**
   * 리프레시 토큰 저장
   */
  localStorage.setItem("refreshToken", refreshToken);
}
