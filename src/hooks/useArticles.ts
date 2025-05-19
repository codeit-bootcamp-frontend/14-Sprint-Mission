import { requestor } from "@/lib/requestor";
import { keepPreviousData, useInfiniteQuery, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { CommentListResponse } from "./useItems";


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

export type PostDetail = {
  id: number;
  title: string;
  content: string;
  image: string;
  likeCount: number;
  createdAt: string; // ISO 날짜 문자열
  updatedAt: string; // ISO 날짜 문자열
  writer: {
    id: number;
    nickname: string;
  };
};

interface ProductFavoriteResponse {
   id: number; 
   isFavorited: boolean; 
   setIsFavorited: (value: boolean) => void, 
   setCount: (value: number | ((prev: number) => number)) => void 
}

export interface ArticleCreateRequest {
  title?: string; 
  content?: string;
  image?:string;
}

//게시물 리스트 불러오기 
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

// 게시물 더보기 무한로딩
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

// 게시물 상세보기
export const useArticleDetails = (articleId:number) => { 
  return useQuery({
    queryKey: ['articleDetails', articleId],
    queryFn: async () => {
      const res = await requestor.get<PostDetail>(`/articles/${articleId}`);
      return res.data;
    },
    placeholderData: keepPreviousData,
  });
};


// 게시물 좋아요 토글
export const useToggleArticlesFavorite = 
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
        return requestor.delete(`/articles/${id}/like`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
      } else {
        return requestor.post(
          `/articles/${id}/like`,
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
        openModal(message || '관심 게시물 처리 실패');
      }
    },
  });
};


// 게시물 등록
export function usePostArticles(openModal: (msg: string) => void, router: { push: (path: string) => void }) { 
    
  return useMutation({
    mutationFn: async (articlesData: ArticleCreateRequest) => {
      const res = await requestor.post<PostDetail>('/articles', articlesData);
      return res.data;
    },
    onSuccess: (data) => {
      openModal('게시물 등록이 완료되었습니다!');
      setTimeout(() => {
        router.push(`/boards/${data.id}`);
      }, 1300);
    },
    onError: (error: any) => {
      openModal(error?.response?.data?.message || '게시물 등록 실패');
    },
  });
};

// 게시물 코멘트 리스트 무한로딩
export function useInfiniteArticleCommentsWithObserver(articleId: number, limit = 5) {   // 무한로딩
  const queryResult = useInfiniteQuery<CommentListResponse, Error>({
    queryKey: ['articleComments', articleId],
    queryFn: async ({ pageParam }) => {
      const res = await requestor.get<CommentListResponse>(`/articles/${articleId}/comments`, {
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

// 게시물 코멘트 등록
export const usePostArticleComment = (articleId: number, openModal: (msg: string) => void) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (requestCommentValue: string | undefined) => {
      const token = localStorage.getItem('accessToken');
      if (!token) {
        openModal('로그인이 필요합니다.');
        return Promise.reject('No accessToken'); 
      }
      return requestor.post(
        `/articles/${articleId}/comments`,
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
      queryClient.invalidateQueries({ queryKey: ['articleComments', articleId] });
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

// 게시물 코맨트 삭제
export const useDeleteArticleComment = (articleId: number, openModal: (msg: string) => void) => {
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
        queryClient.invalidateQueries({ queryKey: ['articleComments', articleId] }); 
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

// 게시물 코멘트 수정
export const usePatchArticleComment = (articleId: number, openModal: (msg: string) => void) => {
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
      queryClient.invalidateQueries({ queryKey: ['productComments', articleId] });
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