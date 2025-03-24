import { ApiError, getProductDetail, Response } from "../api/getProductdetail";
import {
  Comment,
  getComment,
} from "../api/getComment";

// 상품 세부 정보 가져오기
export async function getDetail(
  productId: string = ""
): Promise<Response | ApiError | undefined> {
  const response = await getProductDetail(productId);
  return response;
}

interface commentReturn {
  nextCursor?: number;
  comments: {
    writer: {
      image: string;
      nickname: string;
      id: number;
    };
    updatedAt: string;
    createdAt: string;
    content: string;
    id: number;
  }[];
}

// 문의 댓글 가져오기
export async function comment({
  productId,
  limit,
  cursor,
}: Comment): Promise<commentReturn> {
  const response = await getComment({ productId, limit, cursor });
  
  if (response && "list" in response) {
     return {
       nextCursor: response.nextCursor,
       comments: response.list,
     };
  }

   return {
     nextCursor: 0,
     comments: [],
   };
 
}
