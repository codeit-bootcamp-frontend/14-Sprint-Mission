import { requestor } from "@/lib/requestor";
import { keepPreviousData, useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";


export interface PostListQuery {
  page: number; // 기본값 1
  pageSize: number; // 기본값 10
  orderBy: 'like' | 'recent'; // 기본값 'recent'
  keyword?: string; // optional
}

export type PostListResponse = {
  totalCount: number;
  list: PostItem[];
};

export type PostItem = {
  id: number;
  title: string;
  content: string;
  image: string;
  likeCount: number;
  createdAt: string;  // ISO 형식 (Date string)
  updatedAt: string;
  writer: PostWriter;
  isLiked?: boolean;
};

export type PostWriter = {
  id: number;
  nickname: string;
};

export const useArticlesList = (query:PostListQuery) => { 
  return useQuery({
    queryKey: ['articles', query],
    queryFn: async () => {
      const res = await requestor.get<PostListResponse>('/articles', {
        params: query,
      });
      return res.data ;
    },
    placeholderData: keepPreviousData,
  });
};


export function useInfiniteArticles(query: Omit<PostListQuery, 'page'>) {
  const queryResult = useInfiniteQuery<PostListResponse, Error>({
    queryKey: ['infiniteArticles', query],
    queryFn: async ({ pageParam = 1 }) => {
      const res = await requestor.get<PostListResponse>('/articles', {
        params: {
          ...query,
          page: pageParam,
        },
      });
      return res.data;
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const loadedCount = allPages.reduce((acc, page) => acc + page.list.length, 0);
      if (loadedCount >= lastPage.totalCount) {
        return undefined;
      }
      return allPages.length + 1; 
    },
  });

  const handleLoadMore = () => {
    if (queryResult.hasNextPage && !queryResult.isFetchingNextPage) {
      queryResult.fetchNextPage();
    }
  };

  return {
    ...queryResult,
    handleLoadMore,
  };
}


export type PostDetail = {
  id: number;
  title: string;
  content: string;
  image: string;
  likeCount: number;
  isLiked: boolean;
  createdAt: string; // ISO 날짜 문자열
  updatedAt: string; // ISO 날짜 문자열
  writer: {
    id: number;
    nickname: string;
  };
};

interface ProductFavoriteResponse {
   productId: number; 
   isFavorited: boolean; 
   setIsFavorited: (value: boolean) => void, 
   setCount: (value: number | ((prev: number) => number)) => void 
}
