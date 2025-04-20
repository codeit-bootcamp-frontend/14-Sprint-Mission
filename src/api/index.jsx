import axios from 'axios';

const requestor = axios.create({
  baseURL: 'https://panda-market-api.vercel.app',
  timeout: 60000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

// 상품 리스트 가져오기
export async function getProducts(query) {
  const objectToQueryString = (obj) => {
    const params = new URLSearchParams();
    Object.entries(obj).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        params.set(key, String(value));
      }
    });
    return params.toString();
  };

  const queryString = objectToQueryString(query);

  try {
    const response = await requestor.get(`/products?${queryString}`);
    return response.data;
  } catch (error) {
    console.error("상품 목록 조회 실패:", error);
    throw error;
  }
}

// 상품 상세
export async function getProductsDetail(id) {
  try {
    const response = await requestor.get(`/products/${id}`);
    return response.data;
  } catch (error) {
    console.error("상품 상세 조회 실패:", error);
    throw error;
  }
}

// 상품 댓글
export async function getProductsComments(id, limit = 4, cursor = 0) {
  try {
    const response = await requestor.get(`/products/${id}/comments?limit=${limit}&cursor=${cursor}`);
    return response.data;
  } catch (error) {
    console.error("댓글 목록 조회 실패:", error);
    throw error;
  }
}

// 댓글 수정
export async function updateComment(commentId, content) {
  try {
    const response = await requestor.patch(`/comments/${commentId}`, {
      content,
    });
    return response.data;
  } catch (error) {
    console.error(" 댓글 수정 실패:", error);
    throw error;
  }
}
// 댓글 삭제
export async function deleteComment(commentId) {
  try {
    await requestor.delete(`/comments/${commentId}`);
  } catch (error) {
    console.error('댓글 삭제 실패:', error);
    throw error;
  }
}