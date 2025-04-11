export const fetchProducts = async ({
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = "",
} = {}) => {
  const query = new URLSearchParams({
    page,
    pageSize,
    orderBy,
    keyword,
  }).toString();

  const res = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const data = await res.json();
  return data;
};
