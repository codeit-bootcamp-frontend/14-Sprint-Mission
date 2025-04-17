const BASE_URL = "https://panda-market-api.vercel.app";

export async function getItems({
  search,
  order = "recent",
  page = 1,
  pageSize = 10,
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${order}&keyword=${search}`;

  const res = await fetch(`${BASE_URL}/products?${query}`);

  if (!res.ok) {
    throw new Error(res.status);
  }

  const body = await res.json();

  return body;
}

export async function getBestItems() {
  const query = `pageSize=4&orderBy=favorite`;
  const res = await fetch(`${BASE_URL}/products?${query}`);

  if (!res.ok) {
    throw new Error(res.status);
  }

  const body = await res.json();
  return body;
}
