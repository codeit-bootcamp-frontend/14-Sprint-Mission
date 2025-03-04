import axios from "axios";

const URL = "https://panda-market-api.vercel.app";
export const instance = axios.create({
  baseURL: URL,
  headers: { "Content-Type": "application/json; charset=UTF-8" },
});
instance.interceptors.request.use(async function (config) {
  const accessToken = localStorage.getItem("accessToken") || "";
  if (accessToken) config.headers["Authorization"] = `Bearer ${accessToken}`;
  // else return Promise.reject("NO_TOKEN");
  return config;
});
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

export const STATUS_OK = 200;
export const STATUS_CREATED = 201;
export const STATUS_UNAUTHORIZED = 401;
export const STATUS_NOT_FOUND = 404;
