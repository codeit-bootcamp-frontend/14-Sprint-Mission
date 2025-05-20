const getComments = async (productId, limit = 5) => {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products/${productId}/comments?limit=${limit}`
  );

  if (!response.ok) {
    throw new Error("상품 목록 조회에 실패하였습니다.");
  }

  return await response.json();
};

export const commentServices = {
  getComments,
};
