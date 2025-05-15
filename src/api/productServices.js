const getProducts = async (
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword
) => {
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}${
      keyword ? `&keyword=${keyword}` : ""
    }`
  );

  if (!response.ok) {
    throw new Error("상품 목록 조회에 실패하였습니다.");
  }

  return await response.json();
};

export const productServices = {
  getProducts,
};
