import { requestor } from '@/lib/requestor';
import { QueryFunctionContext, useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';


// 댓글 작성자 정보
export interface CommentWriter {
  id: number;
  nickname: string;
  image: string | null;
}

// 댓글 아이템
export interface CommentItemUnit {
  id: number;
  content: string;
  createdAt: string;
  updatedAt: string;
  writer: CommentWriter;
}

// 전체 응답 타입
export interface CommentListResponse {
  list: CommentItemUnit[];
  nextCursor: number;
}

export interface GetCommentsQuery {
  limit: number;  
  cursor?: number; 
}

export const useInfiniteProductsComments = (productId: number, limit = 10) => {
  return useInfiniteQuery<CommentListResponse, Error>({
    queryKey: ['itemsComment', productId, limit],
    queryFn: async ({ pageParam }) => {
      const res = await requestor.get<CommentListResponse>(`/products/${productId}/comments`, {
        params: {
          limit,
          cursor: pageParam ?? null,
        },
      });
      return res.data;
    },
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? null,
  });
};

export const useDeleteProductMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (id: number) => requestor.delete(`/products/${id}`),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['itemsComment'] });
    },
  });
};