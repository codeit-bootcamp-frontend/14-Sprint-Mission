export type ProductType = {
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

export interface ProductItemProps {
  product: ProductType | undefined;
}

export type CommentType = {
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

export interface ProductsResponse {
  products: ProductType[];
  totalCount: number;
}

export interface ProductResponse {
  data: ProductType;
}

// message
export interface UseCommentsProps {
  productId: string;
  limit?: number;
  cursor?: number;
}

export interface CommentsResponse {
  list: CommentType[];
  nextCursor: number;
}
