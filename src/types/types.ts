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

export type SortOrder = 'recent' | 'favorite';

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
