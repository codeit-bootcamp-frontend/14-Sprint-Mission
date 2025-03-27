import fetcher from "./http";
import { makeQueryString } from "@/utils/makeFormat";
import { ProductResultType, ProductType } from "@/types/product";

type GetItemsParams = {
  sortBy: "recent" | "favorite";
  page: number;
  pageSize: number;
  keyword: string;
};

export const getItems = async ({
  sortBy = "recent",
  page,
  pageSize,
  keyword,
}: GetItemsParams) => {
  const queryString = makeQueryString({ sortBy, page, pageSize, keyword });
  return fetcher<ProductResultType>(`/products?${queryString}`);
};

export const getItem = async (productId: string) => {
  return fetcher<ProductType>(`/products/${productId}`);
};
