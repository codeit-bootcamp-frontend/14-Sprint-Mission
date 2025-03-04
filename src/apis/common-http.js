import axios from "axios";

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
instance.interceptors.request.use(async function (config) {
  const accessToken = localStorage.getItem("accessToken") || "";
  if (accessToken) config.headers["Authorization"] = `Bearer ${accessToken}`;
  return config;
});
instance.interceptors.response.use(
  (response) => Promise.resolve(response),
  async (error) => {
    console.log(error);
    if (error.response?.status === 401 && error.response?.data?.message === "jwt malformed") {
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) return Promise.reject(error);
      console.log("리프레시 토큰으로 토큰 재발급 합니다");
      const { accessToken } = await getTokenRefresh(refreshToken);
      localStorage.setItem("accessToken", accessToken);
    }
  }
);

export const multipartInstance = axios.create({
  baseURL: URL,
  headers: { "Content-Type": "multipart/form-data; charset=UTF-8" },
});
multipartInstance.interceptors.request.use(async function (config) {
  const accessToken = localStorage.getItem("accessToken") || "";
  if (accessToken) config.headers["Authorization"] = `Bearer ${accessToken}`;
  else return Promise.reject("NO_TOKEN");
  return config;
});

async function getTokenRefresh(refreshToken) {
  try {
    const response = await axios.post(`${URL}/auth/refresh-token`, { refreshToken });
    if (response.status === HTTP_STATUS.STATUS_OK) return response.data;
  } catch (e) {
    throw new Error("토큰 갱신에 오류가 발생했습니다.");
  }
}
