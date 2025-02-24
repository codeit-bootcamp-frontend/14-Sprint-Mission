export const getItems = async ({
  sortBy = "recent",
  page = "1",
  pageSize = "10",
  keyword = "",
}) => {
  const queryString = Object.entries({ sortBy, page, pageSize, keyword })
    .map(([key, value]) => `${key}=${value}`)
    .join("&");

  try {
    const result = await fetch(
      `https://panda-market-api.vercel.app/products?${queryString}`
    );
    const data = await result.json();

    return { status: result.status, ...data };
  } catch (error) {
    console.error(error);
    return { status: 520, list: [], totalCount: 0 };
  }
};
