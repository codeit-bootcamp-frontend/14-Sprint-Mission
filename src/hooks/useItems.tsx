import { requestor } from "@/lib/requestor";
import { keepPreviousData, useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useEffect, useRef, useState } from "react";

export interface ProductQuery {
  page: number; // 기본값 1
  pageSize: number; // 기본값 10
  orderBy: 'favorite' | 'recent'; // 기본값 'recent'
  keyword?: string; // optional
}
export interface ProductSummary {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  images?: string[];
  tags?: string[];
  ownerId?: number;
  ownerNickname?: string;
  favoriteCount?: number;
  createdAt?: string; // ISO 문자열, 필요시 Date로 변환 가능
}

export interface ProductListResponse {
  totalCount: number;
  list: ProductSummary[];
}

// 상품 등록 요청 타입
export interface CreateProductRequest {
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
}

// 상품 응답 타입
export interface CreateProductResponse {
  createdAt: string;
  favoriteCount: number;
  ownerNickname: string;
  ownerId: number;
  images: string[];
  tags: string[];
  price: number;
  description: string;
  name: string;
  id: number;
}

interface ProductFavoriteResponse {
   id: number; 
   isFavorited: boolean; 
   setIsFavorited: (value: boolean) => void, 
   setCount: (value: number | ((prev: number) => number)) => void 
}

export interface ProductDetail {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];         // 이미지 URL 리스트
  tags: string[];           // 태그 리스트 (예: ["전자제품"])
  isFavorite: boolean;      // 사용자가 찜한 여부
  favoriteCount: number;    // 총 찜 수
  createdAt: string;        // ISO 시간 문자열
  ownerId: number;
  ownerNickname: string;
}
// 상품 리스트 불러오기
export const useItemList = (query:ProductQuery) => { 
  return useQuery({
    queryKey: ['Items', query],
    queryFn: async () => {
      const res = await requestor.get<ProductListResponse>('/products', {
        params: query,
      });
      return res.data ;
    },
    placeholderData: keepPreviousData,
  });
};

// 상품 등록
export function usePostProduct(openModal: (msg: string) => void, router: AppRouterInstance ) { // 사용에따라 router를 인자로 받음
    
  return useMutation({
    mutationFn: async (productData: CreateProductRequest) => {
      const res = await requestor.post<CreateProductResponse>('/products', productData);
      return res.data;
    },
    onSuccess: (product) => {
      openModal('상품 등록이 완료되었습니다!');
      router.push('/items');
    },
    onError: (error: any) => {
      openModal(error?.response?.data?.message || '상품 등록 실패');
    },
  });
};

// 상품 좋아요 토글
export const useToggleProductFavorite = 
(openModal: (msg: string) => void, options?: { onSuccess?: (data: any) => void }) => {

  return useMutation({
    mutationFn: async ({ id, isFavorited, setIsFavorited, setCount }:ProductFavoriteResponse ) => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        openModal('로그인이 필요합니다.');
        return Promise.reject('No accessToken');
      }

      setIsFavorited(!isFavorited);
      setCount((prev: number) => isFavorited ? prev - 1 : prev + 1);

      if (isFavorited) {
        return requestor.delete(`/products/${id}/favorite`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        return requestor.post(
          `/products/${id}/favorite`,
          {},
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
      }
    },
    onError: (error) => {
      const message = (error as any)?.response?.data?.message;
      if (message?.includes('jwt malformed')) {
        openModal('로그인 후 등록 가능합니다!');
      } else {
        openModal(message || '관심상품 처리 실패');
      }
    },
  });
};
// 상품 상세보기 
export const useProductsDetails = (productId:number) => { 
  return useQuery({
    queryKey: ['ItemsDetails', productId],
    queryFn: async () => {
      const res = await requestor.get<ProductDetail>(`/products/${productId}`);
      return res.data;
    },
    placeholderData: keepPreviousData,
  });
};

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

// 상품 댓글리스트 무한로딩
export function useInfiniteProductsCommentsWithObserver(productId: number, limit = 10) {   // 무한로딩
  const queryResult = useInfiniteQuery<CommentListResponse, Error>({
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

  const loadMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!loadMoreRef.current || !queryResult.hasNextPage) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && queryResult.hasNextPage) {
          queryResult.fetchNextPage();
        }
      },
      { threshold: 1.0 }
    );

    observer.observe(loadMoreRef.current);

    return () => {
      if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    };
  }, [queryResult.hasNextPage, queryResult.fetchNextPage]);

  return {
    ...queryResult,
    loadMoreRef,
  };
}

// 상품 댓글 등록
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

// 상품 댓글 수정
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

// 상품 댓글 삭제
export const useDeleteProductComment = (productId: number, openModal: (msg: string) => void) => {
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
      openModal('댓글이 삭제되었습니다!');
       setTimeout(() => {
        queryClient.invalidateQueries({ queryKey: ['productComments', productId] });
      }, 1300);
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
