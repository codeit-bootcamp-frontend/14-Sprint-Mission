import { getComment, getProductDetail } from "../api/api";

// 상품 세부 정보 가져오기
export async function getDetail(setProductDetail, productId = "") {
  const response = await getProductDetail(productId);
  setProductDetail(response);
}

// 문의 댓글 가져오기
export async function Comments(
  productId,
  limit,
  cursor,
  setCursor,
  setComment
) {
  const response = await getComment(productId, limit, cursor);
  setCursor(response.nextCursor);
  setComment(response.list);
}