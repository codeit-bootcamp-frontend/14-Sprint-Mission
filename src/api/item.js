import fetcher from "./http";
import { makeQueryString } from "../utils/makeFormat";

export const getItems = async ({
  sortBy = "recent",
  page = "1",
  pageSize = "10",
  keyword = "",
}) => {
  const queryString = makeQueryString({ sortBy, page, pageSize, keyword });
  return fetcher(`/products?${queryString}`);
};

export const getItem = async (productId) => {
  return fetcher(`/products/${productId}`);
};