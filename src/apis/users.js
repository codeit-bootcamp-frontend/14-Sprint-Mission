import { instance, STATUS_OK } from "./common-http";

const PATH = "/users/me";

export async function getMyProfile() {
  try {
    const response = await instance.get(PATH);
    if (response.status === STATUS_OK) return response.data;
  } catch (e) {
    throw new Error("내 정보 조회에 오류가 발생했습니다.");
  }
}
export async function updateMyProfile(values) {
  try {
    const response = await instance.patch(PATH, values);
    if (response.status === STATUS_OK) return response.data;
  } catch (e) {
    throw new Error("내 정보 수정에 오류가 발생했습니다.");
  }
}
export async function updateMyPwd(values) {
  try {
    const response = await instance.patch(`${PATH}/password`, values);
    if (response.status === STATUS_OK) return response.data;
  } catch (e) {
    throw new Error("내 비밀번호 수정에 오류가 발생했습니다.");
  }
}
export async function getMyProducts() {
  try {
    const response = await instance.get(`${PATH}/products`);
    if (response.status === STATUS_OK) return response.data;
  } catch (e) {
    throw new Error("내 상품 조회에 오류가 발생했습니다.");
  }
}
export async function getMyFavorites() {
  try {
    const response = await instance.get(`${PATH}/favorites`);
    if (response.status === STATUS_OK) return response.data;
  } catch (e) {
    throw new Error("내 관심 상품 조회에 오류가 발생했습니다.");
  }
}
