import { requestor } from "@/lib/requestor";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

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
