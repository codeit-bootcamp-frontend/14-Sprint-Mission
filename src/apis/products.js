import { instance, STATUS_OK } from "./common-http";

const PATH = "/products";

export async function getProducts(page = 1, pageSize = 10, orderBy = "recent") {
  const params = { page, pageSize, orderBy };
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
