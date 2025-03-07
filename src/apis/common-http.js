import axios from "axios";
import { saveTokenInfos } from "./auth";

export const HTTP_STATUS = {
  STATUS_OK: 200,
  STATUS_CREATED: 201,
  STATUS_UNAUTHORIZED: 401,
  STATUS_NOT_FOUND: 404,
};

const URL = "https://panda-market-api.vercel.app";

export const instance = axios.create({
  baseURL: URL,
  headers: { "Content-Type": "application/json; charset=UTF-8" },
});
/**
 * 토큰 자동 재발급 설정
 * Content-Type: application/json
 */
instance.interceptors.response.use(
  (res) => Promise.resolve(res),
  async (err) => checkError(err)
);

export const multipartInstance = axios.create({
  baseURL: URL,
  headers: { "Content-Type": "multipart/form-data; charset=UTF-8" },
});
/**
 * 토큰 자동 재발급 처리
 * Content-Type: multipart/form-data
 */
multipartInstance.interceptors.response.use(
  (res) => Promise.resolve(res),
  async (err) => checkError(err)
);

async function checkError(error) {
  const refreshToken = localStorage.getItem("refreshToken");
  if (error.response?.status !== 401 || !refreshToken) return Promise.reject(error);
  try {
    const { accessToken } = await getTokenRefresh(refreshToken);
    saveTokenInfos({ accessToken, refreshToken });
    alert("토큰이 갱신되었습니다. 다시 시도해주세요");
  } catch (err) {
    console.log(err);
    alert("재로그인이 필요합니다.");
    localStorage.clear();
    window.location.href = "";
  }
}

async function getTokenRefresh(refreshToken) {
  try {
    const response = await axios.post(`${URL}/auth/refresh-token`, { refreshToken });
    if (response.status === HTTP_STATUS.STATUS_OK) return response.data;
  } catch (e) {
    throw new Error("토큰 갱신에 오류가 발생했습니다.");
  }
}
