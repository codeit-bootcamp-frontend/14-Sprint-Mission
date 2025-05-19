const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// 전체 상품 목록 가져오기
export async function getItems({
  search,
  order = "recent",
  page = 1,
  pageSize = 12,
}) {
  const query = new URLSearchParams({
    page,
    pageSize,
    orderBy: order,
    ...(search && { keyword: search }),
  }).toString();

  const res = await fetch(`${BASE_URL}/products?${query}`);
  if (!res.ok) throw new Error(res.status);
  return res.json();
}

// 좋아요 순 베스트 상품 가져오기 (4개만)
export async function getBestItems() {
  const res = await fetch(`${BASE_URL}/products?pageSize=4&orderBy=favorite`);
  if (!res.ok) throw new Error(res.status);
  return res.json();
}
