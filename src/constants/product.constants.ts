import { ProductQuery } from "@/hooks/useItems";

  // 일반 상품리스트 기본값
  export type orderByType = "recent" | "favorite";

  export const ORDER_OPTIONS = [
    { value: 'recent', label: '최신순' },
    { value: 'favorite', label: '좋아요순' },
  ];

  export const VISIBLE_ITEMS = {
    length: {mobile:4, tablet:6, desktop:10},
    column: {mobile:2, tablet:3, desktop:5},
  };

  // 베스트 상품 기본값
  export const BEST_VISIBLE_ITEMS = {
    length: { mobile:1, tablet:2, desktop:4},   // 상품 갯수 (mobile, tablet, desktop)
    column: { mobile: 1, tablet: 2, desktop: 4 },   // 열 갯수 (mobile, tablet, desktop)
  };
    