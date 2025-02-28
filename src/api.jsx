const BASE_URL = "https://panda-market-api.vercel.app";

export async function getItem({
  orderBy = "recent",
  page = 1,
  pageSize = 10,
  keyword = "",
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}&keyword=${keyword}`;
  const response = await fetch(`${BASE_URL}/products?${query}`);
  const body = await response.json();
  return body;
}
