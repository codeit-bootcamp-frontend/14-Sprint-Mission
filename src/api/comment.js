import fetcher from "./http";
import { makeQueryString } from "../utils/makeFormat";

export const getItemComments = async ({ productId, limit = 5, cursor }) => {
  const queryString = makeQueryString({ limit, cursor });
  return fetcher(`/products/${productId}/comments?${queryString}`);
};
