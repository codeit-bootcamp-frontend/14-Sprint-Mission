import fetcher from "./http";
import { makeQueryString } from "@/utils/makeFormat";
import { CommentResponseType } from "@/types/comment";

type GetItemCommentsParams = {
  productId: string;
  limit?: number;
  cursor?: string;
};

export const getItemComments = async ({
  productId,
  limit = 5,
  cursor = "",
}: GetItemCommentsParams) => {
  const queryString = makeQueryString({ limit, cursor });
  return fetcher<CommentResponseType>(
    `/products/${productId}/comments?${queryString}`
  );
};
