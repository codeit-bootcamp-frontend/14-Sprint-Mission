import { useState, useEffect } from "react";

import fetchArticles from "../api/fetchArticles";

const useFetchArticles = ({
  sortOption = "recent",
  pageSize = 10,
  keyword,
  page = 1,
}: {
  sortOption?: "recent" | "like";
  pageSize?: number;
  keyword?: string;
  page?: number;
}) => {
  const [articles, setArticles] = useState<Articles | null>(null);

  useEffect(() => {
    fetchArticles({ page, pageSize, orderBy: sortOption, keyword }).then(
      setArticles
    );
  }, [sortOption, pageSize, keyword, page]);

  return { articles };
};

export default useFetchArticles;

type Article = {
  id: number;
  title: string;
  content: string;
  image: string;
  likeCount: number;
  createdAt: string;
  updatedAt: string;
  writer: {
    id: number;
    nickname: string;
  };
};

type Articles = {
  list: Article[];
};
