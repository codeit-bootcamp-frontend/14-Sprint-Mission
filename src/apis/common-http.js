import axios from "axios";

const URL = "https://panda-market-api.vercel.app";
export const instance = axios.create({
  baseURL: URL,
  headers: { "Content-Type": "application/json; charset=UTF-8" },
});

export const STATUS_OK = 200;
export const STATUS_CREATED = 201;
export const STATUS_UNAUTHORIZED = 401;
export const STATUS_NOT_FOUND = 404;
