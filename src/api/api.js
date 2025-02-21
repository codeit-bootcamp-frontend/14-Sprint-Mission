const BASE_URL = "https://panda-market-api.vercel.app";

export async function getProducts({
  page = 12,
  pageSize = 10,
  keyword = "",
  orderBy = "recent",
}) {
  const query = `page=${page}&pageSize=${pageSize}&keyword=${keyword}&orderBy=${orderBy}`;
  const res = await fetch(`${BASE_URL}/products?${query}`);
  if (!res.ok) {
    throw new Error("상품을 불러오는데 실패했습니다.");
  }
  const body = await res.json();
  return body;
}
