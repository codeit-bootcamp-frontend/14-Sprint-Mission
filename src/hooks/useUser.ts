import { requestor } from "@/lib/requestor";
import { keepPreviousData, useQuery } from "@tanstack/react-query";

export interface UserFavorite {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
  tags: string[];
  favoriteCount: number;
  ownerId: number;
  ownerNickname: string;
  createdAt: string;
}

export interface UserFavorites {
  totalCount: number;
  list: UserFavorite[];
}

export interface UserFavoritesQuery {
  page?: number; 
  pageSize?: number; 
  keyword?: string; 
}

export const useGetUserFavorites = (query:UserFavoritesQuery) => { 
  const token = localStorage.getItem('accessToken');
  return useQuery({
    queryKey: ['UserFavorites', query],
    queryFn: async () => {
      const res = await requestor.get<UserFavorites>('/users/me/favorites', {
        params: query,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return res.data ;
    },
    placeholderData: keepPreviousData,
  });
};

export const useGetUserProducts = (query:UserFavoritesQuery) => { 
  const token = localStorage.getItem('accessToken');
  return useQuery({
    queryKey: ['UserProducts', query],
    queryFn: async () => {
      const res = await requestor.get<UserFavorites>('/users/me/Products', {
        params: query,
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      return res.data ;
    },
    placeholderData: keepPreviousData,
  });
};
