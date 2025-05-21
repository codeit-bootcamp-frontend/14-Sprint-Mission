const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

// 상품 목록 가져오기 (검색, 정렬, 페이지네이션 포함)
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

// 베스트 상품 가져오기 (optional alias)
export function getBestItems() {
  return getItems({ order: "favorite", pageSize: 4 });
}
