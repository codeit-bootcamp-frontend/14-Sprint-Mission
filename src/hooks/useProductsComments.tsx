import { requestor } from '@/lib/requestor';
import {useInfiniteQuery, useMutation, useQueryClient } from '@tanstack/react-query';


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
    queryKey: ['productComments', productId],
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

export const usePostProductComment = (productId: number, openModal: (msg: string) => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (requestCommentValue: string | undefined) => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        openModal('로그인이 필요합니다.');
        return Promise.reject('No accessToken'); 
      }
      return requestor.post(
        `/products/${productId}/comments`,
        { content: requestCommentValue },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      openModal('댓글이 등록되었습니다!');
      queryClient.invalidateQueries({ queryKey: ['productComments', productId] });
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message;
      if (message?.includes('jwt malformed')) {
        openModal('로그인 후 등록 가능합니다!');
      } else {
        openModal(message || '댓글 등록 실패');
      }
    },
  });
};

export const usePatchProductComment = (productId: number, openModal: (msg: string) => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ commentId, requestCommentValue }: { commentId: number; requestCommentValue: string }) => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        openModal('로그인이 필요합니다.');
        return Promise.reject('No accessToken'); 
      }
      return requestor.patch(
        `/comments/${commentId}`,
        { content: requestCommentValue },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    },
    onSuccess: () => {
      openModal('댓글이 수정되었습니다!');
      queryClient.invalidateQueries({ queryKey: ['productComments', productId] });
    },
    onError: (error: any) => {      
      const message = error?.response?.data?.message;
      if (message?.includes('jwt malformed')) {
        openModal('로그인 후 수정 가능합니다!');
      } else {
      openModal(error?.response?.data?.message || '댓글 수정 실패');
    }
    },
  });
};
export const useDeleteCommentMutation = (productId: number, openModal: (msg: string) => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (commentId: number) => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        openModal('로그인이 필요합니다.');
        return Promise.reject('No accessToken'); 
      }
      return requestor.delete(`/comments/${commentId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['productComments', productId] }); 
    },
    onError: (error: any) => {
      const message = error?.response?.data?.message;
      if (message?.includes('jwt malformed')) {
        openModal('로그인 후 등록 가능합니다!');
      } else {
        openModal(message || '댓글 삭제 실패');
      }
    },
  });
};
