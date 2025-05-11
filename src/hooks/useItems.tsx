import { requestor } from "@/lib/requestor";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

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
