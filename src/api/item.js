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

    return data;
  } catch (error) {
    console.log("err", error);
    return { totalCount: 0, list: [] };
  }
};
