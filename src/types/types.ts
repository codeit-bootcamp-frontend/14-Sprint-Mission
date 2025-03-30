export type Product = {
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
  // isFavorite: boolean;
};

export type Comment = {
  writer: Writer;
  updatedAt: string;
  createdAt: string;
  content: string;
  id: number;
};

export type Writer = {
  image: string;
  nickname: string;
  id: string;
};

// SortOrder 타입
export type SortOrder = 'recent' | 'favorite';
export type Label = '최신순' | '좋아요순';

// select prop
export type SelectBoxValue = {
  label: Label;
  value: SortOrder;
};

// useProduct hook
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

//  useProducts hook

// message
export interface UseCommentsProps {
  productId: number;
  limit: number;
  cursor: number;
}
