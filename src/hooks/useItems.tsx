import { requestor } from "@/lib/requestor";
import { keepPreviousData, useMutation, useQuery } from "@tanstack/react-query";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useEffect, useState } from "react";

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


interface ProductFavoriteResponse {
   productId: number; 
   isFavorited: boolean; 
   setIsFavorited: (value: boolean) => void, 
   setCount: (value: number | ((prev: number) => number)) => void 
}

export const useToggleProductFavorite = 
(openModal: (msg: string) => void, options?: { onSuccess?: (data: any) => void }) => {

  return useMutation({
    mutationFn: async ({ productId, isFavorited, setIsFavorited, setCount }:ProductFavoriteResponse ) => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        openModal('로그인이 필요합니다.');
        return Promise.reject('No accessToken');
      }

      setIsFavorited(!isFavorited);
      setCount((prev: number) => isFavorited ? prev - 1 : prev + 1);

      if (isFavorited) {
        return requestor.delete(`/products/${productId}/favorite`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        return requestor.post(
          `/products/${productId}/favorite`,
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
