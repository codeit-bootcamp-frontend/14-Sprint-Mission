export interface Product {
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
  isFavorite: boolean;
}

// SortOrder 타입
export type SortOrder = 'recent' | 'favorite';
export type Label = '최신순' | '좋아요순';

// select prop
export type SelectBoxValue = {
  label: Label;
  value: SortOrder;
};

export interface UseProductProps {
  sortOrder: SortOrder;
  currentPage: number;
  pageSize: number;
  keyword?: string;
}

export interface UseProductsValue {
  products: Product[];
  totalCount: number;
}
