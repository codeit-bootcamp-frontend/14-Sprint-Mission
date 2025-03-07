import { getComment, getProductDetail } from "../api/api";

// 상품 세부 정보 가져오기
export async function getDetail( productId = "") {
  const response = await getProductDetail(productId);
  return response;
}

// 문의 댓글 가져오기
export async function comment(
  productId,
  limit,
  cursor,
) {
  const response = await getComment(productId, limit, cursor);
  return {
    nextCursor: response.nextCursor,
    comments: response.list
  }
}