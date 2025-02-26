import { instance, STATUS_CREATED, STATUS_OK } from "./common-http";

const PATH = "/products";

export async function getProducts(page = 1, pageSize = 10, orderBy = "recent", keyword) {
  const params = { page, pageSize, orderBy, keyword };
  try {
    const response = await instance.get(PATH, { params });
    if (response.status === STATUS_OK) return response.data;
  } catch (e) {
    throw new Error("상품 조회에 오류가 발생했습니다.");
  }
}
export async function getProductDetail(productId) {
  try {
    const response = await instance.get(`${PATH}/${productId}`);
    if (response.status === STATUS_OK) return response.data;
  } catch (e) {
    throw new Error("상품 상세 조회에 오류가 발생했습니다.");
  }
}

export async function createProduct(value) {
  try {
    const response = await instance.post(PATH, value);
    if (response.status === STATUS_CREATED) return response.data;
  } catch (e) {
    throw new Error("상품 등록에 오류가 발생했습니다.");
  }
}
export async function updateProduct(productId, value) {
  try {
    const response = await instance.patch(`${PATH}/${productId}`, value);
    if (response.status === STATUS_OK) return response.data;
  } catch (e) {
    throw new Error("상품 정보 수정에 오류가 발생했습니다.");
  }
}
export async function deleteProduct(productId) {
  try {
    const response = await instance.delete(`${PATH}/${productId}`);
    if (response.status === STATUS_OK) return response.data;
  } catch (e) {
    throw new Error("상품 정보 수정에 오류가 발생했습니다.");
  }
}

export async function addToFavorites(productId) {
  try {
    const response = await instance.post(`${PATH}/${productId}/favorite`);
    if (response.status === STATUS_CREATED) return response.data;
  } catch (e) {
    throw new Error("상품 좋아요 중 오류가 발생했습니다.");
  }
}
export async function removeFromFavorites(productId) {
  try {
    const response = await instance.delete(`${PATH}/${productId}/favorite`);
    if (response.status === STATUS_OK) return response.data;
  } catch (e) {
    throw new Error("상품 좋아요 취소 중 오류가 발생했습니다.");
  }
}
