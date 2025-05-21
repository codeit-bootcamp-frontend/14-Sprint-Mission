import client from "./client";

export const productAPI = {
  // 상품 상세 정보 조회
  getDetail: (productId) => client.get(`/products/${productId}`),

  // 상품 좋아요
  addFavorite: (productId) => client.post(`/products/${productId}/favorite`),

  // 상품 좋아요 취소
  removeFavorite: (productId) =>
    client.delete(`/products/${productId}/favorite`),

  // 상품 문의글 목록 조회
  getComments: (productId, cursor, limit = 10) =>
    client.get(`/products/${productId}/comments`, {
      params: { cursor, limit },
    }),

  // 상품 문의글 작성
  addComment: (productId, content) =>
    client.post(`/products/${productId}/comments`, { content }),

  // 문의글 수정
  updateComment: (commentId, content) =>
    client.patch(`/comments/${commentId}`, { content }),

  // 문의글 삭제
  deleteComment: (commentId) => client.delete(`/comments/${commentId}`),
};
